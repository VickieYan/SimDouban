<template>
	<div class="movierec">
		<div class="wrap">
			<div class="title">
				<h3>{{txt}}</h3>
				<div class="more" @click='fn1'>更多 ></div>
			</div>
			<!-- <div class="pool"> -->
				<Carousel swiperid="swiper02" :loopedSlides="arrMovie.length" :loop="false" slidesPerView="auto" :autoplay=0>
					<div class='swiper-slide' slot='swiper-con' v-for='val in arrMovie' :key='val.id'>
						<Movierecitem :id='val.id'>
							<img :src="val.images.large" slot="pic">
							<div class="name" slot="name">{{val.title}}</div>
						</Movierecitem>
					</div>
				</Carousel>
		</div>
	</div>
</template>
<script>
import Movierecitem from "./movierecitem.vue";
import request from "superagent";
import jsonp from "superagent-jsonp";
import Carousel from "./carousel.vue";
export default {
  components: {
    Movierecitem,
    Carousel
  },
  data: function() {
    return {
      arrMovie: [],
      arrMovie2: []
    };
  },
  props: ["txt"],
  mounted: function() {
    request
      .get("http://api.douban.com/v2/movie/in_theaters?start=0&count=10")
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          this.arrMovie = res.body.subjects;
        }
      });
  },
  methods: {
    fn1: function() {
      this.$router.push("./moremovie");
    }
  }
};
</script>
<style>
.movierec {
  padding-left: 0.5rem;
  margin-top: 0.33rem;
  background: white;
  text-align: left;
  overflow: hidden;
}
.movierec .wrap {
  width: 100%;
  height: 9rem;
}
.movierec h3 {
  height: 2.17rem;
  line-height: 2.17rem;
  font-size: 0.56rem;
  color: #242424;
}
.movierec .title {
  position: relative;
}
.movierec .more {
  font-size: 0.4rem;
  color: #32b950;
  height: 2.17rem;
  line-height: 2.17rem;
  position: absolute;
  right: 0.6rem;
  top: 0;
}
.movierec .pool {
  height: 6.56rem;
}
.swiper02 .swiper-slide {
  width: 4rem;
}
</style>

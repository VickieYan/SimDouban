<template>
	<div class="moremovie" >
		<Movierecitem v-for="(item,index) in list" :id="val.id">
			<img :src="arrMovie[index].images.large" slot="pic">
			<div class="name" slot="name">{{arrMovie[index].title}}</div>
		</Movierecitem>
		    <!-- <p v-for="item in list">
		    <span v-text="item"></span>
		    </p> -->
		    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">    </infinite-loading>
	</div>
</template>
<script>
import request from "superagent";
import jsonp from "superagent-jsonp";
import Movierecitem from "../components/movierecitem.vue";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    Movierecitem,
    InfiniteLoading
  },
  data: function() {
    return {
      arrMovie: [],
      arrMovie2: [],
      list: []
    };
  },
  mounted: function() {
    request
      .get("http://api.douban.com/v2/movie/in_theaters?start=0&count=100")
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          this.arrMovie = res.body.subjects;
        }
      });
  },
  methods: {
    onInfinite() {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        this.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded");
      }, 1000);
    }
  }
};
</script>
<style>
.moremovie {
  padding: 1.5rem 0.2rem 1.5rem 1rem;
}
</style>
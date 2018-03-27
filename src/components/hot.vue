<template>
	<div class="hot">
		<div class="title">
			<div class="line"></div>
			<p>热点</p>
		</div>
		<div>
			<Hotitem v-for="(item,index) in list" :id=index>
				<h3 slot="title">{{arrNews[index].title}}</h3>
				<p class="content" slot="content">价格：{{arrNews[index].fee_str}}<br/>开始时间：{{arrNews[index].begin_time}}<br/>截止日期：{{arrNews[index].end_time}}</p>
				<p class="author" slot="author">地址：{{arrNews[index].address}}</p>
				<img :src="arrNews[index].image" height="120" width="40" slot="pic">
			</Hotitem>
			<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">  </infinite-loading>
		</div>
	</div>
</template>
<script>
import Hotitem from "./hotitem.vue";
import request from "superagent";
import jsonp from "superagent-jsonp";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    Hotitem,
    InfiniteLoading
  },
  data: function() {
    return {
      list: [],
      arrNews: []
    };
  },
  mounted: function() {
    var _this = this;
    // this.axios.get("../../static/data/list.json").then(function (res) {
    // 	_this.arrNews = res.data.events;

    // })

    request
      .get("https://api.douban.com/v2/event/list?loc=108288&start=0&count=100")
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          _this.arrNews = res.body.events;
        }
      });
  },
  methods: {
    onInfinite() {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 10; i++) {
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
.hot {
  width: 100%;
  text-align: left;
}
.hot .title .line {
  height: 0.68rem;
  width: 0.14rem;
  background-color: #fe7a3f;
  margin-right: 0.52rem;
  display: inline-block;
  vertical-align: bottom;
}
.hot .title p {
  font-size: 0.46rem;
  color: #fe7a3f;
  display: inline-block;
  height: 0.58rem;
  line-height: 0.58rem;
  vertical-align: bottom;
}
</style>
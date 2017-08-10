<template>
	<div class="homepage">
		<Search></Search>
		<Banner2></Banner2>
		<Hot></Hot>
	</div>
</template>
<script>
	import Search from '../components/search.vue';
	import Banner from '../components/banner.vue';
	import Banner2 from '../components/banner2.vue';
	import Hot from '../components/hot.vue';
	import request from 'superagent'
	import jsonp from 'superagent-jsonp'
	export default{
		components:{
			Search,
			Banner,
			Banner2,
			Hot

		},
		mounted: function () {
			// this.axios.get("/api/movie/search?q=aaa").then(function (res) {
			// 	// body...
			// 	console.log(res.data)
			// })

			// request.get("http://api.douban.com/v2/movie/in_theaters?start=0&count=2")
			// .use(jsonp)
			// .end(
			// 	(err,res) => {
			// 	if(!err){
			// 		console.log(res)
			// 	}
			// })

		}
	}
</script>
<style>
	.homepage{padding-top: 1.32rem;padding-bottom: 2rem}
</style>
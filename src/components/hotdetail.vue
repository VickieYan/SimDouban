<template>
	<div class="hotdetail">
		<Search></Search>
		<div class="main">
			<div v-html='news.content'></div>
		</div>
	</div>
</template>
<script>
	import request from 'superagent'
	import jsonp from 'superagent-jsonp'
	import Search from './search.vue'
	export default{
		components:{
			Search
		},
		data:function(){
			return{
				id:1,
				news:{}
			}
		},
		mounted:function(){
			this.id = this.$route.params.id;
			var _this=this;
			// this.axios.get("../../static/data/list.json").then(function (res) {
			// 	_this.news = res.data.events[_this.id]
			// })
			request.get("https://api.douban.com/v2/event/list?loc=108288&start=0&count=100")
			.use(jsonp)
			.end(
				(err,res) => {
				if(!err){
					_this.news = res.body.events[_this.id]
				}
			})

		}
	}
</script>
<style>
	.hotdetail .main{padding: 2rem 1rem;font-size: .2rem;}
	.hotdetail .main img{width: 6rem}
</style>
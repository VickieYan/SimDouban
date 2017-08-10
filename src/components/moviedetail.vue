<template>
	<div class="moviedetail">
		<div class="top">
			<img :src='movieInfo.images.large' />
		</div>
		<div class="main">
			<div class="part1">
				<h3>{{movieInfo.title}}</h3>
				<p><span>{{movieInfo.year}}</span><i>/</i><span>{{movieInfo.countries[0]}}</span><i>/</i><span>{{movieInfo.genres[0]}}</span></p>
				<div class="rating">
					<h5>豆瓣评分</h5>
					<p>{{movieInfo.rating.average==0?"暂无":movieInfo.rating.average}}</p>
				</div>
			</div>
			<div class="part2">
				<div class="wrap">
					<div class="btn btn1">想看</div>
					<div class="btn btn2">看过</div>
				</div>
			</div>
			<div class="part3">
				<h5>剧情介绍</h5>
				<p>{{subContent}}<span @click='fn1'>展开</span></p>
			</div>
			<div class="part4">
				<h5>影人</h5>
				<Carousel swiperid='swiper03' :autoplay='0' :loopedSlides='movieInfo.casts.length' slidesPerView="auto" :loop="false">
					<div class="swiper-slide" slot="swiper-con" v-for='val in movieInfo.casts'>
						<div class="item">
							<img :src='val.avatars.large'><br/>
							<span>{{val.name}}</span>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	</div>
</template>
<script>
	import request from 'superagent'
	import jsonp from 'superagent-jsonp'
	import Carousel from '../components/carousel.vue'
	export default{
		data:function(){
			return{
				movieInfo:{},
				allContent:'',
				subContent:''
			}
		},
		components:{
			Carousel
		},
		beforeCreate:function(){
			var id = this.$route.params.id;
			console.log(id)
			request.get("http://api.douban.com/v2/movie/subject/"+id)
			.use(jsonp)
			.end(
				(err,res) => {
				if(!err){
					this.movieInfo = res.body
					console.log(res.body);
					this.allContent = res.body.summary;
					this.subContent = this.allContent.substring(0,58)+"...";
				}
			})
		},
		methods:{
			fn1:function(){
				this.subContent = this.allContent;
			}
		}
	}
</script>
<style>
	.moviedetail{margin-top: 2rem;}
	.moviedetail .top{width: 100%;height: 10rem;background: #333;}
	.moviedetail .top img{height: 8rem;margin-top: 1.2rem;box-shadow: 0 0 .2rem #000;}
	.moviedetail .main{padding: 1rem;text-align: left;}
	.moviedetail .main .part1{position: relative;}
	.moviedetail .main .part1 i{font-style: normal;padding: 0 .1rem;}
	.moviedetail .main .part1 h3{font-size: .8rem}
	.moviedetail .main .part1 p{font-size: .2rem;color: #666;line-height: 1rem}
	.moviedetail .main .part1 .rating{width: 2rem;height: 2rem;box-shadow: 0 0 .2rem #ccc;position: absolute;right: 0rem;top: 0rem;}
	.moviedetail .main .part1 .rating {text-align: center;}
	.moviedetail .main .part1 .rating h5{font-weight: normal;font-size: .2rem;color: #ccc;line-height: .8rem}
	.moviedetail .main .part1 .rating p{font-weight: bold;font-size: .8rem;color: #fe7a3f;line-height: 1.1rem;}
	.moviedetail .main .part2 {text-align: center;padding-top: .8rem;border-bottom: .01rem solid #ccc;padding-bottom: .5rem;}
	.moviedetail .main .part2 .wrap{width: 90%;display: inline-block;overflow: hidden;}
	.moviedetail .main .part2 .wrap .btn{color: orange;height: 1.2rem;line-height: 1.2rem;font-size: .5rem;border: .01rem solid orange ;padding: 0 1.4rem;border-radius: .05rem;}
	.moviedetail .main .part2 .wrap .btn1{float: left;}
	.moviedetail .main .part2 .wrap .btn2{float: right;}
	.moviedetail .main .part3{padding-top: .2rem;}
	.moviedetail .main .part3 h5{font-weight: normal;font-size: .2rem;color: #ccc;line-height: .8rem}
	.moviedetail .main .part3 p{font-size: .5rem;color: black;line-height: .8rem;text-indent: 2em;}
	.moviedetail .main .part3 p span{color: #3fc046;margin-left: .2rem;}
	.moviedetail .main .part4{padding-top: .2rem;}
	.moviedetail .main .part4 h5{font-weight: normal;font-size: .2rem;color: #ccc;line-height: .8rem}
	.swiper03 .swiper-slide{height: 10rem;color: black;font-size: 3rem;width: 4rem;height: 4.8rem;}
	.swiper03 .item {width: 100%;text-align: center;}
	.swiper03 .item img{width: 3rem !important;height:  4rem!important;}
	.swiper03 .item span{width: 3rem !important;}
</style>
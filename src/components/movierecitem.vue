<template> 
	<div class="movierecitem" @click='fn1'>
		<div class="pic">
			<slot name="pic"></slot>
		</div>
		<slot name="name"></slot>
		<div class="star"></div>
	</div>
</template>
<script>
	export default{
		props:['id'],
		methods:{
			fn1:function(){
				this.$router.push({
					name:"Moviedetail",
					params:{
						id:this.id					}
				})
			}
		}
	}
</script>
<style>
	.movierecitem{width: 3.3rem;margin-right: .35rem;float: left;}
	.movierecitem .pic{width: 3.3rem;height: 4.6rem;}
	.movierecitem img{width: 100%;height: 100%;}
	.movierecitem .name{height: .9rem;line-height: .9rem;color: #171717;font-size: .42rem;font-weight: bold;letter-spacing: .05rem;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
	.movierecitem .star{width: 3.3rem;height: 1.1rem;}
</style>
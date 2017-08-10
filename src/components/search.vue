<template>
	<div class="search">
		<input :placeholder="placeholder">
		<div class="icon1"><img src="../assets/images/ic_search_gray.png"></div>
		<div class="icon2"><img src="../assets/images/ic_chat_white.png"></div>
		<div class="icon3"><img src="../assets/images/ic_code_03.jpg"></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				placeholder:"影视 图书 唱片 小组等"
			}
		}
	}
</script>
<style>
	.search{height: 1.32rem;width: 100%;background: #42bd56;position: fixed;top: 0;z-index: 100;}
	.search input{border: none;width: 10.9rem;height: .9rem;border-radius: .15rem;text-indent: 0.7rem;position: absolute;left: .21rem;top: .24rem;line-height: .9rem;font-size: .3rem;vertical-align: middle;}
	.search img{width: 100%;height: 100%}
	.search .icon1{position: absolute;width: .45rem;height: .45rem;top: -.1rem;left: .34rem}
	.search .icon2{position: absolute;width: .70rem;top: 0rem;right: .28rem}
	.search .icon3{position: absolute;width: .45rem;height: .45rem;top: -.1rem;left: 10.44rem}
</style>
<template>
	<div class="submenu">
		<div v-for="(val,index) in arrMenu" :class="{green:index==active?true:false,subitem:true}" @click="fn1(index)">{{val}}</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				active:0,
				arrMenu:["电影","读书","电视","同城","音乐"]
			}
		},
		methods:{
			fn1:function(index){
				this.active = index;
				this.$router.push('/audio/'+index)

			}
		},
		created:function(){
			this.$router.push('/audio/0')
		}
	}
</script>
<style>
	.submenu{width: 100%;height: 1.3rem;border-bottom: .02rem solid #eee;position: fixed;top: 1.32rem;z-index: 80;}
	.submenu .subitem{width: 20%;height: 1.25rem;float: left;line-height: 1.25rem;font-size: .48rem;color: #bebebe;background: white;}
	.submenu .green{color: #3fc046;border-bottom: .05rem solid #3fc046;}
</style>
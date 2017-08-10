<template>
	<div class="item" @click="fn1" :class='{green:!bol}'>
		<span v-show = "bol"><slot name="normal"></slot><br/></span>
		<span v-show = "!bol"><slot name="active"></slot><br/></span>
		<span>{{txt}}</span>
	</div>
</template>
<script>
	export default{
		props:['txt','mark','selected'],
		methods:{
			fn1:function(){
				//触发一个函数
				this.$emit('setVal',this.mark);
			}
		},
		computed:{
			bol:function(){
				if(this.mark == this.selected){
					return false;
				}else{
					return true;
				}
			}
		}
	}
</script>
<style>
	.item{float: left;width: 20%;color: #aeaeae;font-size: .3rem;line-height: .42rem;padding-top: .1rem}
	.item img{width: .62rem;display: inline-block;padding: .1rem 0;height: .62rem;}
	.green{color: #42bd56}
</style>
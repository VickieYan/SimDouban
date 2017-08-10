<template>
	<div class="remind">
		<Remindheader></Remindheader>
		<Reminditem></Reminditem>
	</div>
</template>
<script>
	import Remindheader from '../components/remindheader.vue';
	import Reminditem from '../components/reminditem.vue';
	export default{
		components:{
			Remindheader,
			Reminditem
		}
	}
</script>
<style>
	.remind{width: 100%;height: 3.33rem;background: white;margin-top: .48rem;}
</style>
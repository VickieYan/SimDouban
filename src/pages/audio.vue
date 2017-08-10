<template>
	<div class="audio">
		<Myheader  txt="书影音">
			<img src="../assets/images/ic_group_search.png" slot="icon1">
			<img src="../assets/images/ic_chat_green.png" slot="icon2">
		</Myheader>
		<Submenu></Submenu>
		<router-view></router-view>
	</div>
</template>
<script>
	import Myheader from '../components/header.vue'
	import Submenu from '../components/submenu.vue'
	export default{
		components:{
			Myheader,
			Submenu
		}
	}
</script>
<style>
	.audio{margin-top: 1.32rem;padding-bottom: 2rem;}
</style>
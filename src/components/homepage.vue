<template>
	<div>
		<Search></Search>
		<Doubantime></Doubantime>
		<Tabbar></Tabbar>
	</div>
</template>
<script>
	import Search from './search.vue';
	import Tabbar from './tabbar.vue';
	import Doubantime from './doubanTime.vue';
	export default{
		components:{
			Tabbar,
			Search,
			Doubantime

		}
	}
</script>
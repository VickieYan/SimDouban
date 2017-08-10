<template>
	<div class="group">
		<Myheader  txt="小组">
			<img src="../assets/images/ic_group_search.png" slot="icon1">
			<img src="../assets/images/ic_chat_green.png" slot="icon2">
		</Myheader>
		<Grouptitle></Grouptitle>
		<Special></Special>
		<Film></Film>
	</div>
</template>
<script>
	import Myheader from '../components/header.vue'
	import Grouptitle from '../components/grouptitle.vue'
	import Special from '../components/special.vue'
	import Film from '../components/film.vue'
	export default{
		components:{
			Myheader,
			Grouptitle,
			Special,
			Film
		}

	}
</script>
<style>
	.group{padding-top: 1.32rem;padding-bottom: 2rem}
</style>
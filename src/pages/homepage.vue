<template>
	<div class="homepage">
		<Search></Search>
		<Banner2></Banner2>
		<Hot></Hot>
	</div>
</template>
<script>
import Search from "../components/search.vue";
import Banner from "../components/banner.vue";
import Banner2 from "../components/banner2.vue";
import Hot from "../components/hot.vue";
import request from "superagent";
import jsonp from "superagent-jsonp";
export default {
  components: {
    Search,
    Banner,
    Banner2,
    Hot
  }
};
</script>
<style>
.homepage {
  padding-top: 1.32rem;
  padding-bottom: 2rem;
}
</style>
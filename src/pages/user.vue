<template>
	<div class="user">
		<Myheader  txt="我的">
			<img src="../assets/images/ic_settings.png" slot="icon2">
		</Myheader>
		<Information></Information>
		<Remind></Remind>
		<More></More>
	</div>
</template>
<script>
import Myheader from "../components/header.vue";
import Information from "../components/information.vue";
import Remind from "../components/remind.vue";
import More from "../components/more.vue";
export default {
  components: {
    Myheader,
    Information,
    Remind,
    More
  }
};
</script>
<style>
.user {
  padding-top: 1.32rem;
  padding-bottom: 2rem;
}
</style>
<template>
	<div class="movie">
		<Movierec txt="影院热映">
			<img src="../assets/images/rectangle8.jpg" slot="pic">
		</Movierec>
		<Commercial></Commercial>
		<Movierec txt="影院热映">
			<img src="../assets/images/rectangle8.jpg" slot="pic">
		</Movierec>
		<Commercial></Commercial>
	</div>
</template>
<script>
import Movierec from "../components/movierec.vue";
import Commercial from "../components/commercial.vue";
export default {
  components: {
    Movierec,
    Commercial
  }
};
</script>
<style>
.movie {
  padding-top: 1.32rem;
}
</style>
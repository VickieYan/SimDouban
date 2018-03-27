<template>
	<div class="read">
		<Movierec txt="新书速递"></Movierec>
		<Commercial></Commercial>
		<Movierec txt="新书速递"></Movierec>
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
.read {
  padding-top: 1.32rem;
}
</style>
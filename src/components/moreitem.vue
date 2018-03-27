<template>
	<div class="moreitem">
		<div><slot name="pic"></slot></div>
		<p>{{txt}}</p>
	</div>
</template>
<script>
export default {
  props: ["txt"]
};
</script>
<style>
.moreitem {
  width: 25%;
  height: 3.4rem;
  float: left;
}
.moreitem img {
  width: 0.9rem;
  margin-top: 0.86rem;
}
.moreitem p {
  font-size: 0.36rem;
  color: #5e5e5e;
  font-weight: bold;
  height: 1.17rem;
  line-height: 1.17rem;
}
</style>
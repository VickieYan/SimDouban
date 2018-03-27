<template>
	<div class="header">
		<h3>{{txt}}</h3>
		<div class="icon icon1"><slot name="icon1"></slot></div>
		<div class="icon icon2"><slot name="icon2"></slot></div>
	</div>
</template>
<script>
export default {
  props: ["txt"]
};
</script>
<style>
.header {
  height: 1.32rem;
  width: 100%;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  border-bottom: 0.02rem solid #eee;
  font-size: 0.54rem;
  color: #303030;
  line-height: 1.32rem;
  z-index: 100;
}
.header .icon {
  width: 0.72rem;
  height: 0.72rem;
  position: absolute;
  top: 0.26rem;
}
.header img {
  width: 100%;
  height: 100%;
}
.header .icon1 {
  right: 2.32rem;
}
.header .icon2 {
  right: 0.55rem;
}
</style>
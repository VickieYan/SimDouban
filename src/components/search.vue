<template>
	<div class="search">
		<input :placeholder="placeholder">
		<div class="icon1"><img src="../assets/images/ic_search_gray.png"></div>
		<div class="icon2"><img src="../assets/images/ic_chat_white.png"></div>
		<div class="icon3"><img src="../assets/images/ic_code_03.jpg"></div>
	</div>
</template>
<script>
export default {
  data: function() {
    return {
      placeholder: "影视 图书 唱片 小组等"
    };
  }
};
</script>
<style>
.search {
  height: 1.32rem;
  width: 100%;
  background: #42bd56;
  position: fixed;
  top: 0;
  z-index: 100;
}
.search input {
  border: none;
  width: 10.9rem;
  height: 0.9rem;
  border-radius: 0.15rem;
  text-indent: 0.7rem;
  position: absolute;
  left: 0.21rem;
  top: 0.24rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
  vertical-align: middle;
}
.search img {
  width: 100%;
  height: 100%;
}
.search .icon1 {
  position: absolute;
  width: 0.45rem;
  height: 0.45rem;
  top: -0.1rem;
  left: 0.34rem;
}
.search .icon2 {
  position: absolute;
  width: 0.7rem;
  top: 0rem;
  right: 0.28rem;
}
.search .icon3 {
  position: absolute;
  width: 0.45rem;
  height: 0.45rem;
  top: -0.1rem;
  left: 10.44rem;
}
</style>
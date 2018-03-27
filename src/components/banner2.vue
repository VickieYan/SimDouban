<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<img class="swiper-slide" src="../assets/images/banner1.jpg">
			<img class="swiper-slide" src="../assets/images/banner2.jpg">
			<img class="swiper-slide" src="../assets/images/banner3.jpg">
		</div>
		<div class="swiper-pagination" ></div>
	</div>
</template>
<script>
import "../assets/libs/swiper.min.js";
export default {
  mounted: function() {
    new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,

      // 如果需要分页器
      pagination: ".swiper-pagination",
      autoplay: "4000",
      autoplayDisableOnInteraction: false
    });
  }
};
</script>
<style>
@import url("../assets/libs/swiper.min.css");
.swiper-container img {
  width: 100%;
  height: 4.14rem;
}
.swiper-pagination {
  text-align: right;
}
.active {
  background: white;
}
.swiper-pagination-bullet {
  background: white;
}
</style>
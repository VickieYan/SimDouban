<template>
	<div class="tabbar">
		<Item txt="首页" mark=1 :selected = selected @setVal="fn1">
			<img src="../assets/images/ic_homepage_gray_03.jpg" slot="normal">
			<img src="../assets/images/ic_homepage_green_09.jpg" slot="active">
		</Item>	
		<Item txt="书影音" mark=2 :selected = selected @setVal="fn1">
			<img src="../assets/images/ic_movie_gray_09.jpg" slot="normal">
			<img src="../assets/images/ic_movie_green_05.jpg" slot="active">
		</Item>
		<Item txt="广播" mark=3 :selected = selected @setVal="fn1">
			<img src="../assets/images/ic_pro_gray_11.jpg" slot="normal">
			<img src="../assets/images/ic_pro_green_03.jpg" slot="active">
		</Item>	
		<Item txt="小组" mark=4 :selected = selected @setVal="fn1">
			<img src="../assets/images/ic_group_gray_06.jpg" slot="normal">
			<img src="../assets/images/ic_group_green_03.jpg" slot="active">
		</Item>
		<Item txt="我的" mark=5 :selected = selected @setVal="fn1">
			<img src="../assets/images/ic_user_gary_03.jpg" slot="normal">
			<img src="../assets/images/ic_user_green_03.jpg" slot="active">
		</Item>	
	</div>
</template>
<script>
import Item from "./tabbarItem.vue";
export default {
  components: {
    Item
  },
  data: function() {
    return {
      selected: 1,
      arrRoutes: ["/", "/audio", "/broadcast", "/group", "/user"]
    };
  },
  methods: {
    fn1: function(val) {
      this.selected = val;
      if (this.selected == 2) {
        this.$router.push(this.arrRoutes[this.selected - 1] + "/0");
        return;
      }
      this.$router.push(this.arrRoutes[this.selected - 1]);
    }
  }
};
</script>
<style>
.tabbar {
  width: 100%;
  height: 1.47rem;
  background: #f7f7f7;
  border-top: 0.01rem solid #eee;
  position: fixed;
  bottom: 0;
  opacity: 0.95;
  z-index: 100;
}
</style>
<template>
	<div class="banner">
		<ul class="pictures">
			<li v-for='(val,index) in arrSrc' :class="{'show':index==nowShow?true:false}"><img :src="val"></li>

		</ul>
		<ol class="points">
			<li v-for='(val,index) in arrSrc' :class="{'ac':index==nowShow?true:false}"></li>
		</ol>
	</div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      arrSrc: [
        require("../assets/images/banner1.jpg"),
        require("../assets/images/banner6.jpg"),
        require("../assets/images/banner3.jpg"),
        require("../assets/images/banner4.jpg"),
        require("../assets/images/banner5.jpg")
      ],
      nowShow: 0
    };
  },
  mounted: function() {
    var _this = this;
    setInterval(function() {
      _this.nowShow++;
      if (_this.nowShow == 5) {
        _this.nowShow = 0;
      }
    }, 1500);
  }
};
</script>
<style>
.banner {
  width: 100%;
  height: 4.14rem;
  position: relative;
  overflow: hidden;
}
.banner img {
  width: 100%;
  height: 100%;
}
.banner ul li {
  width: 100%;
  height: 4.14rem;
  position: absolute;
  top: 0;
  opacity: 0;
  transition: opacity 0.8s;
}
.banner ol {
  display: inline-block;
  position: absolute;
  right: 0.6rem;
  bottom: 0.4rem;
}
.banner ol li {
  width: 0.25rem;
  height: 0.25rem;
  background: white;
  float: left;
  margin: 0.15rem;
  border-radius: 50%;
  opacity: 0.3;
}
.banner .hide {
  opacity: 0;
}
.banner .show {
  opacity: 1;
}
.banner .ac {
  opacity: 1;
}
</style>
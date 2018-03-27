<template>
	<div class="hotitem" @click='fn1'>
		<div class="hot_left">
			<slot name="title"></slot>
			<slot name="content"></slot>
			<div class="line"></div>
			<slot name="author"></slot>
		</div>
		<div class="hot_right">
			<div class="pic">
				<slot name="pic"></slot>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: ["id"],
  methods: {
    fn1: function() {
      console.log(this.id);
      this.$router.push({
        name: "Hotdetail",
        params: {
          id: this.id
        }
      });
    }
  }
};
</script>
<style>
.hotitem {
  padding-left: 0.69rem;
  padding-top: 0.57rem;
  background: white;
  border-bottom: 0.02rem solid #eee;
  overflow: hidden;
}
.hotitem .hot_left {
  width: 7.3rem;
  float: left;
}
.hotitem .hot_right {
  float: right;
}
.hotitem h3 {
  line-height: 0.83rem;
  color: #454545;
  font-size: 0.62rem;
  padding-bottom: 0.3rem;
}
.hotitem .content {
  line-height: 0.6rem;
  color: #9e9e9e;
  font-size: 0.4rem;
  padding-bottom: 0.33rem;
}
.hotitem .line {
  width: 0.5rem;
  height: 0.02rem;
  background: #9e9e9e;
}
.hotitem .author {
  line-height: 1.2rem;
  height: 1.2rem;
  color: #9e9e9e;
  font-size: 0.4rem;
}
.hotitem .pic {
  width: 3rem;
  height: 3rem;
  padding-right: 0.65rem;
  padding-top: 0.2rem;
}
.hotitem .pic img {
  width: 100%;
}
</style>

<template>
	<div class="information">
		<div class="info_left">
			<div class="user_icon"><img src="../assets/images/square5.jpg"></div>
		</div>
		<div class="info_right">
			<p class="name">Vickie<i><img src="../assets/images/ic_mine_female.png"></i></p>
			<p class="id">ID:158746672</p>
			<div class="line"></div>
			<div class="count">
				<span>关注 0</span>
				<span>被关注 0</span>
			</div>
		</div>
	</div>
</template>
<script></script>
<style>
.information {
  width: 100%;
  height: 4.12rem;
  background-color: #f79e4c;
  color: white;
  text-align: left;
  letter-spacing: 0.03rem;
}
.information {
  background-image: url(../assets/images/live_player_bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.information .user_icon {
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 0.65rem;
  margin-top: 0.62rem;
}
.information img {
  width: 100%;
  height: 100%;
}
.information .info_left {
  width: 30%;
  float: left;
}
.information .info_right {
  float: left;
  padding-top: 0.74rem;
  width: 70%;
}
.information .name {
  font-size: 0.6rem;
  line-height: 0.9rem;
}
.information .name i {
  display: inline-block;
  height: 0.3rem;
  width: 0.28rem;
  padding-left: 0.2rem;
}
.information .id {
  font-size: 0.32rem;
  line-height: 0.58rem;
  padding-bottom: 0.25rem;
}
.information .line {
  height: 0.03rem;
  width: 100%;
  background: white;
  opacity: 0.2;
}
.information .count {
  font-size: 0.4rem;
  line-height: 0.64rem;
  margin-top: 0.48rem;
}
.information .count span {
  margin-right: 0.73rem;
}
</style> 
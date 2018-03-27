<template>
	<div class="broaditem">
		<slot name="name"></slot>
		<slot name="follower"></slot>
		<slot name="title"></slot>
		<slot name="content"></slot>
		<div class="count">
			<div class="icon like"><img src="../assets/images/ic_like.png"></div>
			<div class="icon comment"><img src="../assets/images/ic_group_comment_0.png"></div>
			<slot name="like"></slot>
			<slot name="comment"></slot>
		</div>
		<div class="user_icon">
			<slot name="user"></slot>
		</div>
		<div class="focus">关注</div>
		<div class="close">
			<img src="../assets/images/ic_close_status_recommend.png">
		</div>
		
	</div>
</template>
<style>
.broaditem {
  width: 8.18rem;
  background: white;
  margin: 0 auto;
  border-radius: 0.1rem;
  box-shadow: 0 0 0.3rem #ccc;
  padding-left: 2.6rem;
  padding-right: 0.9rem;
  text-align: left;
  font-family: "Microsoft YaHei";
  position: relative;
  margin-bottom: 0.38rem;
}
.broaditem h3 {
  font-size: 0.48rem;
  color: #232323;
  padding-top: 0.6rem;
  line-height: 1.07rem;
}
.broaditem p {
  font-size: 0.3rem;
  color: #bbbbbb;
  line-height: 0.36rem;
}
.broaditem .title {
  font-size: 0.48rem;
  color: #292929;
  line-height: 1.4rem;
}
.broaditem .content {
  width: 7.4rem;
  background: #0d1225;
  color: #dee4f2;
  padding: 0.2rem 0.4rem;
  font-size: 0.3rem;
  line-height: 0.7rem;
  font-family: "Microsoft YaHei";
}
.broaditem span {
  color: #ccc;
  font-size: 0.2rem;
  line-height: 1.65rem;
  margin-left: 0.84rem;
}
.broaditem .user_icon {
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  width: 1.67rem;
  height: 1.67rem;
  left: 0.54rem;
  top: 0.54rem;
}
.broaditem img {
  width: 100%;
  height: 100%;
}
.broaditem .focus {
  width: 2.5rem;
  height: 0.92rem;
  line-height: 0.92rem;
  color: white;
  background: #42c055;
  border-radius: 0.15rem;
  position: absolute;
  right: 0.94rem;
  top: 0.94rem;
  text-align: center;
  font-size: 0.45rem;
  vertical-align: middle;
  box-shadow: 0 0 0.2rem #ccc;
}
.broaditem .close {
  width: 0.93rem;
  height: 0.93rem;
  position: absolute;
  right: 0;
  top: 0;
}
.broaditem .icon {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
}
.broaditem .count {
  position: relative;
}
.broaditem .like {
  left: 0;
  top: 0.15rem;
}
.broaditem .comment {
  left: 1.8rem;
  top: 0.15rem;
}
</style>
<template>
	<div class="filmitem">
		<slot name='groupname'></slot>
		<slot name='discribe'></slot>
		<div class="icon">
			<slot name='icon'></slot>
		</div>
		<slot name='count'></slot>
		<div class="check"><img src="../assets/images/ic_group_check_anonymous.png"></div>
	</div>
</template>
<style>
.filmitem {
  text-align: left;
  width: 6.2rem;
  padding-left: 2rem;
  margin-top: 1rem;
  position: relative;
}
.filmitem h3 {
  color: #292929;
  height: 0.65rem;
  line-height: 0.65rem;
  font-size: 0.5rem;
  padding-left: 0.2rem;
}
.filmitem p {
  font-size: 0.3rem;
  line-height: 0.53rem;
  color: #9a9a9a;
}
.filmitem .icon {
  width: 1.63rem;
  height: 1.63rem;
  border-radius: 0.1rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: -0.1rem;
}
.filmitem img {
  height: 100%;
  width: 100%;
}
.filmitem .check {
  width: 0.88rem;
  height: 0.88rem;
  position: absolute;
  top: 0.35rem;
  right: -3rem;
}
.filmitem .count {
  font-size: 0.3rem;
  color: #bebebe;
  position: absolute;
  top: 0.48rem;
  right: -1.9rem;
}
</style>
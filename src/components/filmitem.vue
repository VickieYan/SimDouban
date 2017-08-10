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
	.filmitem{text-align: left;width: 6.2rem;padding-left: 2rem;margin-top: 1rem;position: relative;}
	.filmitem h3{color: #292929;height: .65rem;line-height: .65rem;font-size: .5rem;padding-left: .2rem;}
	.filmitem p{font-size: .3rem;line-height: .53rem;color: #9a9a9a;}
	.filmitem .icon{width: 1.63rem;height: 1.63rem;border-radius: .1rem;overflow: hidden;position: absolute;top: 0;left: -.1rem;}
	.filmitem img{height: 100%;width: 100%;}
	.filmitem .check{width: .88rem;height: .88rem;position: absolute;top: .35rem;right: -3rem;}
	.filmitem .count{font-size: .3rem;color: #bebebe;position: absolute;top: .48rem;right: -1.9rem;}
</style>
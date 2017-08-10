<template>
	<div class="broadcast">
		<Myheader  txt="广播">
			<img src="../assets/images/ic_status_search_user.png" slot="icon1">
			<img src="../assets/images/ic_chat_green.png" slot="icon2">
		</Myheader>
		<Findtitle></Findtitle>
		<Broaditem>
			<h3 slot="name">Vickie</h3>
			<p slot="follower">4787人关注</p>
			<div class="title" slot="title">爱指向处于虚弱中的他人。</div>
			<div class="content" slot="content">遭遇到的对象与你之上。爱人的临显，与其温柔的支配方式合二为一。温柔的样式，在于一种极端的脆弱，在于一种可伤害性。温柔显示在存在与不存在的交界处，就像一种柔和的热烈；在这种柔和的热烈中，存在消融在光辉里，就像《牧神的午后》中仙女们那“轻盈的肉色” “在睡衣弄弄的空中飞舞” ，消解个体，摆脱自己。</div>
			<span slot="like">12</span>
			<span slot="comment">1</span>
			<img src="../assets/images/square12.jpg" slot="user">
		</Broaditem>
		<Broaditem>
			<h3 slot="name">韩松落</h3>
			<p slot="follower">4787人关注</p>
			<div class="title" slot="title">“好了好了，我知道你的水平了。”——《立春》最后，音乐学院教授对王彩玲说。</div>
			<span slot="like">12</span>
			<span slot="comment">1</span>
			<img src="../assets/images/square16.jpg" slot="user">
		</Broaditem>
		<Broaditem>
			<h3 slot="name">Frank</h3>
			<p slot="follower">4787人关注</p>
			<div class="title" slot="title">爱指向处于虚弱中的他人。</div>
			<div class="content" slot="content">遭遇到的对象与你之上。爱人的临显，与其温柔的支配方式合二为一。温柔的样式，在于一种极端的脆弱，在于一种可伤害性。温柔显示在存在与不存在的交界处，就像一种柔和的热烈；在这种柔和的热烈中，存在消融在光辉里，就像《牧神的午后》中仙女们那“轻盈的肉色” “在睡衣弄弄的空中飞舞” ，消解个体，摆脱自己。</div>
			<span slot="like">12</span>
			<span slot="comment">1</span>
			<img src="../assets/images/square13.jpg" slot="user">
		</Broaditem>
	</div>
</template>
<script>
	import Myheader from '../components/header.vue'
	import Findtitle from '../components/findtitle.vue'
	import Broaditem from '../components/broaditem.vue'
	export default{
		components:{
			Myheader,
			Findtitle,
			Broaditem
		}
	}
</script>
<style>
	.broadcast{padding-top: 1.32rem;padding-bottom: 2rem}
</style>
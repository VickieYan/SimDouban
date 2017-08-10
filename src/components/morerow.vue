<template>
	<div>
		<div class="morerow">
			<Moreitem txt="喜欢"><img src="../assets/images/ic_my_likes.png" slot="pic"></Moreitem>
			<Moreitem txt="日记"><img src="../assets/images/ic_my_note.png" slot="pic"></Moreitem>
			<Moreitem txt="相册"><img src="../assets/images/ic_my_album.png" slot="pic"></Moreitem>
			<Moreitem txt="我的广播"><img src="../assets/images/ic_my_status.png" slot="pic"></Moreitem>
		</div>
		<div class="morerow">
			<Moreitem txt="电影·电视"><img src="../assets/images/ic_my_movies_tvs.png" slot="pic"></Moreitem>
			<Moreitem txt="读书"><img src="../assets/images/ic_my_books.png" slot="pic"></Moreitem>
			<Moreitem txt="音乐"><img src="../assets/images/ic_my_music.png" slot="pic"></Moreitem>
			<Moreitem txt="同城活动"><img src="../assets/images/ic_my_events.png" slot="pic"></Moreitem>
		</div>
		<div class="morerow">
			<Moreitem txt="豆列"><img src="../assets/images/ic_my_doulist.png" slot="pic"></Moreitem>
			<Moreitem txt="订单"><img src="../assets/images/ic_my_orders.png" slot="pic"></Moreitem>
			<Moreitem txt="钱包"><img src="../assets/images/ic_my_wallet.png" slot="pic"></Moreitem>
		</div>
	</div>

</template>
<script>
	import Moreitem from './moreitem.vue'
	export default{
		components:{
			Moreitem
		}
	}
</script>
<style>
	.morerow{width: 100%;height: 3.4rem;border-bottom: .02rem solid #e3e3e3}
</style>
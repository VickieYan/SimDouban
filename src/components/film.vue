<template>
	<div class="film">
		<div class="title">影视</div>
		<Filmitem>
			<h3 slot="groupname">日剧fans</h3>
			<p slot="discribe">请自由讨论你所热爱的与日剧相关的话题。以上。</p>
			<img src="../assets/images/square18.jpg" slot="icon">
			<div class="count"  slot="count">306537人</div>
		</Filmitem>
		<Filmitem>
			<h3 slot="groupname">Gossip Girl</h3>
			<p slot="discribe">I love you.Always hava.Always will.</p>
			<img src="../assets/images/square8.jpg" slot="icon">
			<div class="count"  slot="count">86981人</div>
		</Filmitem>
		<Filmitem>
			<h3 slot="groupname">佳片推荐</h3>
			<p slot="discribe">加入豆瓣人数最多的影视组织，互相推荐好片。</p>
			<img src="../assets/images/square3.jpg" slot="icon">
			<div class="count"  slot="count">86981人</div>
		</Filmitem>
		<Filmitem>
			<h3 slot="groupname">日剧fans</h3>
			<p slot="discribe">请自由讨论你所热爱的与日剧相关的话题。以上。</p>
			<img src="../assets/images/square1.jpg" slot="icon">
			<div class="count"  slot="count">306537人</div>
		</Filmitem>
		<Filmitem>
			<h3 slot="groupname">Gossip Girl</h3>
			<p slot="discribe">I love you.Always hava.Always will.</p>
			<img src="../assets/images/square2.jpg" slot="icon">
			<div class="count"  slot="count">86981人</div>
		</Filmitem>
		<Filmitem>
			<h3 slot="groupname">佳片推荐</h3>
			<p slot="discribe">加入豆瓣人数最多的影视组织，互相推荐好片。</p>
			<img src="../assets/images/square4.jpg" slot="icon">
			<div class="count"  slot="count">86981人</div>
		</Filmitem>
	</div>
</template>
<script>
import Filmitem from "./filmitem.vue";
export default {
  components: {
    Filmitem
  }
};
</script>
<style>
.film {
  width: 11.18rem;
  margin: 0 auto;
  border-top: 0.03rem solid #ddd;
  margin-top: 0.88rem;
}
.film .title {
  color: #424242;
  font-size: 0.46rem;
  padding: 0 0.66rem;
  font-weight: bold;
  background: #f8f8f8;
  width: 2.3rem;
  margin: -0.4rem auto;
  height: 0.8rem;
  line-height: 0.8rem;
}
</style>
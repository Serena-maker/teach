<template>
  <div class="article">
    <!-- <Header></Header> -->
    <Banner :data="banner"></Banner>
	<van-dropdown-menu>
	  <van-dropdown-item v-model="value1" :options="option1" />
	  <van-dropdown-item v-model="value2" :options="option2" />
	</van-dropdown-menu>
	<div class="article_box">
		<ul>
			<router-link
			  v-for="(item,index) of infolist"
			  :key="item._id"
			  to="/"
			>
			  <Info :item="item" />
			</router-link>
		</ul>
	</div>
	<Pagebox></Pagebox>
	<Help></Help>
	<Footer></Footer>
	<Backtop></Backtop>
  </div>
</template>

<script>
	import Backtop from '../components/backtop.vue';
	import Header from '../layouts/header.vue';
	import Banner from '../components/banner.vue';
	import Info from '../components/info.vue';
	import Help from '../components/help.vue';
	import Pagebox from '../components/pagebox.vue';
	import Footer from '@/layouts/footer.vue';
  export default {
    data(){return {
		value1: 0,
		      value2: 'a',
		      option1: [
		        { text: '所有地区', value: 0 },
		        { text: '哈哈', value: 1 },
		        { text: '嘿嘿', value: 2 }
		      ],
		      option2: [
		        { text: '所有分类', value: 'a' },
		        { text: '数学', value: 'b' },
		        { text: '英语', value: 'c' },
		      ],
	  infolist:[],
	  banner:[]
	}},
    components:{
		Header,Banner,Info,Help,Pagebox,Footer,Backtop
	},
    mounted(){
		this.$axios({
		  url:'/api/homer',
		  params:{_page:1,_limit:10}
		}).then(
		// res=>console.log(res.data.data)
		  res=>this.infolist=res.data.data
		)
		
		this.$axios({
		  url:'/api/banner',
		  params:{_page:1,_limit:4}
		}).then(
		  // res=>console.log(res)
		  res=>this.banner=res.data.data
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .article_box{
  	  padding: .36rem .3rem 0;
  	  background: #fff;
  }
</style>

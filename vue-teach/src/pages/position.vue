<template>
  <div class="position">
    <!-- <Header></Header> -->
    <Banner :data="banner" @getVal="getValue"></Banner>
	<van-dropdown-menu>
	  <van-dropdown-item v-model="value1" :options="option1" />
	  <van-dropdown-item v-model="value2" :options="option2" />
	</van-dropdown-menu>
    <div class="jobs_box">
    	<ul>
    		<router-link
    		  v-for="(item,index) of joblist"
    		  :key="item._id"
    		  to="/"
    		>
    		  <Job :item="item" />
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
	import Job from '../components/job.vue';
	import Help from '../components/help.vue';
	import Pagebox from '../components/pagebox.vue';
	import Footer from '@/layouts/footer.vue';
  export default {
    data(){return {
		  value1: 0,
		  value2: 'a',
		  option1: [
			{ text: '所有地区', value: 0 },
			{ text: '四川', value: 1 },
			{ text: '广州', value: 2 }
		  ],
		  option2: [
			{ text: '所有分类', value: 'a' },
			{ text: '高中', value: 'b' },
			{ text: '初中', value: 'c' },
		  ],
		joblist:[],
		banner:[],
		msg:''
	}},
    components:{
		Header,Banner,Job,Help,Pagebox,Footer,Backtop
	},
    mounted(){
		this.$axios({
		  url:'/api/banner',
		  params:{_page:1,_limit:4}
		}).then(
		  // res=>console.log(res)
		  res=>this.banner=res.data.data
		)
		
		this.$axios({
		  url:'/api/home',
		  params:{_page:2,_limit:10}
		}).then(
		// res=>console.log(res.data.data)
		  res=>{this.joblist=res.data.data}
		)
	},
    updated(){},
    methods:{
		getValue(data){
			this.msg=data;
			console.log(this.msg);
			let arr=['数学','英语','化学','管理','生物','助教','音乐','科学'];
			let onoff=true;
			arr.forEach((item,index)=>{
				if(this.msg.includes(item)){
					this.$router.push('/list/'+item)
					onoff=false;
				}
			})
				if(onoff){
					alert('请重新搜索')
				}
		}
	}
  }
</script>

<style scoped>
  .jobs_box{
  	  padding: .36rem .3rem 0;
  	  background: #fff;
  }
</style>

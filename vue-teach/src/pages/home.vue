<template>
	<div class="home">
		<!-- <Header></Header> -->
		<Banner :data="banner"></Banner>
		<div class="content">
			<div class="menue_box">
			  <ul>
				  <router-link tag="li" class="my" to="/personal">
					  <a title="个人中心" href="">
						  <i></i>
						  <br>
						  <span>个人中心</span>
					  </a>
				  </router-link>
				  <router-link tag="li" class="jobs" to="/position">
					  <a title="最新职位" href="/job">
						  <i></i>
						  <br>
						  <span>最新职位</span>
					  </a>
				  </router-link>
				   <router-link tag="li" class="article" to="/article">
					  <a title="招聘简章" href="/article">
						  <i></i>
						  <br>
						  <span>招聘简章</span>
					  </a>
				  </router-link>
				   <router-link tag="li" class="community" to="/">
					  <a title="教师社区" href="/">
						  <i></i>
						  <br>
						  <span>教师社区</span>
					  </a>
				  </router-link>
			  </ul>
		  </div>	
			<div class="ad">
				<a href="">
					<img src="../assets/images/1559721456617.jpg" />
				</a>
			</div>
			<div class="jobs_box">
				<p class="box_title">最新教师招聘职位</p>
				<ul>
					<router-link
					  v-for="(item,index) of joblist"
					  :key="item._id"
					  :to="`/jobdetail/${item._id}?dataName=home`"
					  :dataName="'home'"
					>
					  <Job :item="item" />
					</router-link>
				</ul>
				<Morelist text="更多职位推荐" hf="/position"></Morelist>
			</div>
			<div class="logo_ad_box">
				<p class="box_title">品牌学校</p>
				<ul>
					<li>
						<a href="http://www.jiaoshizhaopin.net/ad_count/index.php?ad_name=m_home_105|0&img=/data/comads/2019/11/08/1573195776933.jpg&url=http://m.jiaoshizhaopin.net/company/detail?company_id=144118" target="_blank">
							<img src="../assets/images/1554696673707.jpg" />
						</a>
					</li>
					<li>
						<a href="http://www.jiaoshizhaopin.net/ad_count/index.php?ad_name=m_home_105|1&img=/data/comads/2019/04/08/1554696843248.jpg&url=http://m.jiaoshizhaopin.net/company/detail?company_id=28684" target="_blank">
							<img src="../assets/images/1554696768429.jpg" />
						</a>
					</li>
					<li>
						<a href="http://www.jiaoshizhaopin.net/ad_count/index.php?ad_name=m_home_105|2&img=/data/comads/2019/04/08/1554696768429.jpg&url=http://m.jiaoshizhaopin.net/company/detail?company_id=143255" target="_blank">
							<img src="../assets/images/1554696843248.jpg" />
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							<img src="../assets/images/1573195776933.jpg" />
						</a>
					</li>
				</ul>
			</div>
			<div class="article_box">
				<p class="box_title">最新教师招聘信息</p>
				<ul>
					<router-link
					  v-for="(item,index) of infolist"
					  :key="item._id"
					  :to="`/jobdetail/${item._id}?dataName=homer`"
					  :dataName="'homer'"
					>
					  <Info :item="item" />
					</router-link>
				</ul>
				<Morelist text="更多招聘信息" hf="/article"></Morelist>
			</div>	
			<Pagebox></Pagebox>
		</div>
		<Help></Help>
		<Footer></Footer>
		<Backtop></Backtop>
	</div>
</template>

<script>
	import Backtop from '../components/backtop.vue';
	import Footer from '@/layouts/footer.vue';
	import Header from '../layouts/header.vue';
	import Banner from '../components/banner.vue';
	import Job from '../components/job.vue';
	import Morelist from '../components/morelist.vue';
	import Info from '../components/info.vue';
	import Help from '../components/help.vue';
	import Pagebox from '../components/pagebox.vue';
  export default {
    data(){return {
		joblist:[],
		infolist:[],
		banner:[]
	}},
    components:{
		Header,Footer,Banner,Job,Morelist,Info,Help,Pagebox,Backtop
	},
    mounted(){
		this.$axios({
		  url:'/api/home',
		  params:{_page:1,_limit:10}
		}).then(
		// res=>console.log(res.data.data)
		  res=>this.joblist=res.data.data
		)
		
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
  .home .menue_box{
	  background: #fff;
	  padding: .24rem 0;
	  float: left;
	  width: 100%;
	  border-bottom: .1rem solid #f0f1f2;
  }
  .home .menue_box ul li{
	  float: left;
	  width: 25%;
	  text-align: center;
  }
  .home .menue_box ul li a{
	 
  }
  .home .menue_box ul li a i{
	 display: inline-block;
	 width: .74rem;
	 height:.74rem;
  }
  .home .menue_box ul li.my a i{
	 background: url(../assets/images/index_my.png) no-repeat;
	 background-size: .74rem;
  }
  .home .menue_box ul li.article a i{
	 background: url(../assets/images/index_article.png) no-repeat;
	 background-size: .74rem;
  }
  .home .menue_box ul li.jobs a i{
	 background: url(../assets/images/index_jobs.png) no-repeat;
	 background-size: .74rem;
  }
  .home .menue_box ul li.community a i{
	 background: url(../assets/images/index_community.png) no-repeat;
	 background-size: .74rem;
  }
  .home .menue_box ul li a span{
	 color: #999;
  }
  .home .ad img{
	  width: 100%;
  }
 .home .jobs_box,.article_box{
 	  padding: .36rem .3rem 0;
 	  background: #fff;
 }
 .home .box_title{
 	  color: #212121;
 	  font-size: .32rem;
 	  margin: 0 0 .3rem 0;
 	  font-weight: bold;
 } 
 .home .logo_ad_box{
	 background: #fff;
	 /* width: calc(100% - .6rem); */
	 
	 overflow: hidden;
	 padding: .36rem .3rem 0;
 }
 .home .logo_ad_box li{
	 float: left;
	 /* width: calc(50% - .1rem); */
	 width: 45%;
	 margin: 0 .2rem 0 0;
 }
 .home .logo_ad_box li a{
	 width: 100%;
 }
 .home .logo_ad_box li a img{
	 width: 100%;
 }
 
</style>

<template>
  <div class="job_detail">
	  <!-- <Header></Header> -->
    <div class="title_box">
		<h1>{{jobdetail.title}}</h1>
		<div class="wage">
			<p>{{jobdetail.pay}}</p>
		</div>
		<div class="info">
			<ul>
				<li class="district"><i></i><span>{{adress}}</span></li>
				<li class="experience"><i></i><span>1-3年</span></li>
				<li class="education"><i></i><span>硕士</span></li>
				<li class="amount"><i></i><span>3人</span></li>
			</ul>
			<div class="click">
				<p>112阅读</p>
				<p>2020.1.31截止</p>
			</div>
		</div>
	</div>
	<Morelist text="更多职位推荐" hf="/position"></Morelist>
	<Help></Help>
	<div class="delivery_box">
		<div class="service">
			<a href="">
				<i></i>
			</a>
		</div>
		<div id="shareBtn" class="share">
			<i></i>
			<span>分享</span>
		</div>
		<div class="favorites " data-favorites="0">
			<i></i>
			<span>收藏</span>
		</div>
		<div class="delivery " data-delivery="0">
			<input type="button" value="投递简历">
		</div>
	</div>
  </div>
</template>

<script>
	import Header from '../layouts/header.vue';
	import Morelist from '../components/morelist.vue';
	import Help from '../components/help.vue';
  export default {
    data(){return {
		jobdetail:{},
		adress:""
	}},
    components:{
		Header,Morelist,Help
	},
    mounted(){
		this.$axios({
		  url: '/api/' + this.$route.query.dataName + '/' + this.$route.params._id,
		}).then(
		  // res => this.jobdetail = res.data.data
		  
		  res => {
			  this.jobdetail = res.data.data,
			  this.adress=res.data.data.company.split(" ")[0]
			  // console.log(res.data.data.company.split(" ")[0])}
			}
		)
	},
    updated(){},
    methods:{
		}
  }
</script>

<style scoped>
  .job_detail{
	  background: #f0f1f2;
	  padding: .04rem 0 .2rem 0;
  }
  .job_detail .title_box {
      float: left;
      width: calc(100% - .6rem);
      padding: .3rem;
      background: #fff;
  }
  .title_box h1 {
      font-size: .36rem;
      line-height: .48rem;
      color: #202020;
      margin: 0 0 .24rem 0;
      font-weight: bold;
  }
  .title_box .wage {
      margin: 0 0 .3rem 0;
  }
  .title_box .wage p {
      font-size: .28rem;
      color: #f3711a;
      font-weight: bold;
  }
  .title_box .info ul {
      float: left;
      width: 100%;
       margin: 0 0 .3rem 0;
  }
  .title_box .info ul li {
      float: left;
      margin: 0 .2rem .1rem 0;
  }
  .title_box .info ul li span {
      float: left;
      color: #999999;
  }
  .title_box .info ul li i {
      float: left;
      display: inline-block;
      height: .26rem;
      margin: .04rem .04rem 0 0;
  }
  .title_box .info ul li.district i {
      background: url(../assets/images/district_icon.png) no-repeat;
      background-size: .22rem .26rem;
      width: .22rem;
  }
  .title_box .info ul li.experience i {
      background: url(../assets/images/work_icon.png) no-repeat;
      background-size: .26rem .26rem;
      width: .26rem;
  }
  .title_box .info ul li.education i {
      background: url(../assets/images/education_icon.png) no-repeat;
      background-size: .32rem .26rem;
      width: .32rem;
  }
  .title_box .info ul li.amount i {
      background: url(../assets/images/amount_icon.png) no-repeat;
      background-size: .26rem .26rem;
      width: .26rem;
  }
  .title_box .click p {
      color: #999;
      float: left;
      margin: 0 .3rem 0 0;
  }
  .delivery_box {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.3rem;
      background: #fff;
      border-top: .02rem solid #f1f1f1;
      box-shadow: 0 .06rem .06rem .06rem #eae7e7;
  }
  .delivery_box .service {
      float: left;
      position: relative;
      z-index: 2;
      margin: .36rem 0 0 0;
  }
  .delivery_box .service i {
      float: left;
      display: inline-block;
      width: .7rem;
      height: .7rem;
      background: url(../assets/images/service_icon.png) no-repeat;
      background-size: .7rem;
  }
  .delivery_box .share,.favorites {
      float: left;
      position: relative;
      z-index: 2;
      margin: .5rem 0 0 .2rem;
  }

  .delivery_box .share i{
	  float: left;
	  display: inline-block;
	  width: .42rem;
	  height: .4rem; 
	  background: url(../assets/images/share_icon.png) no-repeat;
	  background-size: .42rem .4rem;
  }
  .delivery_box .favorites i{
	  float: left;
	  display: inline-block;
	  width: .42rem;
	  height: .4rem; 
	  background: url(../assets/images/favorites_icon.png) no-repeat;
	  background-size: .42rem .4rem;
  }
  .delivery_box .share span {
      float: left;
      display: inline-block;
      height: .4rem;
      line-height: .4rem;
      font-size: .28rem;
      color: #999;
      margin: 0 0 0 .1rem;
  }
  .delivery_box .favorites span {
      float: left;
      display: inline-block;
      height: .4rem;
      line-height: .4rem;
      font-size: .28rem;
      color: #999;
      margin: 0 0 0 .1rem;
  }
  .delivery_box .delivery {
      float: right;
      /* width: calc(100% - 4.3rem); */
	  width: 2.4rem;
      position: relative;
      z-index: 2;
      margin: .2rem .2rem 0 0;
  }
  .delivery_box .delivery input {
      width: 100%;
      display: inline-block;
      height: .9rem;
      line-height: .9rem;
      color: #fff;
      text-align: center;
      background: #f3711a;
      border-radius: .04rem;
      overflow: hidden;
      font-size: .4rem;
  }
</style>

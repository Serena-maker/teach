<template>
  <div class="">
    <!-- <Header></Header> -->
	<div class="title_box">
		<h1>{{infodetail.title}}</h1>
		<div class="info">
			<div class="left">
				<label>{{infodetail.date}}</label>
				<span>（招聘）</span>
				<label>阅读</label>
				<span>(657)</span>
			</div>
			<div class="right">
			<label>今天</label>
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
		infodetail:{}
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
			  this.infodetail = res.data.data
			   // console.log(res.data.data);
			}
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .title_box {
      float: left;
      width: calc(100% - .6rem);
      padding: .3rem;
      background: #fff;
  }
  .title_box h1 {
      font-size: .32rem;
      line-height: .44rem;
      color: #202020;
      margin: 0 0 .24rem 0;
  }
  .title_box .info {
      float: left;
      width: 100%;
      height: .32rem;
  }
  .left{
	  float: left;
  }
  .title_box .info label {
      float: left;
      color: #999999;
  }
   .title_box .info span {
      float: left;
      color: #f3711a;
      margin: 0 .2rem 0 .08rem;
      line-height: .32rem;
  }
  .right{
	  float: right;
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

<template>
		<div class="">
			<router-link tag="li" :to="`/jobdetail/${item._id}?dataName=home`">
				<div class="job_box">
					<a title="" href="">{{item.title}}</a>
					<span>{{item.pay}}</span> 
				</div>
				<div class="company_box">
					<a title="" href="">{{item.company}}</a>
					<span>{{item.date}}</span>
				</div>
			</router-link>
		</div>
</template>

<script>
  export default {
	  // name:'home',
    data(){return {}},
	props:{
		// data:{
		//   type:Object,
		//   default:function(){
		//     return {}
		//   }
		// },
		item:{
			type:Object,
			default:function(){
				return {}
			}
		},
		dataName:{
		  type:String,
		  default:null
		},
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
   /* .jobs_box{
  	  padding: .36rem .3rem 0;
  	  background: #fff;
  }
   .box_title{
  	  color: #212121;
  	  font-size: .32rem;
  	  margin: 0 0 .3rem 0;
  	  font-weight: bold;
  } */
    li{
  	  width: 100%;
  	  height: .76rem;
  	  padding: .1rem 0 .3rem 0;
  	  background: #fff;
  	  margin: 0 0 .05rem 0;
  	  border-bottom: .02rem solid #ededed;
  }
    li .job_box{
  	  width: 100%;
  	  float: left;
  }
    li .job_box a{
  	  font-size: .32rem;
  	  color: #202020;
  	  font-weight: normal;
  	  float: left;
  	  height: .4rem;
  	  line-height: .4rem;
  	  max-width: 65%;
  	  overflow: hidden;
  }
    li .job_box span{
  	  float: right;
  	  font-weight: bold;
  	  font-size: .28rem;
  	  color: #f3711a;
  }
    li .company_box{
  	  width: 100%;
  	  float: left;
  	  margin: .1rem 0 0 0;
  }
    li .company_box a{
  	  display: inline-block;
  	  color: #999;
  	  font-weight: normal;
  	  float: left;
  	  height: .4rem;
  	  line-height: .4rem;
  	  max-width: 75%;
  	  overflow: hidden;
  }
    li .company_box span{
  	  display: inline-block;
  	  color: #999;
  	  float: right;
  	  max-width: 25%;
  	  
  }
</style>

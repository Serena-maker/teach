<template>
	<div>
	  <div class="header">
		<router-link class="logo" to="/home"></router-link>
		<!-- <a class="logo" href="" title="教师招聘网"></a> -->
		<div class="logo_box">
			<!-- {{name}} -->
			<!-- <a href="" title="登录">登录</a> -->
			<router-link to="/login">登录</router-link>
			<i></i>
			<!-- <a href="" title="注册">注册</a> -->
			<router-link to="/reg">注册</router-link>
		</div>
		<!-- <div>{{uname}}</div> -->
	  </div>
	  <div class="head"></div>
  </div>
</template>

<script>
	
  export default {
    data(){return {}},
    components:{},
	// props:{
	// 	name:{
	// 		type:String,
	// 		default:null
	// 	}
	// },
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .header{
	  width: 100%;height: 1rem;
	   position:fixed; 
	   top:0;left:0; 
	   z-index:2;
		background:#fff; 
		line-height: 1rem; 
		}
  .header .logo{
	  float: left; 
	  display: inline-block; 
	  height:.46rem ;width:1.74rem ;
	  background: url(../assets/images/logo.png) no-repeat;
	  background-size:1.74rem .46rem ;
	  margin: .26rem 0 0 .28rem;
	  }
	.header .logo_box{
		float: right;
		overflow: hidden;
		margin-right: .3rem;		
	}
	.header .logo_box a{
		float: left;
		font-size: .32rem;
		color: #999;
		/* cursor: pointer; */
	}
	.header .logo_box i{
		float: left;
		display: inline-block;
		width: .02rem;
		height: .36rem;
		margin: .34rem .14rem 0 .14rem;
		background: #999;
	}
	.head{
		width: 100%;
		height: 1rem;
	}
</style>

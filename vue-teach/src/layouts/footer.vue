<template>
	<div>
	  <div class="footer">
		<ul>
			<router-link class="home" active-class="home_active" tag="li" to="/home">
				<a href="javascript:;" title="">
					<i></i>
					<span>首页</span>
				</a>
			</router-link>
			<router-link class="position" active-class="position_active" tag="li" to="/position">
				<a href="javascript:;" title="">
					<i></i>
					<span>职位</span>
				</a>
			</router-link>
			<router-link class="article" active-class="article_active" tag="li" to="/article">
				<a href="javascript:;" title="">
					<i></i>
					<span>简章</span>
				</a>
			</router-link>
			<router-link class="my" active-class="my_active" tag="li" to="/personal">
				<a href="javascript:;" title="">
					<i></i>
					<span>我的</span>
				</a>
			</router-link>
		</ul>
	</div>
	<div class="foot"></div>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
   .footer{
	   width: 100%;
	   height: 1.1rem;
	   background: #f7f9fa;
	   position: fixed;
	   bottom: 0;
	   box-shadow: .06rem #eae7e7;
	   z-index: 5;
   }
   .footer ul li{
	   float: left;
	   width: 25%;
	   height: 1.1rem;
   }
   .footer ul li a{
	   display: block;
	   text-align: center;
	   padding: .2rem 0px ;
   }
   .footer ul li a i{
	   display: inline-block;
	   height: .4rem;
	   width: .4rem;
   }
   .footer ul li a span{
   	   font-size: .24rem;
   	   color: #999;
   	   display: inline-block;
   	   width: 100%;
   }
   .footer ul .home a i{
	   background: url(../assets/images/bottom_menu_home.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .position a i{
	   background: url(../assets/images/bottom_menu_jobs.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .article a i{
	   background: url(../assets/images/bottom_menu_article.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .my a i{
	   background: url(../assets/images/bottom_menu_my.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .home_active a i{
	   background: url(../assets/images/bottom_menu_home_hover.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .home_active a span{
	   color: #313131;
   }
   .footer ul .position_active a i{
	   background: url(../assets/images/bottom_menu_jobs_hover.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .position_active a span{
	   color: #313131;
   }
   .footer ul .my_active a i{
	   background: url(../assets/images/bottom_menu_my_hover.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul ..my_active a span{
	   color: #313131;
   }
   .footer ul .article_active a i{
	   background: url(../assets/images/bottom_menu_article_hover.png) no-repeat;
	   background-size: .4rem;
   }
   .footer ul .article_active a span{
	   color: #313131;
   }
   
    .foot{
   	 height: 1.1rem;
   	 width: 100%;
   } 
</style>

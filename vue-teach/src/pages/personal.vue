<template>
  <div class="personal">
	  <!-- <Header :name="uname"></Header> -->
	  <div class="top">
		   <h2><img :src="$baseUrl + data.icon" alt="" /></h2>
		  <!-- <p>username</p> -->
		  <div class="user-box">
		    <a href="javascript:;" class="uname">{{data.nikename}}</a>
		    <a href="javascript:;" class="out" @click="logout">注销</a>
		  </div>
		  <!-- <img class="header" />
		  <img class="bg" /> -->
	  </div>
	  <div class="bottom">
		  <div>
			  <span></span>
			  <p>完整度</p>
		  </div>
		  <i></i>
		  <div>
			  <span></span>
			  <p>更新</p>
		  </div>
		  <i></i>
		  <div>
			  <span></span>
			  <p>浏览</p>
		  </div>
	  </div>
	  <div class="cellbox">
		  <ul>
		  		<Cell 
		  		v-for="(item,index) of list"
		  		:key="item._id"
		  		:tip="item"
		  		:index="index"
		  		></Cell>  
		  </ul>
	  </div>
	  <Help></Help>
	  <Footer></Footer>
  </div>
</template>

<script>
	import Cell from '../components/cell.vue';
	import Help from '../components/help.vue';
	import Header from '@/layouts/footer.vue';
	import Footer from '@/layouts/footer.vue';
  export default {
    data(){
		return {
		list:{
			a1:"简历",
			a2:"面试邀请",
			a3:"已申请职位",
			a4:"我的收藏",
			a5:"系统设置",
			// a6:"退出登录"
			},
		data:{},
		uname:''
	}
	},
	
    components:{
		Cell,Footer,Help,Header
	},
    mounted(){},
    updated(){},
	beforeRouteEnter(to, from, next) {
	  //条件异步
	  // 抓取token
	  let token = window.localStorage.getItem('token');
	  if (token) {
	    axios({
	      url: '/api/user',
	      headers: {
	        'token': token
	      }
	    }).then(
	      res =>{ res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')
		  }
	    )
	  } else {
	    next('/login')
	  }
	},
	beforeUpdate(){
		// console.log(this.data.nikename);
		this.uname=this.data.nikename
	},
    methods:{
		logout() {
		  //...........
		  window.localStorage.removeItem('token')
		  this.$router.push('/home')
		}
	}
  }
</script>

<style scoped>
	
  .top{
	  width: 100%;
	  height: 2.8rem;
	  /* float: left; */
	  background-image: url(../assets/images/index_top_bg.png);
	  background-size:100% 100% ;
	  position: relative;
	  top:0
  }
  /* .top p{
	  width: 100%;
	  font-size: .32rem;
	  color: #fff;
	  text-align: center;
	  bottom: 1.6rem;
	  position: absolute;
	  z-index: 2;
  } */
  .top h2 {
    width: 1.02rem;
    height: 1.02rem;
    border-radius: 50%;
    margin: 0 auto;
	bottom: 1rem;
	position: absolute;
	left: 0;
	right: 0;
	/* z-index: 2; */
	overflow: hidden;
	background: #fff;
  }
  .top h2 img {
    width: 100%;
  }
  .top .user-box {
	position: absolute;
    width: 2.4rem;
    font-size: 0.25rem;
    color: #fff;
	margin: 0 auto;
    text-align: center;
    bottom: 0.2rem;
	left: 0;
	right: 0;
  }
  
  .user-box a.uname {
    color: #333;
	font-weight: 700;
	font-family: "agency fb";
  }
  .user-box a.out{
	  text-decoration: underline;
	  color: #000FFF;
  }
  .bottom{
	  /* float: left; */
	  width: 100%;
	  height: 1.5rem;
	  background: #fff;
  }
  .bottom div{
	  width: calc(100% / 3 - .04rem);
	  float: left;
	  height: .9rem;
	  text-align: center;
	  padding: .3rem 0 .3rem;
  }
 .cellbox{
	 margin-top: .2rem;
 }
  
</style>

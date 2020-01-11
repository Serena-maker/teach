<template>
  <div class="form_box">
	  <div class="username">
		  <input type="text" placeholder="请输入邮箱/用户名" />
	  </div>
	  <div class="password">
		  <input type="password" placeholder="请输入密码" />
	  </div>
	  <input type="submit"  class="submit" :value="登录"/>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		ph:{
			type:String,
			default:"填满它"
		},
		val:{
			type:String,
			default:"按钮"
		}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .form_box {
  	  text-align: center;
  }
  .form_box div{
  	  border-bottom: .02rem solid #ebebeb;
  	  padding: .2rem 0 .2rem;
  	  width: 80%;
  	  margin: 0 auto;
  	  text-align: left;
  }
  .form_box div input{
  	  border: none;
  	  padding-left:.7rem;
  	  color: #333;
  	  height: .7rem;
  	  width: 80%;
  	  font-size: .36rem;
  }
  .form_box .username input{
  	  background: url(../assets/images/icon_user.png) no-repeat left;
  	  background-size: .36rem auto;
  }
  .form_box .password input{
  	  background: url(../assets/images/icon_password.png) no-repeat left;
  	  background-size: .36rem auto;
  }
  .form_box .submit{
  	  width: 80%;
  	  text-align: center;
  	  color: #fff;
  	  font-size: .36rem;
  	  background: #f3711a;
  	  padding: .2rem 0px .2rem ;
  	  margin-top: .8rem;
  }
</style>

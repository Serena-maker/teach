<template>
  <div class="login">
	  <Loginbox></Loginbox>
	  <div class="form_box">
		  <Ipt v-model="username" index="username" ph="手机号" />
		  <Ipt v-model="password" index="password" ph="密码" />
		  <Btn val="登录" @click.native="login"></Btn>
	  </div>
	  {{mess}}
	  <div class="other_box">
		  <!-- <a href="" class="left">忘记密码?</a> -->
		  <router-link to="/" class="left" tag="a">忘记密码?</router-link>
		  <router-link to="/reg" class="right" tag="a">立即注册</router-link>
		  <!-- <a href="" class="right">立即注册</a> -->
	  </div>
	  <div class="other_login">
		  <!-- <a href="">手机号登录</a> -->
	  </div>
  </div>
</template>

<script>
	import Btn from '../components/btn.vue';
	import Ipt from '../components/ipt.vue';
	import Loginbox from '../components/loginbox.vue';
  export default {
    data(){return {
		username: '',
		password: '',
		mess:''
	}},
    components:{
		Loginbox,Btn,Ipt
	},
    mounted(){	
	},
    updated(){},
    methods:{
		login() {
		  // alert(1)
		  let params = new URLSearchParams();
		  params.append('username', this.username)
		  params.append('password', this.password)
		  
		  axios({
		    url: '/api/login',
		    method: 'post',
		    data: params
		  }).then(
		    res => {
		      if(res.data.err==0){
		        //种token,跳转user
		        window.localStorage.setItem('token',res.data.token);
		        this.$router.push('/personal')
				  console.log(res.data)
		      }else{
		        this.mess=res.data.msg
		      }
		    }
		  )
		  
		}
	}
  }
</script>

<style scoped>
  /* .logo_box a{
	  display: block;
	  margin: 20% auto 5%;
	  width: 100%;
	  text-align: center;
  }
  .login_box a img{
	  width: 40%;
  } */
  .form_box {
	  text-align: center;
  }
  /* .form_box div{
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
  } */
  /* .form_box .username input{
	  background: url(../assets/images/icon_user.png) no-repeat left;
	  background-size: .36rem auto;
  }
  .form_box .password input{
	  background: url(../assets/images/icon_password.png) no-repeat left;
	  background-size: .36rem auto;
  } */
  /* .form_box .submit{
	  width: 80%;
	  text-align: center;
	  color: #fff;
	  font-size: .36rem;
	  background: #f3711a;
	  padding: .2rem 0px .2rem ;
	  margin-top: .8rem;
  } */
  .other_box{
	  width: 80%;
	  margin: .2rem auto;
  }
  .other_box a{
	  font-size: .28rem;
	  color: #cccccc;
  }
  .other_login{
	  width: 80%;
	  height: .02rem;
	  background: #ebebeb;
	  position: relative;
	  margin: 0 auto;
	  top: .9rem;
	  z-index: 1;
  }
  .other_login a{
	  font-size: .28rem;
	  display: inline-block;
	  color: #656565;
	  position: absolute;
	  left: 50%;
	  width: 2.4rem;
	  height: .6rem;
	  line-height: .6rem;
	  background: #fff;
	  top: -.3rem;
	  text-align: center;
	  margin-left:-1.2rem;
  }
</style>

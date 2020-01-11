<template>
  <div class="reg">
    <Loginbox></Loginbox>
	<form>
		<!-- <div class="type_box">
			<div class="item">
				<input type="radio" class="type" />
				<span>个人</span>
			</div>
			<div class="item">
				<input type="radio" class="type" />
				<span>企业</span>
			</div>
		</div> -->
		<div class="form_box">
			  <Ipt v-model="username" index="tel" ph="手机号" />
			  <Ipt v-model="password" index="code" ph="密码" />
			  <Btn val="提交" @click.native="reg"></Btn>
			  {{mess}}
		</div>
	</form>
	<div class="other_box">
		<p class="left">
			已有账号？
			<router-link to="/login" tag="a">立即登录</router-link>
		</p>
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
		mess: '',
	}},
    components:{
		Loginbox,Btn,Ipt
	},
    mounted(){},
    updated(){},
    methods:{
		reg() {
		  
		  let formData = new FormData();
		  formData.append('username',this.username)
		  formData.append('password',this.password)
		  // let file=document.getElementById('file');
		  // formData.append('icon',file.files[0]);
		  
		  this.$axios({
		    url: '/api/reg',
		    method: 'post',
		    data: formData
		  }).then(
		    res => {
		      if(res.data.err==0){
		        console.log(res.data);
		        this.$router.push('/login')
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
  .reg form{
	  margin-top: 5%;
  }
  .type_box{
	  text-align: center;
	  margin: 0 0 5% 0;
  }
  .type_box .item{
	  margin: 0 10% 0 10%;
	  display: inline-block;
  }
  .type_box .item input{
	  display: inline-block;
	  float: left;
	  background: url(../assets/images/checkbox.png);
	  background-size: .48rem .48rem;
	  margin-right:.2rem;
	  width: .48rem;
	  height: .48rem;
  }
  .type_box .item input:checked{
	  background: url(../assets/images/radio_checked.png);
	  background-size: .48rem .48rem;
  }
  .type_box .item span{
	  font-size: .32rem;
	  color: #656565;
  }
  .other_box{
	  width: 80%;
	  margin: .2rem auto;
  }
  .other_box p{
	  font-size: .28rem;
	  color: #cccccc;
  }
  .other_box p a{
	  font-size: .28rem;
	  color: #188eee;
	  text-decoration: underline;
  }
</style>

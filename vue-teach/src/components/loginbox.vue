<template>
  <div class="login_box">
	  <router-link to="/home">
		  <a href="">
		  	<img src="../assets/images/logo.png" />
		  </a> 
	  </router-link>	 
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
  .login_box{
	  text-align: center;
	  margin: 20% auto 5%;
  }
  .logo_box a{
  	  display: block;
  	  margin: 20% auto 5%;
  	  width: 100%;
  	  text-align: center;
  }
  .login_box a img{
  	  width: 40%;
  }
</style>

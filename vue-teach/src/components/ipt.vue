<template>
  <div :class="index">
	<!-- <input type="text" :placeholder="ph" /> -->
	<input type="text" :value="value" @input="$emit('input',$event.target.value)" :placeholder="ph"/>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		index:{
			type:String,
			default:null
		},
		ph:{
			type:String,
			default:"填满它"
		},
		value:{
		  type:String,
		  default:''
		}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  div{
  	  border-bottom: .02rem solid #ebebeb;
  	  padding: .2rem 0 .2rem;
  	  width: 80%;
  	  margin: 0 auto;
  	  text-align: left;
  }
  div input{
  	  border: none;
  	  padding-left:.7rem;
  	  color: #333;
  	  height: .7rem;
  	  width: 80%;
  	  font-size: .36rem;
  }
  .username input{
  	  background: url(../assets/images/icon_user.png) no-repeat left;
  	  background-size: .36rem auto;
  }
  .password input{
  	  background: url(../assets/images/icon_password.png) no-repeat left;
  	  background-size: .36rem auto;
  }
  .tel input{
  	  background: url(../assets/images/icon_phone.png) no-repeat left;
  	  background-size: .36rem auto;
  }
  .code input{
  	  background: url(../assets/images/icon_password.png) no-repeat left;
  	  background-size: .36rem auto;
  }
  
</style>

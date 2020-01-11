<template>
  <div class="">
    <input type="button"  class="" :value="val"/>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
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
  div{
  	  border-bottom: .02rem solid #ebebeb;
  	  padding: .2rem 0 .2rem;
  	  width: 80%;
  	  margin: 0 auto;
  	  text-align: left;
  }
  div input{
  	  border: none;
  	  color: #fff;
  	  height: .7rem;
  	  width: 100%;
  	  font-size: .36rem;
	  padding: .2rem 0 .2rem 0;
	  margin-top: .8rem;
	  text-align: center;
	  background: #f3711a;
	  line-height:;
  }
  
</style>

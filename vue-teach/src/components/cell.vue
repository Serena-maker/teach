<template>
  <div class="cell">
	<router-link tag="li" to="/">
		<a href="">
			<i :class="index"></i>
			<span>{{tip}}</span>
			<b></b>
		</a>
	</router-link>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		// data:{
		//   type:Object,
		//   default:function(){
		//     return {}
		//   }
		// },
		tip:{
			type:String,
			default:"选项"
		},
		index:{
			type:String,
			default:null
		}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .cell li{
	  border-bottom: 1px solid #ededed;
	  background: #fff;
	  width: 100%;
	  height: 1.1rem;
  }
  .cell li a{
	  display: inline-block;
	  padding: .3rem .3rem .26rem .3rem;
	  float: left;
	  width:90% ;
  }
 .cell li a i{
	  display: inline-block;
	  float: left;
	  width: .4rem;
	  height: .54rem;
	  /* background-size:.4rem .54rem ;
	  background-image:url(../assets/images/index_interview.png) ; */
  }
  .cell li a span{
	  float: left;
	  font-size: .28rem;
	  color: #202020;
	  margin: .06rem 0 0 .3rem;
  }
  .cell li a b{
	  float: right;
	  display: inline-block;
	  width: .14rem;
	  height: .26rem;
	  background: url(../assets/images/to_right3.png) no-repeat;
	  background-size: .14rem .26rem;
	  margin-top:.14rem;
  }
 .cell li a i.a1{
 	  background-size:.4rem .54rem ;
 	  background-image:url(../assets/images/index_resume.png) ;
 }
 .cell li a i.a2{
 	  background-size:.4rem .54rem ;
 	  background-image:url(../assets/images/index_interview.png) ;
 }
 .cell li a i.a3{
 	  background-size:.4rem .54rem ;
 	  background-image:url(../assets/images/index_apply.png) ;
 }
 .cell li a i.a4{
 	  background-size:.4rem .54rem ;
 	  background-image:url(../assets/images/index_collection.png) ;
 }
 .cell li a i.a5{
 	  background-size:.4rem .54rem ;
 	  background-image:url(../assets/images/index_system.png) ;
 }
  .cell li a i.a6{
 	  background-size:.4rem .54rem ;
 	  background-image:url(../assets/images/index_logout.png) ;
 }
  
</style>

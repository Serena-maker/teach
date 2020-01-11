<template>
	<div class="">
		<router-link tag="li" :to="`/infodetail/${item._id}?dataName=homer`">
			<a title="" href="">{{item.title}}</a>
			<div class="clear"></div>
			<span class="left">{{item.read}}</span>
			<span class="right">{{item.date}}</span>
		</router-link>
	</div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		
		item:{
			type:Object,
			default:function(){
				return {}
			}
		},
		dataName:{
		  type:String,
		  default:null
		},
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  li{
	  width: 100%;
	  height: 38px;
	  padding: 5px 0px 15px 0px;
	  background: #fff;
	  margin: 0px 0px 10px 0px;
	  border-bottom: 1px solid #ededed;
  }
  li a{
	  display: inline-block;
	  height: 20px;
	  overflow: hidden;
	  font-size: 16px;
	  color: #202020;
	  line-height: 20px;
  }
  li .clear{
	  clear: both;
  }
  li .left{
	  color: #999;float: left;
  }
  li .right{
	  color: #999;float: right;
  }
</style>

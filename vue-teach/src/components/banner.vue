<template>
  <div class="banner">
    <ul class="clearfix">
    <!-- <li>
		  <img src="../assets/images/1553654168274.png" alt=""/>
      </li>
      <li>
		  <img src="../assets/images/1553654070325.png" alt=""/>
      </li>
      <li>
		  <img src="../assets/images/1553654221137.png" alt=""/>
      </li>
      <li> 
		  <img src="../assets/images/1573636525481.jpg" alt=""/>
      </li> -->
	  
	<van-swipe :autoplay="3000" indicator-color="white">
	  <van-swipe-item v-for="(item,index) of data"  
	  :key="item._id">
		  <img :src="$baseUrl + item.img" alt=""/>
	  </van-swipe-item>  
	</van-swipe>  
	
	</ul>
	<div class="seabox">
		<!-- <form>
			<input class="key" type="search" value="" placeholder="请输入关键字"/>
			<input class="sub" type="submit" value="搜索"/>
		</form> -->
		<!-- <form action="/">
		  <van-search
		    v-model="value"
		    placeholder="请输入搜索关键词"
		    show-action
		   @search="onSearch"
		   @cancel="onCancel"
		  />
		</form> -->
		<van-search
		  v-model="value"
		  placeholder="请输入搜索关键词"
		  show-action
		  shape="round"
		  @search="onSearch"
		>
		  <div slot="action" @click="onSearch">搜索</div>
		</van-search>
	</div>
  </div>
</template>

<script>
	import $ from 'jquery';
  export default {
    data(){return {
		value:''
	}},
    components:{},
	props:{
		data:{},
		
	},
    mounted(){
	},
    updated(){},
    methods:{
		onSearch(value){	
			this.$emit('getVal',this.value)
			
			// this.$router.push('/list/'+value)
		},
		// onCancel(){
			
		// },
		
	}
  }
</script>

<style scoped>
  .banner{position: relative;overflow: hidden; z-index: 1;height: 3.2rem;}
  .banner img{width:100%; display:block;}
  .banner .seabox{
	  position: absolute;
	  top: .2rem;
	  left: .26rem;
	  width: 93%;
	  height: .7rem;
	  border-radius: .34rem;
	  overflow: hidden;
	  background: #fff;
	  z-index: 3;
  }
  .banner .seabox .key{
	  color: #202020;
	  float: left;
	  padding: .1rem .2rem;
	  width: calc(100% - 1rem);
	  height: .7rem;
	  line-height: .7rem;
	  background: #fff;
  }
  .banner .seabox .sub{
	  float: right;
	  width: .4rem;
	  height: .4rem;
	  line-height: .7rem;
	  text-align: center;
	  background: url(../assets/images/search.png);
	  background-size: .4rem;
	  text-indent: 200rem;
	  margin: .14rem .2rem 0 0;
  }
</style>

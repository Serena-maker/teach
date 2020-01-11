<template>
  <div class="pagebox">
	<div class="per">
		<a class="left_disable" data-page="1"><i></i><span>上一页</span></a>
	</div>
	<div class="cur">
		<span>第1页</span><i></i>
		<select>
			<option selected="selected" value="1">第1页</option>
			<option value="2">第2页</option>
			<option value="3">第3页</option>
			<option value="4">第4页</option>
			<option value="5">第5页</option>
			<option value="6">第6页</option>
		</select>
	</div>
	<div class="next  ">
		<a class="" data-page="2"><span>下一页</span><i></i></a>
	</div>                    
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
  .pagebox{
	  margin: .36rem 0;
	  text-align: center;
  }
  .pagebox div{
	  display: inline-block;
	  background: #fff;
	  padding: .14rem .4rem;
	  margin: 0 .1rem;
  }
  .pagebox div i{
	  display: inline-block;
	  width: .2rem;
	  height:.2rem;
  }
  .pagebox div a span{
	  color: #188eee;
  }
  .pagebox .cur{
	  position:relative
  }
  .pagebox .cur i{
	 width: .28rem;
	 height: .16rem;
	 background: url(../assets/images/to_down3.png) no-repeat;
	 background-size: .28rem .16rem;
	 margin: 0 0 0 .1rem;
  }
  .pagebox .cur span{
	  color: #313131;
  }
  .pagebox .cur select{
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  opacity: 0;
  }
  .pagebox .per i{
	  background: url(../assets/images/to_left2.png) no-repeat;
	  background-size: .2rem .2rem;
	  margin: 0 0 0 .04rem;
  }
  .pagebox .per_disable i{
	  background: url(../assets/images/to_left.png) no-repeat;
	  background-size: .2rem .2rem;
	  margin: 0 0 0 .04rem;
  }
  .pagebox .per_disable a span{
	  color: #999;
  }
  .pagebox .next i{
	  background: url(../assets/images/to_right2.png) no-repeat;
	  background-size: .2rem .2rem;
	  margin: 0 0 0 .04rem;
  }
</style>

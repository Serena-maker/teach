<template>
  <div class="more_list">
	<a title="教师招聘职位大全" :href="hf">
		<span>{{text}}</span>
		<i></i>
	</a>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		text:{
			type:String,
			default:"还有更多"
		},
		hf:{
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
  .more_list{
	  width: 100%;
	  text-align: center;
	  padding: .3rem 0 .3rem 0;
  }
  .more_list span{
	  color: #188eee;
  }
  .more_list i{
	  display: inline-block;
	  width: .16rem;
	  height: .18rem;
	  background: url(../assets/images/to_right2.png) no-repeat;
	  background-size: .16rem .18rem;
	  margin: 0 0 0 .1rem;
  }
</style>

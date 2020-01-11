<template>
   <div>
	   <Header></Header>
	  <div class="jobs_box">
		<ul>
			<router-link
			  v-for="(item,index) of list"
			  :key="item._id"
			  to="/"
			>
			  <Job :item="item" />
			</router-link>
		</ul>
	  </div>
  </div>
</template>

<script>
	import Job from '../components/job.vue';
	import Header from '../layouts/header.vue';
  export default {
    data(){return {
		list:{}
	}},
    components:{
		Job,Header
	},
    mounted(){
		this.$axios({
		  url: '/api/' + 'home'+'?q=' + this.$route.params.kind,
		}).then(
		  res => {
			  // console.log(res.data);
			  this.list=res.data.data
			}
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .jobs_box{
  	  padding: .36rem .3rem 0;
  	  background: #fff;
  }
</style>

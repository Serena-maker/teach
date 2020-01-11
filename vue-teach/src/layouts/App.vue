<template>
  <div id="app">
    <Header v-show="this.$root.bNav"></Header>
	<!-- <Banner></Banner> -->
	<!-- <Home></Home> -->
	<!-- <Reg></Reg> -->
	<router-view></router-view>
	<!-- <Personal></Personal> -->
	<!-- <Footer></Footer> -->
	<!-- <Jobdetail></Jobdetail> -->
  </div>
</template>

<script>
// import Footer from '@/layouts/footer.vue';
import Header from './header.vue';
// import Banner from '../components/banner.vue';
// import Reg from '../pages/reg.vue'
// import Jobdetail from '../pages/jobdetail.vue'
export default {
  name: 'app',
  components: {
    Header
	// ,Footer,Banner
	// Reg
	// Jobdetail
  },
  props:{
  	name:{
  		type:String,
  		default:null
  	}
  },
  //路由监听|属性检测|数据观测
  watch:{
    $route:{
      handler(nextValue,PrevValue){
        // console.log('path变化',nextValue.path);
        
        let path = nextValue.path;//路由路径  /follow
        //修改集中式的数据
        
        if(/login|reg/.test(path)){
          // this.$root.bNav=this.$root.bFoot=false;
		  this.$root.bNav=false;
        }
        if(/home|article|position|personal|infodetail|jobdetail/.test(path)){
          // this.$root.bNav=this.$root.bFoot=true;
		  this.$root.bNav=true;
        }
        // if(path.includes('user')){
        //   this.$root.bNav=false;
        //   // this.$root.bFoot=true;
        // }
      },
      immediate:true
    }
  },
mounted () {
	// this.fullname=this.$children[1].uname
	// console.log(this.$children)
},
beforeUpdate(){
	
}
}
</script>

<style>

</style>

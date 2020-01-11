<template>
  <div class="">
    <div id="back_top" ></div>
  </div>
</template>

<script>
	import $ from 'jquery';
  export default {
    data(){return {}},
    components:{},
    mounted(){
		$("#back_top").click(function() {
			$("body,html").animate({scrollTop: 0}, 500);
			//$("#back_top").animate({opacity: 0}, 500);
			return false;
		})
		
		$(window).scroll(function() {
			//获取当前滚动条的高度
			var h = $(document).scrollTop();
			if (h >= 10) {
				$("#back_top").css("opacity", "1");
			} else {
				$("#back_top").css("opacity", "0");
			}
		})
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  #back_top {
      width: .66rem;
      height: .66rem;
      position: fixed;
      bottom: 20%;
      right: .2rem;
      border-radius: 50%;
      overflow: hidden;
      background: url(../assets/images/back_to_top.png) no-repeat;
      background-size: .66rem;
      z-index: 10;
      opacity: 0;
  }
</style>

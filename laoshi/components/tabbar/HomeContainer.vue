<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- /轮播图 -->
  </div>
</template>
<script>
// 生命周期函数 created 发ajax mounted 操作dom
import { Toast } from 'mint-ui';
export default {
  created(){
    this.getList()
  },
  methods: {
    getList(){
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
        console.log(res)
        if(res.body.status == 0){
          //成功
          this.list = res.body.message 
        }else{
          //失败
          Toast('获取轮播数据失败');
        }
      })
    }
  },
  //双向数据绑定 数据模型变了 视图就会变
  data () {
    return {
      list:[]//轮播图的数据
    };
  }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
  height:200px;
  .mint-swipe-item{
    img{
      width:100%;
      height: 200px;
    }
  }
}
</style>
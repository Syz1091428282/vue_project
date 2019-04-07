<template>
  <div class="cmt-container">
    <h3>评论</h3>
    <hr>
    <textarea placeholder="请输入要写的内容"></textarea>
    <mt-button size="large" type="primary">发表评论</mt-button>
    <!-- <mt-butt size="large" type="danger">加载更多</mt-butt> -->
    <hr>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-item">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12：12：12</div>
        <div class="cmt-body">锄禾日当午 ~~</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-item">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12：12：12</div>
        <div class="cmt-body">锄禾日当午 ~~</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-item">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12：12：12</div>
        <div class="cmt-body">锄禾日当午 ~~</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-item">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12：12：12</div>
        <div class="cmt-body">锄禾日当午 ~~</div>
      </div>
    </div>
    <mt-button size="large" type="danger" plain>加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 1px;
      .cmt-title {
        line-height: 3px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
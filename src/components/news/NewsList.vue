<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link v-bind:to="'/home/newsinfo/' +item.id">
          <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get("api/getnewslist").then(res => {
        console.log(res);
        this.list = res.body.message;
      });
    }
  },
  data() {
    return {
      list: [] //存新闻列表数据
    };
  }
};
</script>
<style lang="scss" scoped>
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
  color: skyblue;
}
</style>
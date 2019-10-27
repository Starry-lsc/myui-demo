<template>
  <div class="box1">
    <div class="box2">
      <el-menu :default-active="ser" class="el-menu-demo" mode="horizontal"
               background-color="#409EFF" text-color="#fff"
               active-text-color="#ffd04b" router>
        <el-menu-item index="/" route>首页</el-menu-item>
        <el-menu-item index="/list" route>列表</el-menu-item>
        <el-menu-item index="/shop" route>购物</el-menu-item>
        <el-menu-item index="/detail" route>管理</el-menu-item>
      </el-menu>
    </div>
    <div class="box3">
      <h3>欢迎 {{user}}</h3>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Head",
      data() {
        return {
          user:localStorage.getItem('user'),
          ser:''
        };
      },
      created(){
          let ret=this.$route.path;
          if (ret=='/detail' || ret =='/mess1' || ret =='/mess2' || ret =='/mess3' || ret =='/mess4'){
            this.ser = '/detail'
          } else {this.ser=this.$route.path}
      }
    }
</script>

<style scoped>
  .box1{width: 100%;height: 60px;background-color: #409EFF;margin-bottom: 10px;position: relative}
  .box2{width: 280px;margin: 0 auto;}
  .box3{position: absolute;right: 50px;top: 15px;}
</style>

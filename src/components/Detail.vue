<template>
    <div class="detail">
      <Head></Head>
      <div class="left">
        <el-row class="tac">
          <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo"
                     @open="handleOpen" @close="handleClose" background-color="#ccc">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/mess1"><el-menu-item index="1-1">选项1</el-menu-item></router-link>
                  <router-link to="/mess2"><el-menu-item index="1-2">选项2</el-menu-item></router-link>
                  <router-link to="/mess3"><el-menu-item index="1-3">选项3</el-menu-item></router-link>
                  <router-link to="/mess4"><el-menu-item index="1-4">选项4</el-menu-item></router-link>
                  <router-link to="/mess5"><el-menu-item index="1-5">选项5</el-menu-item></router-link>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <router-view/>
    </div>
</template>

<script>
  import Head from './Head'
    export default {
        name: "Detail",
      components:{Head},
      methods: {
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        }
      }
    }
</script>

<style scoped>
.left{width: 270px;float: left}
</style>

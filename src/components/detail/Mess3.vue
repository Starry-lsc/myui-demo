<template>
    <div class="tabTab">
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <el-table style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <el-table style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="物品" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="角色管理">
          <el-table style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="职位"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="待定">
          <el-table style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Mess3",
      data() {
        return {
        };
      },
    }
</script>

<style scoped>
  .tabTab{width: 1200px;margin-left: 300px}
</style>

<template>
    <div class="list">
      <Head></Head>
      <el-table :data="tableData" style="width: 100%;height: 550px">
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="body"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger"
                       @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next"
                     :total="total" :page-size="pageSize"
                     @current-change="curChange" style="text-align: center"></el-pagination>
    </div>
</template>

<script>
  import Head from './Head'
    export default {
        name: "List",
      components:{Head},
      data() {
        return {
          message: [],
          total:0,
          pageSize:5,
          currentPage:1
        }
      },
      methods: {
        handleDelete(index) {
          this.message.splice(index, 1)
        },
        curChange(val){
          this.currentPage=val
        }
      },
      created(){
          if (this.message.length==0) {
            this.$axios.get('../../static/txt.json').then((res)=>{
              this.message=res.data;
              this.total = res.data.length
            }).catch(()=>{
              this.$message({
                message:'数据已丢失',
                type:'error'
              });
            });
          }else {
            this.message=JSON.parse(localStorage.getItem('list'));
            // this.message=this.$store.state.storeList;
            this.total=this.message.length
          }
      },
      computed:{
          tableData(){
            return this.message.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
          }
      }
    }
</script>

<style scoped>

</style>

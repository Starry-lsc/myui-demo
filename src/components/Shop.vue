<template>
    <div class="shop">
      <Head></Head>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="编号" width="60"></el-table-column>
        <el-table-column prop="single" label="手机名"></el-table-column>
        <el-table-column label="图片">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="brand" label="手机牌子"></el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" @change="handleChange(scope.row)" :min="0"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column prop="subtotal" label="总价"></el-table-column>
      </el-table>
      <div class="allPri">
        <h2>总价：{{allPrice}}</h2>
      </div>
    </div>
</template>

<script>
  import Head from './Head'
    export default {
        name: "Shop",
      components:{Head},
      data(){
          return{
            tableData:[]
          }
      },
      created(){
        this.$axios.get('../../static/shop.json').then((res)=>{
          this.tableData=res.data;
        }).catch(()=>{
          this.$message({
            message:'数据已丢失',
            type:'error'
          });
        });
      },
      methods:{
        handleChange(val){
          val.subtotal=val.num*val.price
        }
      },
      computed:{
          allPrice(){
            return this.tableData.reduce((sum,data)=>{
                return sum + data.subtotal
            },0)
          }
      }
    }
</script>

<style scoped>
  img{height: 50px;margin-left: -28px}
  .allPri{float: right;margin-right: 170px;overflow: hidden}
</style>

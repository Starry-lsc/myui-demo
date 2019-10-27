<template>
    <div class="single">
      <h1>详情</h1>
      <div class="imgStyle">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in imgList" :key="item">
            <img :src=item alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <h3>{{message.title | allBig}}</h3>
      <p>{{message.body | firstBig}}</p>
    </div>
</template>

<script>
  import imgSrc1 from '../assets/1.jpg'
  import imgSrc2 from '../assets/2.jpg'
  import imgSrc3 from '../assets/3.jpg'
  import imgSrc4 from '../assets/4.jpg'
    export default {
        name: "Single",
      data(){
        return{
          message:{},
          id:this.$route.params.id,
          imgList:[imgSrc1,imgSrc2,imgSrc3,imgSrc4]
        }
      },
      created(){
        this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
          .then((res)=>{
            this.message=res.data
        }).catch(()=>{
          this.$message({
            message:'数据已丢失',
            type:'error'
          });
        });
      },
    }
</script>

<style scoped>
  .single{text-align: center}
  h1{height: 80px;background-color: #5bc0de;line-height: 80px;margin-bottom: 10px}
  .el-carousel__item h3 {color: #475669;font-size: 18px;opacity: 0.75;line-height: 300px;margin: 0;}
  .el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
  .el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
  .imgStyle{width: 500px;height: 300px;margin: 0 auto}
</style>

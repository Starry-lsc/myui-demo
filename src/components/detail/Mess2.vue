<template>
    <div>
      <div class="tra">
        <el-transfer v-model="value" :data="data" @change="handleChange"></el-transfer>
      </div>
      <div class="card">
        <el-row>
          <el-col :span="11" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px'}">
              <img :src=imaSrc class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix"><time class="time">{{ currentDate }}</time></div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="coll">
        <el-collapse accordion v-for="item of collList">
          <el-collapse-item>
            <template slot="title">{{item.title}}</template>
            <div>{{item.message}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
</template>
<script>
  import imgSrc1 from '../../assets/1.jpg'
    export default {
        name: "Mess2",
      data() {
        const generateData = _ => {
          const data = [];
          const lists= ["吃饭","睡觉","工作","运动","看书"];
          lists.forEach((list, index) => {
            data.push({
              key: index,
              label: list,
            });
          });
          return data;
        };
        return {
          data: generateData(),
          value: [],
          currentDate: new Date().toISOString(),
          imaSrc:[imgSrc1],
          collList:[],
        };
      },
      methods: {
        handleChange(value) {
          sessionStorage.setItem('val',JSON.stringify(value));
        }
      },
      created(){
          let cunFang =JSON.parse(sessionStorage.getItem('val'));
          if (cunFang==null) {
            this.value=[];
          }else {
            this.value=cunFang
          }
        this.$axios.get('../../static/mess2.json').then((res)=>{
          this.collList=res.data
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
  .time {font-size: 13px;color: #999;}
  .bottom {margin-top: 13px;line-height: 12px;}
  .button {padding: 0;float: right;}
  .image {width: 100%;display: block;}
  .clearfix:before, .clearfix:after {display: table;content: "";}
  .clearfix:after {clear: both}
  .card{width: 640px;float: left;margin-left: 40px}
  .tra{width: 500px;float: left}
  .el-transfer-panel{width: 150px}
  .coll{width: 1200px;float: left;margin-left: 280px}
</style>

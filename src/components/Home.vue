<template>
  <div class="home">
    <Head></Head>
    <div>
      <h1>总览条目</h1>
    </div>
    <div>
      <ul>
        <li v-for="itm of list">
          <router-link :to="'/single/' + itm.id">
          <h3 v-chStyle="{font:'24px'}">{{itm.id}}.{{itm.title | allBig}}</h3>
          <p>{{itm.body | firstBig}}</p>
          </router-link>
        </li>
      </ul>
      <el-button type="primary" @click="jiaZai">加载更多</el-button>

    </div>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'Home',
  components:{Head},
  data () {
    return {
      list:[],
      n:0
    }
  },
  created(){
    if (this.$store.state.moreList==0){
      this.$axios.get('../../static/txt.json').then((res)=>{
        this.list=res.data.slice(0,10);
        this.$store.commit('initList',res.data);
        // this.list=this.$store.state.storeList.slice(0,10)
      }).catch(()=>{
        this.$message({
          showClose: true,
          message:'数据已丢失',
          type:'error'
        });
      });
    } else {
      this.list=this.$store.state.moreList;
      this.n=this.list.length-10
    }

  },
  directives: {
    chStyle: {
      inserted(el,binding) {
        el.style.color='#'+Math.random().toString(16).slice(2,8);
        el.style.fontSize=binding.value.font
      }
    }
  },
  methods:{
    jiaZai(){
      if(this.n<this.list.length-5){
        this.$axios.get('../../static/txt.json').then((res)=>{
          let data= res.data.slice(5+this.n,10+this.n);
          this.list= this.list.concat(data);
          this.$store.commit('getMoreList',this.list)
        }).catch(()=>{
          this.$message({
            showClose: true,
            message:'数据已丢失',
            type:'error'
          });
        });
        this.n+=5;
      }else{
        this.$message({
          showClose: true,
          message: '这是最后一条',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{text-align: center;}
  h1{height: 80px;background-color: #5bc0de;line-height: 80px;margin-bottom: 10px}
  li{height: 120px;background-color: #9d9d9d;margin-bottom: 10px}
</style>

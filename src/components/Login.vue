<template>
    <div class="login">
      <h1>用户登录</h1>
      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-edit-outline"
        v-model="user">
      </el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-edit-outline"
        v-model="password">
      </el-input>
      <div>
        <el-button type="primary" @click="sub">登 录</el-button>
        <el-button type="warning" @click="res">重 置</el-button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            user:localStorage.getItem('user'),
            password:''
          }
      },
      methods:{
          sub(){
              this.$axios.post('/api',{
                user:this.user,
                password:this.password
              }).then((res)=>{
                  if (res.data === 1 ) {
                    sessionStorage.setItem('user',this.user);
                    localStorage.setItem('user',this.user);
                    this.$router.push('/')
                  }else if (res.data ===-1) {
                    this.$message({
                      message:'请输入正确的用户名和密码',
                      type:'error'
                    });
                  }
              }).catch(()=>{
                this.$message({
                  message:'服务器不翼而飞',
                  type:'error'
                });
              })
          },
          res(){
            this.user='';
            this.password=''
          }
      }
    }
</script>

<style scoped>
  .login{width: 400px; height: 300px;border: 1px solid #999;margin: 100px auto;text-align: center}
  h1{color: #999;margin: 20px 0}
  .el-input{margin-bottom: 20px;width: 80%}
</style>

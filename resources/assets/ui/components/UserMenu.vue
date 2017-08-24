<template lang="html">
  <el-dropdown split-button type="success" @command="handleCommand">
  {{ userName }}
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="reset">修改密码</el-dropdown-item>
    <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      userName: null
    }
  },
  props: {
  },
  mounted(){
    axios.get('/user')
    .then((response) => {
      // console.log(response.data);
      this.userName = response.data.user.name;
    })
    .catch(function(error){
      console.log(error);
    })
  },
  methods: {
    handleCommand(command) {
      if (command == 'logout') {
        axios.post('/logout')
        .then(function (response) {
          window.location.href="/";
        })
        .catch((error)=> {
          this.$message({
            message: error.status,
            type: 'error'
          });
        });
      }else if (command == 'reset') {
        axios.post('/logout')
        .then(function (response) {
          window.location.href="/password/reset";
        })
      }

    }
  }
}
</script>

<style lang="css">
</style>

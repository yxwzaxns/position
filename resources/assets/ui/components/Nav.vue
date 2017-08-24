<template>
  <div class="container">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Poc</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu> -->
      <!-- <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      <el-menu-item index="2">
        <posSearch></posSearch>
      </el-menu-item>
      <el-menu-item index="6" class="usermenu">
        <userMenu></userMenu>
      </el-menu-item>

    </el-menu>
    <!-- <div class="line"></div> -->
  </div>
</template>

<script>
  import PosSearch from './FilterList.vue';
  import UserMenu from './UserMenu.vue';
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      PosSearch,
      UserMenu
    }
  }
</script>
<style media="screen">
.usermenu {
  float: right !important;
}
</style>

<template>
  <el-input
    placeholder="请输入关键词"
    icon="search"
    v-model="input2"
    :on-icon-click="handleIconClick">
  </el-input>
</template>

<script>
export default {
  data() {
    return {
      input2: ''
    }
  },
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="list-container">
    <div>
      <div class="list-box-title" style="width:50%;margin:0px auto;text-align:center">
        <el-tag type="gray">位置列表</el-tag>
      </div>
      <div class="list-box">
        <el-collapse-transition>
          <div v-show="show3">
            <div v-for="(area, index) in map_areas">
              <div class="transition-box" :class="index" @click="moveTo(area[1])" >{{ area[0] }}</div>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <!-- <el-button @click="show3 = !show3">Click Me</el-button> -->
  </div>
</template>

<script>
    export default {
      props: {
        map_areas: Array,
        mapContainerHeight: Number
      },
      data: () => ({
        show3: true
      }),
      methods: {
        moveTo(e) {
          this.$emit('moveTo', e);
        }
      },
      mounted() {
      },
      watch: {
        mapContainerHeight(){
          document.getElementsByClassName('list-box')[0].setAttribute("style","height:" + (this.mapContainerHeight / 2 - 35 ) + 'px');
        }
      }
  }
</script>

<style>
  .list-container {
    height: 50%;
    margin-bottom: 5px;
  }
  .list-box-title {
    height: 35px;
  }
  .list-box {
    /*height: 90%;*/
    overflow: scroll;
  }
  .transition-box {
    margin: 6px 5px 6px 5px;
    width: auto;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 30px 20px;
    box-sizing: border-box;
  }
</style>

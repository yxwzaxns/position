<template>
  <div class="pager">
    <el-tag type="success">楼层信息</el-tag>
    <i class="el-icon-caret-top fup btn-pager "  @click="upPage"></i>
    <!-- <el-button class="btn btn-pager" :disabled="this.current == 1" @click="prePage"><i class="el-icon-caret-top"></i></el-button> -->
    <!-- <span v-if="pageNo !== 1" class="page-index" :class="1 == current ? 'active':'' " @click="goPage(1)">1</span> -->
    <!-- <span v-if="preClipped" class="page-index">...</span> -->
    <span v-for="index in pages[1]" class="page-index" >{{  }}</span>
    <span v-for="index in pages[0]" class="page-index" :class="index == current ? 'active':''" @click="goPage(index)">{{index+' F'}}</span>
    <!-- <span v-if="backClipped" class="page-index">...</span> -->
    <!-- <span class="page-index" :class="pageNo == current ? 'active':''" @click="goPage(pageNo)">{{pageNo}}</span> -->
    <i class="el-icon-caret-bottom btn btn-pager"  @click="downPage"></i>
  </div>
</template>

<script>
export default {
  props: {
    // 用于记录总页码，可由父组件传过来
    pageNo: {
      type: Number,
      default: 1
    },
    mapContainerHeight: Number,
    currentFloor: {
      type: Number,
      default: 1
    }
    // 用于记录当前页数，这个与父组件进行数据交互来完成每一页的数据更新，所以我们只要改变current的值来控制整个页面的数据即可
    // current: {
    //   type: Number,
    //   default: 1
    // }
  },
  data() {
    return {
      current: 1,
      // 用于判断省略号是否显示
      backClipped: true,
      preClipped: false
    }
  },
  methods: {
    moveFloor() {
      this.$emit('moveFloor', this.current);
    },
    downPage () {
      // 上一页
      if (this.current == 1) {
        return false;
      }else{
        this.current--;
        this.moveFloor();
      }
    },
    upPage () {
      // 下一页
      if (this.current == this.pageNo) {
        return false;
      }else{
        this.current++;
        this.moveFloor();
      }
    },
    goPage (index) {
      // 跳转到相应页面
      if (index !== this.current) {
        this.current = index;
        this.moveFloor();
      }
    }
  },
  mounted: function(){
  },
  computed: {
    // 使用计算属性来得到每次应该显示的页码
    pages: function () {
      let ret = []
      let ret_ext = 0

      if (this.pageNo <= 7) {
        for(let i = this.pageNo; i >= 1 ; i-- ){
          ret.push(i)
        }
      }
      ret_ext = 7 - ret.length
      return [ret,ret_ext]
    }
  },
  watch: {
    mapContainerHeight: function() {
      document.getElementsByClassName('pager')[0].setAttribute("style","height:" + (this.mapContainerHeight / 2 ) + 'px');
    },
    currentFloor: function(){
      this.current = this.currentFloor;
    }
  }
}
</script>

<style>
.pager {
  text-align: center;
  margin: 4px;
}
.btn-pager {
  cursor: pointer;
  display: block;
  margin: 0px auto;
  padding: 0px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #e3e3e3;
  border-radius: 0px;;
}
.btn-pager:hover {
  background-color: #f2f2f2;
}
.page-index {
  display: block;
  margin: 0px auto;
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  cursor: pointer;
  color: #000000;
}
.active {
  color: #ffffff;
  background-color: #0bbe06;
}
</style>

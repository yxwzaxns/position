<template lang="html">
  <div class="map-info-container">
    <el-tag type="primary">地图信息</el-tag>
    <div class="info-card">
      <el-table
        :data="tableData"
        stripe
        :show-header="false"
        style="width: 100%">
        <el-table-column
          prop="key">
        </el-table-column>
        <el-table-column
          prop="val">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      floorInfo: null
    },
    data() {
      return {
        tableData: [{
          key: 'PixelSize',
          val: '',
        },{
          key: 'PhysicsSize',
          val: ''
        }]
      }
    },
    mounted(){
    },
    watch: {
      floorInfo: function() {
        this.$set(this.tableData[0], 'val', this.floorInfo['map_size'][0] + 'x' + this.floorInfo['map_size'][1]);
        this.$set(this.tableData[1], 'val', this.floorInfo['physicsSize']);
        // this.tableData[0]['val'] = this.floorInfo['map_size']
      }
    }
  }
</script>

<style>
.map-info-container {
  margin: 4px;
  text-align: center;
  padding-top: 2px;
}
.info-card {
  background-color: #bbb;
  margin-top: 5px;
  /*padding-bottom: 10px;*/
  margin-bottom: 10px;
}
</style>

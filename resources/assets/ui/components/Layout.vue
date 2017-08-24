<template>
  <div class="container">
    <div class="row">
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content bg-purple">
          <mynav></mynav>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="mid">
            <mapInfoList :map_areas="area_info" v-on:moveTo="moveTo" :mapContainerHeight="mapContainerHeight" class="map-info-list"></mapInfoList>
            <mapInfo :floorInfo="this.floor_info"></mapInfo>
          </div>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple">
          <!-- map container Layer  -->
          <mapContainer class="mid" :mapContainerHeight="mapContainerHeight"></mapContainer>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="mid">
            <floors :pageNo="this.floors" :currentFloor="this.currentFloor"  @moveFloor="moveFloor" :mapContainerHeight="mapContainerHeight" class="floors"></floors>
            <doit :mapData="this.floor_info" :currentArea="this.currentArea" ></doit>
          </div>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
        <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>
    import Mynav from './Nav';
    import MapInfoList from './List';
    import Floors from './Pagination';
    import MapInfo from './MapInfo';
    import Doit from './Doit';
    import MapContainer from './MapContainer';
    import axios from 'axios';
    export default {
        data(){
          return {
            map_info: null,
            floor_info: null,
            area_info: null,
            currentArea: null,
            floors: null,
            currentFloor: 1,

            mapContainerHeight: null
          }
        },
        beforeCreate: function() {
          axios.get('/api/v1/map_info/room')
          .then(response => {
            // this.loadMap(response.data);
            this.map_info = response.data.map_info;

            this.floor_info = this.map_info.floor_info[0];
            this.area_info = this.floor_info.map_areas;
            this.floors = this.map_info.floors;
          })
        },
        watch: {
          floor_info: function() {
            // console.log(this.floor_info);
            this.area_info = this.floor_info.map_areas;
            this.currentFloor = this.floor_info.floor;
          },
          // floors: function(){
          //   this.floors = this.map_info.floors;
          //   // console.log('gg');
          // },
        },
        computed: {

        },
        mounted() {
          var clientHeight = window.innerHeight;
          var midHeight = clientHeight - 100;

          var myElements = document.querySelectorAll(".mid");

          for (var i= 0; i < myElements.length ; i++) {
             myElements[i].style.height = midHeight + 'px';
          }

          this.mapContainerHeight = midHeight;
            // console.log('Layout Component mounted.')

          window.bus.$on('moveTo', (addr) => {
            var addr = addr.split('.');
            var floor_index = this.map_info.floor_info.findIndex((f)=>{
              return addr[0] == f['name'];
            })

            if(addr[1] == undefined){
              // console.log(this.map_info.floor_info[index]);
              this.floor_info = this.map_info.floor_info[floor_index];
            }else{
              this.floor_info = this.map_info.floor_info[floor_index];
              var area_index = this.map_info.floor_info[floor_index]['map_areas'].findIndex((a)=>{
                return addr[1] == a[0];
              })
              this.currentArea = this.floor_info['map_areas'][area_index][1];
            }
          })
        },
        methods: {
          moveTo(coordinate) {
            this.currentArea = coordinate;
          },
          moveFloor(floorNo) {
            // console.log(floorNo);
            this.floor_info = this.map_info.floor_info[floorNo - 1];
            this.area_info = this.floor_info.map_areas;
          },
          getMapInfo() {
            axios.get('/api/v1/map_info/room')
            .then(response => {
              this.map_info = response.data.map_info;
              return this.map_info.floor_info[0].map_areas;
            })
          },
          getFloorInfo() {
            return this.map_info.floors;
          }
        },
        components: {
          Mynav,
          MapInfoList,
          Floors,
          MapInfo,
          Doit,
          MapContainer
        }
    }
</script>

<style>
  .map-info-list{
    margin-top: 5px;
  }
  .floors{
    margin-top: 5px;
  }
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .mid {
    height: 500px;
    margin-bottom: 10px;
  }
</style>

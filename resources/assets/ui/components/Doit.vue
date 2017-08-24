<template lang="html">
  <div class="doit-container">
    <el-tag>操作工具</el-tag>
    <div class="doit-box-card">
      <div class="">
        <el-button class="button-box" @click="moveCenter" >重置地图</el-button>
        <el-button  class="button-box" @click="locationAction">{{ !location?"开始定位":"停止定位" }}</el-button>
      </div>
      <div class="">
        <el-button  class="button-box" type="warning" :disabled="false" @click="guide">{{ isGuide?"停止导航":"开始导航" }}</el-button>
        <el-button  class="button-box" type="warning" :disabled="true">操作定义</el-button>
      </div>
      <div class="">
        <el-button  class="button-box" type="warning" :disabled="true">操作定义</el-button>
        <el-button  class="button-box" type="warning" :disabled="true">操作定义</el-button>
      </div>
      <div class="">
        <el-button  class="button-box" type="warning" :disabled="true">操作定义</el-button>
        <el-button  class="button-box" type="warning" :disabled="true">操作定义</el-button>
      </div>
      <div class="">
        <el-button  class="button-box" type="warning" :disabled="false" @click="getProjection">获取投影</el-button>
        <el-button  class="button-box" type="warning" :disabled="false" @click="getZoom">获取缩放</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import Projection from 'ol/proj/projection';
import Proj from 'ol/proj';
import ImageStatic from 'ol/source/imagestatic';
import sVector from 'ol/source/vector';
import lVector from 'ol/layer/vector';
import Image from 'ol/layer/image';
import Extent from 'ol/extent';
import control from 'ol/control';
import ScaleLineControl from 'ol/control/scaleline'
import MousePosition from 'ol/control/mouseposition'
import interaction from 'ol/interaction';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import LineString from 'ol/geom/linestring';
import Style from 'ol/style/style';
import Stroke from 'ol/style/stroke';
import Fill from 'ol/style/fill';
import Circle from 'ol/style/circle';
import Icon from 'ol/style/icon';
import axios from 'axios';


export default {
  props: {
    mapData: null,
    currentArea: null,
  },
  data(){
    return {
      location: false,
      realLocationPixels: null,
      guideAimPixels: null,
      isGuide: false,
      pathUpdateTime: 100
    }
  },
  methods: {
    loadMap() {
      // stop all acton of tool
      this.stopAllAction();
      // clear map container content
      document.getElementById('map').innerHTML = "";

      // init map data
      var mapInfo = this.mapData;
      var extent = [0, 0, mapInfo.map_size[0], mapInfo.map_size[1]];

      var projection = new Projection({
          code: 'pixel',
          units: 'pixels',
          extent: extent,
          // metersPerUnit: 0.0082
        });

      // Proj.addProjection(projection);
      projection.setGetPointResolution(function(resolution, point){
        var pointResolution = 1 * resolution * 0.0082
        return pointResolution;
      });
      // draw choose aim location point
      this.positionSource = new sVector({wrapX: false});
      var positionVector = new lVector({
        extent: extent,
        source: this.positionSource
      });

      // draw real location point
      this.source = new sVector({wrapX: false});
      var vector = new lVector({
        source: this.source
      });
      // temp source to draw path of guide
      this.tempSource = new sVector({wrapX: false});
      var tempVector = new lVector({
        source: this.tempSource
      });

      var mapSource = new ImageStatic({
          url: mapInfo.map_url,
          projection: projection,
          imageExtent: extent,
          imageSize: [mapInfo.map_size[0], mapInfo.map_size[1]]
        })
      this.map = new Map({
        target: 'map',
        layers: [
          new Image({
            source: mapSource
          }),
          vector,
          positionVector,
          tempVector
        ],
        view: new View({
          projection: projection,
          resolution: 2,
          center: Extent.getCenter(extent),
          // zoom: 1,
          // minZoom: 1,
          // maxZoom: 5
        }),
        controls: control.defaults({
          attribution: false
        })
      });

      var scaleLineControl = new ScaleLineControl({
          //设置度量单位为米
          // minWidth: 1,
          projection: projection,

          // target: 'scalebar',
          // className: 'ol-scale-line'
      });
      var mousePosition = new MousePosition({
          //设置度量单位为米
          projection: projection
          // units: 'metric',
          // target: 'scalebar',
          // className: 'ol-scale-line'
      });
      this.map.addControl(scaleLineControl);
      this.map.addControl(mousePosition);
      // init choose action
      this.map.on('click', evt => {
        this.guideAimPixels = evt.coordinate;
        var markerStyle = new Style({
           image: new Icon({
             src: '/images/aim.svg',
             opacity: 0.6,
             scale: this.map.getView().getZoom() / 3
           })
         });
        this.marker(evt.coordinate[0],evt.coordinate[1],this.positionSource,markerStyle)
      })

    },
    stopAllAction() {
      if (this.location) {
        this.locationAction();
      }
      if (this.isGuide) {
        this.guide();
      }
    },
    getPointResolution(){
      var v = this.map.getView();
      console.log(v.getResolution());
      // console.log(v.getResolution());
      // console.log(Proj.METERS_PER_UNIT);
      var tmp = Proj.getPointResolution(v.getProjection(),v.getResolution(),[200,200])
      // console.log(tmp);
    },
    getProjection(){
      // console.log(this.map.getView().getProjection());
      // console.log(Proj.METERS_PER_UNIT);
      // console.log(Proj);
      // alert(this.map.getView().getResolution()+'---'+ this.map.getSize()+'=='+this.map.getPixelFromCoordinate([0,0])+'##'+Proj.METERS_PER_UNIT);
      this.getPointResolution();
    },
    getZoom(){
      console.log(this.map.getView().getZoom());
    },
    locationAction(){
      if(!this.location){
        // start location
        this.locationLoopHande = setInterval(()=>{
          this.getRealPosition()
        }, 1000);
        this.location = true;
      }else{
        // stop location
        clearInterval(this.locationLoopHande);
        this.location = false;
      }
    },
    moveCenter() {
      var view = this.map.getView()
      var extent = [0, 0, this.mapData.map_size[0], this.mapData.map_size[1]];
      var center = Extent.getCenter(extent)
      view.setCenter(center);
      view.setZoom(1.6);
      view.setRotation(0);
      // console.log(this.map);
    },
    moveTo(coordinate) {
      var view = this.map.getView()
      var center = [coordinate[0],coordinate[1]];
      view.animate({
          center: center,
          duration: 2000
        });
      // view.setCenter(center);
    },
    guide() {
      if (!this.isGuide) {
        this.guideLoopHande = setInterval(()=>{
          var start_point = [this.realLocationPixels[0],this.realLocationPixels[1]];
          var end_point = [this.guideAimPixels[0], this.guideAimPixels[1]];

          // join path coordinate of line
          // function getRandomInt(min, max) {
          //   return Math.floor(Math.random() * (max - min + 1) + min);
          // }
          // var path = []
          //
          // for(let i= 0;i < 5;i ++){
          //   path.push([getRandomInt(100,1000),getRandomInt(100,700)])
          // }
          //
          // path.unshift(start_point);
          // path.push(end_point);

          var path = [start_point, end_point];
          this.drawLine(path);
        }, this.pathUpdateTime);
        this.isGuide = true;
      }else{
        clearInterval(this.guideLoopHande);
        this.removeFeature(this.tempSource);
        this.isGuide = false;
      }

      // var vector = lVector();
      // vector.addFeatures([new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([start_point, end_point]))]);
      // map.addLayers([vector]);
    },
    removeFeature(source) {
      source.clear();
    },
    getRealPosition() {
        axios.get('/api/v1/location/room/' + this.mapData.floor)
        .then(response => {
          this.realLocationPixels = response.data.data;
          // start up a event on add feature
          // this.realLocationEventHand = this.map.on('postcompose', this.realLocationAnimate);
          var markerStyle = new Style({
             image: new Icon({
               src: '/images/location.png',
               opacity: 0.6,
               anchor: [0.5, 0.8],
               scale: this.map.getView().getZoom() / 2
             })
           });
          this.marker(response.data.data[0],response.data.data[1],this.source,markerStyle)
        })
    },
    drawLine(path, source=this.tempSource){
      source.clear();
      var guideFeature = new Feature({
          geometry: new LineString(path)
      });

      var guideStyle = new Style({
          fill: new Fill({
               color: 'red'
          }),
          stroke: new Stroke({
           color: 'white',
           lineDash:[10,10,10,10,10],
          })
      });
      guideFeature.setStyle(guideStyle);
      source.addFeature(guideFeature);
    },
    realLocationAnimate() {

    },
    marker(x,y,source=this.source,style=null) {
      source.clear();
      var markerFeature = new Feature({
          geometry: new Point([x, y])
      });

      if(style == null) {

      }else{
        markerFeature.setStyle(function(resolution){
          return style
        });
      }
      source.addFeature(markerFeature);
    }
  },
  computed: {

  },
  watch: {
    mapData: function(){
      // console.log(this.mapData);
      this.loadMap();
    },
    currentArea: function(){
      this.moveTo(this.currentArea);
    }
  },
  mounted: function () {
    // console.log(this.mapData);
    // this.loadMap(1);
    // axios.get('/api/v1/map_info/room')
    // .then(response => {
    //   console.log(response.data);
    //   this.loadMap(response.data);
    // })
    // demo = 1;
  }
}
</script>

<style>
.button-box {
  margin: 2px 0px;
}
.doit-container {
  text-align: center;
  padding-top: 2px;
}
.doit-box-card {
  margin-top: 5px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>

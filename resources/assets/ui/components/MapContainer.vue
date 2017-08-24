<template lang="html">
  <div class="mapContainer">
    <div id="map" class="map"></div>
    <!-- <form class="form-inline">
      <label @click="loadMap">Geometry type &nbsp;</label>
      <select id="type">
        <option value="None">None</option>
        <option value="Point">Point</option>
        <option value="LineString">LineString</option>
        <option value="Polygon">Polygon</option>
        <option value="Circle">Circle</option>
      </select>
    </form> -->
  </div>
</template>

<script>
export default {
  props: {
    mapContainerHeight: Number
  },
  mounted(){

  },
  watch: {
    mapContainerHeight() {
      document.getElementById('map').setAttribute("style","height:" + this.mapContainerHeight + 'px');
    }
  }
}
</script>

<style lang="css">
.mapContainer {
  margin-top: 5px;
    /*width: 600px;
    height: 300px;
    border: 1px solid red;*/
}
</style>

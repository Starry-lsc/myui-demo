<template>
    <div class="mes5">
      <div id="container"></div>
    </div>
</template>

<script>
    export default {
        name: "Mess5",
      data(){
          return{

          }
      },
      mounted(){
        this.BaiduMap()
      },
      methods:{
        BaiduMap(){
          var map = new BMap.Map("container");
          var point = new BMap.Point(116.404, 39.915);
          map.centerAndZoom(point, 15);
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl());
          map.addControl(new BMap.OverviewMapControl());
          map.addControl(new BMap.MapTypeControl());
          map.setCurrentCity("北京");
        }
      }
    }
</script>

<style scoped>
  .mes5{margin-left: 270px}
  #container{width: 800px;height: 600px;margin: 0 auto}
</style>

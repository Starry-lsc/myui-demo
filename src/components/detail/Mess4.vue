<template>
    <div class="mes4">
      <div class="chartLeft">
        <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
      </div>
      <div class="chartLeft">
        <div id="myCus" :style="{width: '600px', height: '600px'}"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Mess4",
      data(){
          return{

          }
      },
      mounted(){
        this.drawLine();
        this.custom();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'));
          // 绘制图表
          myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
              type: 'category',
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {type: 'value'},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
        },
        custom(){
          let myCus = this.$echarts.init(document.getElementById('myCus'));
          myCus.setOption({
            title : {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          })
        }
      }
    }
</script>

<style scoped>
.mes4{margin-left: 270px}
  .chartLeft{float: left}
</style>

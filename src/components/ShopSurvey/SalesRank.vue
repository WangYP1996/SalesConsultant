<template>
    <div class="row">
        <br>
        <div class="col-sm-6" id="sales_rank">
            <span style="font-size: 15px">30天支付金额排行</span><br>
            <span style="font-size: 22px" v-cloak>{{paymentrank}}名<br></span>
            <span style="font-size: 12px;color:gray" v-cloak>较前日 <i :class="up" :style="color"></i>{{changement}}名</span>
        </div>
        <div class="col-sm-6" id="rank_table">
            <div id="sales_rank_table"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'salesrank',
    data() {
        return {
            paymentrank: "5W+",
            changement: "1000+",
            up: "fa fa-angle-double-up",
            color: "color:red"
        }
    },
    mounted(){
        let rank_chart = echarts.init(document.getElementById('sales_rank_table'))
        rank_chart.showLoading();
        rank_chart.setOption({
            xAxis: {
                show: false,
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                splitLine: false,
            },
            yAxis: {
                splitLine: false,
                show: false
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        });
        rank_chart.hideLoading();
    }
}
</script>

<style>
    #sales_rank{
        padding-right:0px;
    }
    #rank_table{
        padding:0px;
    }
    #sales_rank_table{
        padding-top:20px;
        height: 120px;
    }
</style>


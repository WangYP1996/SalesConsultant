<template>
    <div id="StatusLeft" class="col-sm-8">
        <div class="col-xs-2">
            <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-cny fa-stack-1x fa-inverse"></i>
            </span>
        </div>
        <div class="col-xs-4">
            支付金额（元）：<br>
            <p id="paid" v-cloak>{{paid}}</p>
        </div>
        <div class="col-xs-1">
            <!--留空-->
        </div>
        <div class="col-xs-4" id=status_data>
            行业排名&nbsp;&nbsp;<span v-cloak>{{rank}}</span><br>
            昨日全天&nbsp;&nbsp;<span v-cloak>{{yeste}}</span><br>
        </div>
        <div class="col-xs-12" id="left_table"></div>
    </div>
</template>

<script>
import {NumtoString} from '../NumtoString'

export default {
    name: 'statusleft',
    props: ['ToLeft'],
    data() {
        return {
            paid: '---',
            rank: '---',
            yeste: '---'
        }
    },
    mounted() {
        echarts.init(document.getElementById('left_table')).showLoading();
    },
    watch: {
        ToLeft() {
            this.paid = NumtoString(this.ToLeft[1][6]);
            this.yeste = NumtoString(this.ToLeft[1][5]);
            //fake data
            this.rank = "5W+";
            //!fake data
            let Status_table = echarts.init(document.getElementById('left_table'));
            Status_table.setOption({
                tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top: 30,
                        bottom: 10,
                        left: 0,
                        right: 0,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: this.ToLeft[0],//hours,
                        //xAxis
                        splitLine: false
                    },
                    yAxis: {
                        type: 'value',
                        splitNumber: 2,
                        splitLine: false
                    },
                    legend: {
                        data: ["我的"/* '今日','昨日'*/],
                        x: "left"
                    },
                    series: [{
                        name: "我的",//"今日",
                        data: this.ToLeft[1],
                        //dataToday
                        type: 'line'
                    },
                ]
            });
            Status_table.hideLoading();
        }
    }
}
</script>

<style>
    #StatusLeft .fa-stack>.fa-stack-2x{
        color:#2062e6;
    }
    #StatusLeft #left_table {
        height: 180px;
        padding: 30px 0px 0px 0px;
    }
    #status_data {
        padding: 0;
        font-size: 15px;
        padding-top: 4px;
        color: gray;
    }
    #status_data>span{
        color: black;
    }
    #paid {
        font-size: 28px;
    }
</style>



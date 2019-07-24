<template>
    <div id="survey_progress">
        &nbsp;&nbsp;<p style="font-size:14px">本月销售目标进度：&nbsp;&nbsp;&nbsp;<i data-toggle="modal" data-target="#MissionSet">设置目标</i></p>
        <div id="progress_textline">
            <div class="col-xs-4" style="padding: 0">
                <div id="percentage" v-cloak>&nbsp;&nbsp;{{percentage}}</div>
            </div>
            <div class="col-xs-8" style="padding: 0">
                <div id="plandata" v-cloak>{{now}}/{{plan}}&nbsp;&nbsp;</div>
            </div>
        </div>
        <div id="chart_shopsurvey_progress" class="row"></div>
        <div class="modal fade" id="MissionSet" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="input-group">
                            <span class="input-group-addon">目标</span>
                            <input type="text" class="form-control" id="MissionSet1" v-model="target">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="MissionSet(target)">确定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {GetDate} from '../Time'
import {NumtoString} from '../NumtoString'

export default {
    name: 'progressbar',
    data() {
        return {
            percentage: "--",
            now: "--",
            plan: "--",
            target: 0,
            realnow: 0,
        }
    },
    methods: {
        MissionSet: function(value){
            let that = this
            $.ajax({
                url: "http://10.141.212.155:8083/api/data/settarget",
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    "user_id": 1,
                    "target": value
                }),
                success: function (data) {
                    let chart = echarts.getInstanceByDom(document.getElementById('chart_shopsurvey_progress'));
                    chart.setOption({
                        series: [
                            {
                                name: "rest",
                                data: [that.realnow>data.target?0:data.target-that.realnow]
                            }
                        ]
                    }); 
                    [that.plan, that.target, that.percentage] = [NumtoString(data.target), data.target, ((that.realnow/data.target)*100).toFixed(2).toString()+'%'];    
                }
            });
        }
    },
    mounted() {
        let that = this;
        let chart2 = echarts.init(document.getElementById('chart_shopsurvey_progress'));
        chart2.setOption({
            grid: {
                left: '3%',
                right: '0%',
                bottom: '0%',
                top: "0%",
                x: 0,
                y: 0
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                show: false,
                fontsize: 1
            },
            yAxis: {
                type: 'category',
                data: ['sales12'],
                show: false,
                fontsize: 1
            },
            series: [{
                name: 'completed',
                type: 'bar',
                stack: "sales",
                data: [18203],
                barWidth: 30,
                itemStyle: {
                    barBorderRadius: [5, 0, 0, 5]
                }

            },
                {
                    name: 'rest',
                    type: 'bar',
                    stack: "sales",
                    data: [19325],
                    barWidth: 30,
                    itemStyle: {
                        barBorderRadius: [0, 5, 5, 0]
                    }
                }],
            animation: false,
        });
        $.ajax({
            url: "http://10.141.212.155:8083/api/data/getsumbydate",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(
                {
                    "tablename": "websales_home_myshop",
                    "date1": GetDate(0).substr(0, 8) + "01",
                    "date2": GetDate(0),
                    "scale": "month"
                }
            ),
            success: function (data) {
                let tag = '';
                for (let i in data.data[0]) {
                    tag = i;
                }
                let now = data.data[0][tag][1];
                $.ajax({
                    url: "http://10.141.212.155:8083/api/data/settarget",
                    method: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify({
                        "user_id": 1,
                        "target": -1
                    }),
                    success: function (data) {
                        chart2.setOption({
                            series: [
                                {
                                    name: "completed",
                                    data: [now]
                                },
                                {
                                    name: "rest",
                                    data: [now>data.target?0:data.target-now]
                                }
                            ]
                        }); 
                        [that.realnow,that.now, that.plan, that.target, that.percentage] = [now,NumtoString(now), NumtoString(data.target), data.target, ((now/data.target)*100).toFixed(2).toString()+'%'];    
                    }
                });
            }
        });
    }
}
</script>

<style>
#chart_shopsurvey_progress{
    margin: 0;
    height: 50px
}
</style>

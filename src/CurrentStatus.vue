<template>
    <div id="CurrentStatus" class='col-md-9'>
        <div class="panel panel-default">
            <div class="panel-body" id="StatusBody">
                <Headline title="实时概况"></Headline>
                <div id="StatusCard">
                    <statusleft :ToLeft="ToLeft"></statusleft>
                    <statusright :ToRight="ToRight"></statusright>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Headline from './components/Headline'
import statusleft from './components/CurrentStatus/StatusLeft'
import statusright from './components/CurrentStatus/StatusRight'
import {GetDate} from './components/Time'

export default {
    name: 'CurrentStatus',
    components:{
        Headline,
        statusleft,
        statusright,
    },
    data() {
        return {
            ToLeft: [],
            ToRight: []
        }
    },
    mounted() {
        let that = this;
        $.ajax({
            url: "http://10.141.212.155:8083/api/data/getsumbydate",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(
                {
                    "tablename": "websales_home_myshop",
                    "date1": GetDate(6),//date_now
                    "date2": GetDate(0),//date_now
                    "scale": "day"
                }
            ),
            success: function (data) {
                let Xaxis = [];
                let Quantity = [];
                let Sales = [];
                for(let d = 6; d >= 0; d--) {
                    Xaxis.push(GetDate(d).substr(5,5));
                }
                for(let i in data.data){
                    for(let j in data.data[i]){
                        console.log(data.data[i][j]);
                        Quantity.push(data.data[i][j][0]);
                        Sales.push(data.data[i][j][1]);
                    }        
                }
                that.ToLeft = [Xaxis, Sales];
                that.ToRight = [Xaxis, Sales, Quantity];
            }
        });
    }
}
</script>

<style>
    #CurrentStatus div{
        overflow: hidden;
    }
    #StatusBody{
        min-height: 350px;
    }
    #StatusBody>#Headline>#Title>p{
        font-size: 20px;
    }
</style>


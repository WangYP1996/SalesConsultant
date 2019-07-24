<template>
    <nav class="navbar navbar-default" role="navigation" style="position: sticky ;top:0px;z-index:999">
        <div class="container-fluid"></div>
        <div class="col-md-4">
            <ul class="nav navbar-nav">
                <li v-for="t in Tabs" :key="t.id" :class="t.id==0?'active':''">
                    <a data-toggle="tab" :href="t.href">{{t.title}}</a>
                </li>
            </ul>
        </div>
        <div class="col-md-3"></div>
        <div style="margin-top:8px" class="col-md-4" id="DateRange">
            <div class="input-group" style="color:rgb(0, 0, 0)">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <input class="form-control" type="text" id="datepicker1" value=""/>
                <span class="input-group-addon">-</span>
                <input class="form-control" type="text" id="datepicker2" value=""/>
                <span class="input-group-btn"><button class="btn btn-default" @click="ChangeRange()"><i class="fa fa-search"></i></button></span>
            </div>
        </div>
        <daterange ref="range"></daterange>
    </nav>
    
</template>

<script>
import {GetDate} from './components/Time'
import daterange from './components/DateRange'

export default {
    name: 'navbar',
    components: {
        daterange
    },
    data(){
        return {
            Tabs: [
                {
                    id: 0,
                    href: '#operation_window',
                    title: '运营视窗'
                },
                {
                    id: 1,
                    href: '#service_window',
                    title: '服务视窗'
                },
                {
                    id: 2,
                    href: '#manage_window',
                    title: '管理视窗'
                },
            ],
        }
    },
    methods: {
        ChangeRange: function(){
            let start = document.getElementById('datepicker1').value;
            let end = document.getElementById('datepicker2').value;
            if(Date.parse(start)>Date.parse(end)){
                alert("日期选择有误！");
                [document.getElementById('datepicker1').value, document.getElementById('datepicker2').value] = [document.getElementById('datepicker2').value, document.getElementById('datepicker1').value]
                return -1;
            }
            else{
                this.$store.commit('changeStart', document.getElementById('datepicker1').value);
                this.$store.commit('changeEnd', document.getElementById('datepicker2').value);
            }
        }
    },
    mounted(){
          
        $("#datepicker1").datetimepicker({
            format: "yyyy-mm-dd",
            autoclose: true,
            minView: 2,
        });

        $("#datepicker2").datetimepicker({
            format: "yyyy-mm-dd",
            autoclose: true,
            minView: 2
        }); 
        document.getElementById('datepicker1').value = GetDate(1000);
        document.getElementById('datepicker2').value = GetDate(0);
    },
}
</script>

<style>
.navbar {
    position: sticky;
    z-index: 999;
}
</style>


 

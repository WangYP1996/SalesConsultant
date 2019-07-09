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
            <!--
            <div class="input-group" style="color:rgb(0, 0, 0)">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <input class="form-control" type="text" id="datepicker1" />
                <span class="input-group-addon">-</span>
                <input class="form-control" type="text" id="datepicker2" />
                <span class="input-group-btn"><button class="btn btn-default" onclick="ChangeDateRange()"><i class="fa fa-search"></i></button></span>
            </div>
            -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
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
            ]
        }
    }
}
</script>

 

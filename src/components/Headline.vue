<template>
    <div id="Headline">
        <div id="Title"><p>&nbsp;{{title}}</p></div>
        <div id="Updatetime" v-cloak>更新时间：{{CurrentTime}}&nbsp;</div>
    </div>    
</template>
<script>
import {GetDate} from './Time'

export default {
    name: 'Headline',
    props:{
        title: String
    },
    data(){
        return {
            CurrentTime: GetDate(0)
        }
    }
}
</script>

<style>
    #Headline>#Title{
        float: left;
    }
    #Headline>#Updatetime{
        margin-top: 5px;
        float: right;
    }
</style>

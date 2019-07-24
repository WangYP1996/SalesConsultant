<template>
    <div style="display: none"></div>
</template>

<script>
import {GetDate} from './Time'

export default {
    name: 'daterange',
    data() {
        return {
            range: [GetDate(1000), GetDate(0)]  
        }        
    },
    watch: {
        range: function(){
            this.rangechange();
            console.log('emit')
        }
    },
    methods:{
        rangechange(){
            this.$emit('cr',this.range);
        }
    }
}
</script>

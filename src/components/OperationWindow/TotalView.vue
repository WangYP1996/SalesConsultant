<template>
    <div class="row">
        <div class="col-md-12" id="TotalView">
            <div class="panel panel-default">
                <div class="panel-heading">
                    整体看板
                </div>
                <div class="panel-body">
                    {{show}}
                </div>
            </div>
        </div>
        <daterange></daterange>
    </div>
</template>

<script>
import daterange from '../DateRange'

export default {
    name: 'totalview',
    components: {
        daterange
    },
    data() {
        return {
            show: ''
        }
    },
    computed: {
        range() {
            return [this.$store.state.start, this.$store.state.end]
        }
    },
    watch: {
        range: function(){
            console.log('range changed');
            this.show = `${this.range[0]}-${this.range[1]}`
        },
    }
}
</script>

<style>

</style>



<template>
    <div id="CurrentStatus" class='col-md-9'>
        <div class="panel panel-default">
            <div class="panel-body" id="StatusBody">
                <Headline title="实时概况"></Headline>
            </div>
        </div>
    </div>

</template>

<script>
import Headline from './components/Headline'

export default {
    name: 'CurrentStatus',
    components:{
        Headline
    }
}
</script>

<style>
    #StatusBody{
        min-height: 350px;
    }
    #StatusBody>#Headline>#Title>p{
        font-size: 20px;
    }
</style>


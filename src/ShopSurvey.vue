<template>
    <div id="ShopSurvey" class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body" id="SurveyBody">
                <Headline title="店铺概况"></Headline>
            </div>
        </div>
    </div>
</template>

<script>
import Headline from './components/Headline'

export default {
    name: 'ShopSurvey',
    components:{
        Headline,
    }
}
</script>

<style>
    #SurveyBody{
        min-height: 350px;
    }
    #SurveyBody>#Headline>#Title>p{
        font-size: 20px;
    }
</style>


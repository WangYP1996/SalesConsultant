<template>
    <div id="ShopSurvey" class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-body" id="SurveyBody">
                <Headline title="店铺概况"></Headline>
                <salesrank></salesrank>
                <progressbar></progressbar>
            </div>
        </div>
    </div>
</template>

<script>
import Headline from './components/Headline'
import salesrank from './components/ShopSurvey/SalesRank'
import progressbar from './components/ShopSurvey/ProgressBar'

export default {
    name: 'ShopSurvey',
    components:{
        Headline,
        salesrank,
        progressbar
    }
}
</script>

<style>
    #ShopSurvey div{
        overflow: hidden;
    }
    #SurveyBody{
        min-height: 350px;
        padding: 15px;
    }
    #SurveyBody>#Headline>#Title>p{
        font-size: 18px;
    }
    #SurveyBody>#Headline>#Updatetime{
        font-size: 10px;
    }
</style>


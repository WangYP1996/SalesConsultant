<template>
    <div class="row">
        <div class="col-md-12" id="TradeRank">
            <div class="panel panel-default">
                <div class="panel-heading">
                    行业排行
                </div>
                <div class="panel-body">
                    <div class="row" id="shop_index">
                        <div class="col-md-4"  v-for="r in Ranks" :key="r.id">
                            <h3 v-cloak>{{r.RankTitle}}</h3>
                            <table style="width:100%">
                                <thead>
                                    <tr>
                                        <td style="width:10%">排名</td>
                                        <td style="width:70%" v-cloak>{{r.RankCol.Col1}}</td>
                                        <td style="width:20%" v-cloak>{{r.RankCol.Col2}}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(l,index) in r.RankList" :key="l.id">
                                        <td v-cloak>{{index+1}}</td>
                                        <td v-cloak>
                                            <img v-if="typeof l.img!='undefined'" :src="l.img" style="height: 60px;width:60px" alt="">
                                            {{l.Col1}}
                                        </td>
                                        <td v-cloak>{{l.Col2}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'traderank',
    data() {
        return {
            Ranks: [
                {
                    RankTitle: "店铺",
                    RankCol: {
                        Col1: "店铺",
                        Col2: "交易指数",
                    },
                    RankList: [
                        {
                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺1",
                            Col2: "100"
                        },
                        {

                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺2",
                            Col2: "99"
                        },
                        {

                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺3",
                            Col2: "98"
                        },
                        {
                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺4",
                            Col2: "97"
                        }
                    ]
                },
                {
                    RankTitle: "商品",
                    RankCol: {
                        Col1: "商品",
                        Col2: "交易指数",
                    },
                    RankList: [
                        {
                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺1",
                            Col2: "100"
                        },
                        {

                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺2",
                            Col2: "99"
                        },
                        {

                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺3",
                            Col2: "98"
                        },
                        {
                            img: "vendors/js/jqfloat/bg.jpg",
                            Col1: "店铺4",
                            Col2: "97"
                        }
                    ]
                },
                {
                    RankTitle: "关键字",
                    RankCol: {
                        Col1: "关键字",
                        Col2: "热度",
                    },
                    RankList: [
                        {
                            Col1: "店铺1",
                            Col2: "100"
                        },
                        {

                            Col1: "店铺2",
                            Col2: "99"
                        },
                        {

                            Col1: "店铺3",
                            Col2: "98"
                        },
                        {
                            Col1: "店铺4",
                            Col2: "97"
                        }
                    ]
                },
            ]
        }
    }
}
</script>

<style>
#TradeRank td{
    height: 60px;
}
</style>

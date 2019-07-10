<template>
    <div id="status_right" class="col-sm-4">
        <br>
        <div class="col-xs-6" v-for="c in cards" :key="c.id">
            <div class="col-xs-12">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle fa-stack-2x" :style="c.style"></i>
                    <i :class="c.img"></i>
                </span>
            </div>
            <div id="columns" class="col-xs-12" v-cloak>
                <br>{{c.column}}
                <br>{{c.nums}}
            </div>
            <div id='nums' class="col-xs-12" v-cloak>
                排名 <br><span>{{c.rating}}</span><br>
                昨日 <br><span>{{c.yesterday}}</span>
            </div>
            <div class="col-xs-12"><br></div>

            </div>
        </div>
</template>

<script>
import {NumtoString} from '../NumtoString'

export default {
    name: 'statusright',
    props: ['ToRight'],
    data(){
        return {
            cards: [
                {
                    img: 'fa fa-truck fa-stack-1x fa-inverse',
                    style: "color:#fe7c24;",
                    column: "销售量",
                    nums: "--",
                    rating: "--",
                    yesterday: "--"
                },
                {
                    img: 'fa fa-dollar fa-stack-1x fa-inverse',
                    style: "color:#00ba26;",
                    column: "累计支付金额",
                    nums: "--",
                    rating: "--",
                    yesterday: "--"
                },
            ]
        }
    },
    mounted() {
        
    },
    watch: {
        ToRight() {
            let [Quantity, Sales] = [0,0];
            for(let i = 0; i < 7; i++){
                Quantity += this.ToRight[2][i];
                Sales += this.ToRight[1][i];
            }
            this.cards[0].nums = NumtoString(Quantity);
            this.cards[1].nums = NumtoString(Sales);
            this.cards[0].yesterday = NumtoString(Quantity - this.ToRight[2][6]);
            this.cards[1].yesterday = NumtoString(Sales - this.ToRight[1][6]);
            //fake data
            this.cards[0].rating = '5W+';
            this.cards[1].rating = '5W+';
        }
    }
}
</script>
<style>
#status_right{
    padding-left: 5px;
}
#status_right>.col-xs-6{
    padding: 0;
}
#status_right>.col-xs-6>#columns{
    font-size: 18px;
}
#status_right>.col-xs-6>#nums{
    font-size: 15px;
    color: gray;
}
#status_right>.col-xs-6>#nums>span{
    font-size: 15px;
    color: black;
}

#status_right>.col-xs-6>.col-xs-12{
    padding: 0;
}
</style>



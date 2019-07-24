setTimeout(function () {
    window.onresize = function () {
        echarts.getInstanceByDom(document.getElementById('left_table')).resize();
        echarts.getInstanceByDom(document.getElementById('sales_rank_table')).resize();
        echarts.getInstanceByDom(document.getElementById('chart_shopsurvey_progress')).resize();
        
        let height = $("#ShopSurvey .panel-body").height() >= $("#CurrentStatus .panel-body").height() ? $("#ShopSurvey .panel-body").height() : $("#CurrentStatus .panel-body").height()
        $("#ShopSurvey .panel-body").height(height);
        $("#CurrentStatus .panel-body").height(height);
    }
}, 200);

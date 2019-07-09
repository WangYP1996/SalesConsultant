import Vue from 'vue'
import CurrentStatus from './CurrentStatus'
import ShopSurvey from './ShopSurvey'

Vue.config.productionTip = false

new Vue({
  render: h => h(CurrentStatus),
}).$mount('#CurrentStatus')

new Vue({
  render: h => h(ShopSurvey),
}).$mount('#ShopSurvey')

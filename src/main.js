import Vue from 'vue'
import CurrentStatus from './CurrentStatus'
import ShopSurvey from './ShopSurvey'
import Navbar from './Navbar'

Vue.config.productionTip = false

new Vue({
  render: h => h(CurrentStatus),
}).$mount('#CurrentStatus')

new Vue({
  render: h => h(ShopSurvey),
}).$mount('#ShopSurvey')

new Vue({
  render: h => h(Navbar),
}).$mount('#Navbar')

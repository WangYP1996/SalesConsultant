import Vue from 'vue'
import Vuex from 'vuex'
import CurrentStatus from './CurrentStatus'
import ShopSurvey from './ShopSurvey'
import Navbar from './Navbar'
import OperationWindow from './OperationWindow'
import ServiceWindow from './ServiceWindow'
import ManageWindow from './ManageWindow'
import store from './store/store'

import './main.css'
import './public.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(CurrentStatus),
}).$mount('#CurrentStatus')

new Vue({
  render: h => h(ShopSurvey),
}).$mount('#ShopSurvey')

new Vue({
  render: h => h(Navbar),
  store
}).$mount('#Navbar')

new Vue({
  render: h => h(OperationWindow),
  store
}).$mount('#OperationWindow')

new Vue({
  render: h => h(ServiceWindow),
}).$mount('#ServiceWindow')

new Vue({
  render: h => h(ManageWindow),
}).$mount('#ManageWindow')
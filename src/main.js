import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { CustomEvent, eventUtils } from './utils'

console.log('====:', CustomEvent, eventUtils)
new Vue({
  render: h => h(App),
}).$mount('#app')

const requireAll = (r) => r.keys().forEach(r);
const requireContext = require.context('@/assets/icons/', true, /\.svg$/);
requireAll(requireContext);


import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

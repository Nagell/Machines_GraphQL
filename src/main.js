import Vue from 'vue'
import App from './App.vue'
import apolloProvider from './apollo'
import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
	apolloProvider,
	render: h => h(App)
}).$mount('#app')

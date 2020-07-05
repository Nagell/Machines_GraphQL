import Vue from 'vue'
import App from './App.vue'
import apolloProvider from './apollo'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
	router,
	apolloProvider,
	vuetify,
	render: h => h(App),
}).$mount('#app')

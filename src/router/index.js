import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/machine/:slug',
		name: 'Machine',
		component: () =>
			import(/* webpackChunkName: "machine" */ '../views/Machine.vue'),
		beforeEnter: (to, from, next) => {
			let lastMachineId = localStorage.getItem('lastMachineId')

			if (lastMachineId === 'undefined') {
				localStorage.removeItem('lastMachineId')
			}
			if (to.params.id) {
				localStorage.setItem('lastMachineId', to.params.id)
			}
			next()
		},
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router

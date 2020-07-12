import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'
import { routes } from '@/router/index'
import vuetify from '@/plugins/vuetify'
import DatetimePicker from 'vuetify-datetime-picker'

const { addMockFunctionsToSchema } = require('apollo-server')
import schema from './__mocks__/mockSchema'

/**
 * Test setup helper
 */
class SetupHelper {
	constructor() {}

	/**
	 * Initializes and mounts component, returns wrapper
	 * @param component
	 * @param asShallowMount
	 * @param options
	 * @param {{width: number, height: number}} widthHeight - set height and width for client if needed
	 * @returns {Wrapper<Vue>}
	 */
	setupWrapper(component, asShallowMount = false, options = {}, widthHeight) {
		let localVue = createLocalVue()
		localVue.use(VueApollo)
		localVue.use(VueRouter)
		localVue.use(DatetimePicker)

		let router = new VueRouter({ routes })

		// Adding mocks for GraphQL and Apollo
		addMockFunctionsToSchema({
			schema,
			preserveResolvers: true,
		})

		// creating a wrapper for tests
		let wrapper = asShallowMount
			? shallowMount(
					component,
					Object.assign(
						{
							localVue,
							router,
							vuetify,
							mocks: {
								$apollo: {
									queries: {
										machines: {
											loading: true,
										},
									},
								},
								$apolloData: {
									loading: false,
								},
							},
							attachToDocument: true,
						},
						options
					)
			  )
			: mount(
					component,
					Object.assign(
						{
							localVue,
							router,
							vuetify,
							mocks: {
								$apolloData: {
									loading: false,
								},
							},
							attachToDocument: true,
						},
						options
					)
			  )

		// setting window width / height
		if (widthHeight) {
			wrapper.element._jsdomMockClientWidth = widthHeight.width
			wrapper.element._jsdomMockClientHeight = widthHeight.height
		}

		return wrapper
	}
}

export { SetupHelper }

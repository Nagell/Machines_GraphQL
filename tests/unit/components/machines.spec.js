import { SetupHelper } from '../../TestHelper'
// Component to test
import Machines from '@/components/Machines'

describe('Machines view: ApolloQuerry test', () => {
	let sh, wrapper
	let ApolloQuery

	// setup before each test
	beforeEach(done => {
		sh = new SetupHelper()
		wrapper = sh.setupWrapper(Machines, false, {})
		ApolloQuery = wrapper.find('#machines-apollo-query')
		done()
	})

	it('is a Vue instance', () => {
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('ApolloQuery exists', () => {
		expect(ApolloQuery.exists()).toBe(true)
	})
})

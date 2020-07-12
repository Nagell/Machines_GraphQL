import { SetupHelper } from '../../TestHelper'
import { graphql } from 'graphql'
import schema from './../../__mocks__/mockSchema'

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

	it('Mocked machine querry', () => {
		const query = `
			query {
				machines {
					id
					name
					image {
						url
					}
				}
			}
		`

		expect(ApolloQuery.props().query).toBe(
			require('@/queries/machines').default
		)

		console.log(ApolloQuery.vm)

		graphql(schema, query).then(result => {
			ApolloQuery.setData(
				result.data
			) /* TODO: Repair / right now it gives no data */
			console.log(ApolloQuery)
			expect(result.data.machines.length).toEqual(2)
			expect(wrapper.element).toMatchSnapshot()
		})
	})
})

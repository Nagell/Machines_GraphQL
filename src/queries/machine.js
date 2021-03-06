import { gql } from 'apollo-boost'

export default gql`
	query machineWithId($id: ID!) {
		machine(where: { id: $id }) {
			id
			name
			image {
				url
			}
			sensors {
				id
				name
			}
			location {
				latitude
				longitude
			}
		}
	}
`

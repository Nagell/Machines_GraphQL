import { gql } from 'apollo-boost'

export default gql`
	query machineWithId($id: ID) {
		machine(where: { id: $id }) {
			id
			name
			sensors {
				id
				name
				data {
					id
					dataTime
					value
				}
			}
		}
	}
`

import { gql } from 'apollo-boost'

export default gql`
	query sensorData($id: ID, $from: DateTime!, $to: DateTime!) {
		machine(where: { id: $id }) {
			id
			name
			sensors {
				id
				name
				data(where: { dataTime_gte: $from, dataTime_lte: $to }) {
					id
					dataTime
					value
				}
			}
		}
	}
`

import { gql } from 'apollo-boost'

export default gql`
	query allMachines {
		machines {
			id
			name
			image {
				url
			}
		}
	}
`

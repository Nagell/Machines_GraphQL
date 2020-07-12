const { makeExecutableSchema } = require('apollo-server')
import resolvers from './mockResolvers'

const schema = `
    scalar DateTime

    type Machine {
        name: String!
        sensors: [Sensor!]
        lastKnownPosition: GPSPosition
    }
    type Sensor {
        name: String!
        machine: Machine!
        data: [SensorDataPoint]
    }
    type GPSPosition {
        latitude: Int!
        longitude: Int!
        machine: Machine!
    }
    type SensorDataPoint {
        timestamp: DateTime!
        value: Float!
        sensor: Sensor!
    }
    type Query {
      	machine: Machine
	    sensorData(id: ID!, from: DateTime!, to: DateTime!): [SensorDataPoint]
	    machines: [Machine!]
    }
    `

export default makeExecutableSchema({
	typeDefs: schema,
	resolvers,
	resolverValidationOptions: {
		requireResolversForResolveType: false,
	},
})

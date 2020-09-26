<template>
	<apollo-query
		:query="require('../queries/sensorData.js').default"
		:variables="{
			id: machineId,
			from: from,
			to: to,
		}"
	>
		<template slot-scope="{ result: { loading, error, data } }">
			<h3 v-if="loading">Loading</h3>
			<h3 v-if="error">Oh No</h3>
			<div v-if="data && data.machine">
				<!-- Chart -->
				<sensors-chart :chart-data="data.machine.sensors" />
			</div>
			<div v-else>Nothing to show</div>
		</template>
	</apollo-query>
</template>

<script>
import SensorsChart from '@/components/SensorsChart'

export default {
	name: 'sensor-data',
	components: { SensorsChart },
	props: {
		machineId: {
			type: String,
			default: '',
			required: false,
		},
		from: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
	},
}
</script>

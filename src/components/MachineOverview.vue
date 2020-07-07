<template>
	<apollo-query
		:query="require('../queries/machine.js').default"
		:variables="{
			id: machineId,
		}"
	>
		<template slot-scope="{ result: { loading, error, data } }">
			<h3 v-if="loading">Loading</h3>
			<h3 v-if="error">Oh No</h3>
			<div v-if="data && data.machine">
				<!-- Data -->
				<v-row align="start" justify="start">
					<v-col xl="5" lg="6" md="8" sm="6" cols="12">
						<v-img
							:src="data.machine.image.url"
							gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
						/>
					</v-col>
					<v-col xl="7" lg="6" md="12" sm="6" cols="12">
						<h3 class="mb-2">Machine position:</h3>
						<ul>
							<li>Latitude: {{ data.machine.location.latitude }}</li>
							<li>Longitude: {{ data.machine.location.longitude }}</li>
						</ul>
						<h3 class="mt-4 mb-2">Sensors:</h3>
						<ul>
							<li :key="sensor.id" v-for="sensor in data.machine.sensors">
								{{ sensor.name }}
							</li>
						</ul>
					</v-col>
				</v-row>
			</div>
			<div v-else>Nothing to show</div>
		</template>
	</apollo-query>
</template>

<script>
export default {
	props: {
		machineId: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>

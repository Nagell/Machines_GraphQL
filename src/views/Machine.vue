<template>
	<div>
		<v-container class="fill-height" fluid>
			<v-row align="center" justify="center">
				<v-col>
					<!-- Title -->
					<h1>{{ $route.params.slug }}</h1>
					<!-- Date pickers -->
					<v-row align="center" justify="center">
						<v-col cols="6" xl="2" lg="3" md="4" sm="5">
							<v-datetime-picker
								v-model="fromDateTime"
								:text-field-props="textFieldProps"
								:time-picker-props="timePickerProps"
							>
								<template slot="dateIcon">
									<v-icon class="mr-4">mdi-calendar-range</v-icon>
									Date
								</template>
								<template slot="timeIcon">
									<v-icon class="mr-4">mdi-clock-outline</v-icon>
									Time
								</template>
							</v-datetime-picker>
							{{ fromDateTime }}
						</v-col>
						<v-col cols="6" xl="2" lg="3" md="4" sm="5">
							<v-datetime-picker
								v-model="toDateTime"
								:text-field-props="textFieldProps"
								:time-picker-props="timePickerProps"
							>
								<template slot="dateIcon">
									<v-icon>mdi-calendar-range</v-icon>
									Date
								</template>
								<template slot="timeIcon">
									<v-icon>mdi-clock-outline</v-icon>
									Time
								</template>
							</v-datetime-picker>
							{{ toDateTime }}
						</v-col>
					</v-row>
					<!-- Machine -->
					<apollo-query
						:query="require('../queries/machine.js').default"
						:variables="{
							id: $route.params.id,
						}"
					>
						<template slot-scope="{ result: { loading, error, data } }">
							<h3 v-if="loading">Loading</h3>
							<h3 v-if="error">Oh No</h3>
							<div v-if="data && data.machine">
								<!-- Data -->
								<img :src="data.machine.image.url" alt="" />
								{{ data }}
							</div>
							<div v-else>Nothing to show</div>
						</template>
					</apollo-query>

					<!-- Sensor Data -->
					<apollo-query
						v-if="fromDateTime !== null && toDateTime !== null"
						:query="require('../queries/sensorData.js').default"
						:variables="{
							id: $route.params.id,
							from: formattedDateTime(fromDateTime),
							to: formattedDateTime(toDateTime),
						}"
					>
						<template slot-scope="{ result: { loading, error, data } }">
							<h3 v-if="loading">Loading</h3>
							<h3 v-if="error">Oh No</h3>
							<div v-if="data && data.machine">
								<!-- Data -->
								<v-row align="center" justify="center">
									<ol v-if="data.machine.sensors">
										<li :key="sensor.id" v-for="sensor in data.machine.sensors">
											<h3>{{ sensor.name }}</h3>
											<ul v-if="sensor.data">
												<li
													:key="dataPoint.id"
													v-for="dataPoint of sensor.data"
												>
													<p>Id: {{ dataPoint.id }}</p>
													<p>DataTime: {{ dataPoint.dataTime }}</p>
													<p>value: {{ dataPoint.value }}</p>
												</li>
											</ul>
										</li>
									</ol>
								</v-row>
							</div>
							<div v-else>Nothing to show</div>
						</template>
					</apollo-query>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	name: 'machine',
	data() {
		return {
			fromDateTime: null,
			toDateTime: null,
			textFieldProps: {
				appendIcon: 'mdi-calendar',
			},
			timePickerProps: {
				useSeconds: false,
				ampmInTitle: false,
				format: '24hr',
			},
		}
	},
	methods: {
		formattedDateTime(dateTime = null) {
			let time = dateTime.getTime(),
				timeZoneOffset = dateTime.getTimezoneOffset() * 60000

			return new Date(time - timeZoneOffset).toJSON()
		},
	},
}
</script>

<template>
	<div>
		<v-container class="fill-height" fluid>
			<v-row align="start" justify="center">
				<!-- Machine Overview -->
				<v-col xl="6" lg="6" md="6" xs="12" cols="12">
					<!-- Title -->
					<h1>{{ $route.params.slug }}</h1>

					<!-- Overview -->
					<machine-overview :machine-id="machineId" />
				</v-col>

				<!-- Date pickers -->
				<v-col xl="6" lg="6" md="6" xs="12" cols="12">
					<v-row align="center" justify="center">
						<v-col xl="3" lg="5" md="5" sm="5" cols="10">
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
						</v-col>
						<v-col xl="3" lg="5" md="5" sm="5" cols="10">
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
						</v-col>
					</v-row>

					<!-- Sensor Data -->
					<v-row align="center" justify="center">
						<v-col xl="10" lg="10" md="10" sm="12" cols="12">
							<sensor-data
								v-if="fromDateTime !== null && toDateTime !== null"
								:machine-id="machineId"
								:from="mx_time_getDateWithoutUTC(fromDateTime)"
								:to="mx_time_getDateWithoutUTC(toDateTime)"
							/>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import MachineOverview from '@/components/MachineOverview'
import SensorData from '@/components/SensorData'

import MixinTime from '@/mixins/time'

export default {
	name: 'machine',
	components: {
		SensorData,
		MachineOverview,
	},
	mixins: [MixinTime],
	data() {
		return {
			fromDateTime: new Date('July 1, 2020 20:00:00'),
			toDateTime: new Date('July 1, 2020 21:00:00'),
			textFieldProps: {
				appendIcon: 'mdi-calendar',
			},
			timePickerProps: {
				useSeconds: false,
				ampmInTitle: false,
				format: '24hr',
			},
			machineId: null,
		}
	},
	beforeMount() {
		this.machineId = this.$route.params.id
			? this.$route.params.id
			: localStorage.getItem('lastMachineId')
	},
}
</script>

<template>
	<div class="small">
		<line-chart :chart-data="compiledData" :options="chartOptions" />
	</div>
</template>

<script>
import LineChart from '@/charts/LineChart'

import MixinTime from '@/mixins/time'
import MixinColor from '@/mixins/color'

export default {
	components: {
		LineChart,
	},
	mixins: [MixinTime, MixinColor],
	props: {
		chartData: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			datacollection: null,
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							type: 'linear',
							ticks: {
								suggestedMin: 0,
							},
						},
					],
					xAxes: [
						{
							type: 'time',
							time: {
								unit: 'hour',
							},
						},
					],
				},
				legend: {
					align: 'start',
					position: 'bottom',
					labels: {
						fontSize: 16,
						padding: 15,
						fontFamily: "'Roboto', sans-serif",
					},
				},
			},
		}
	},
	computed: {
		compiledData() {
			let datasets = [],
				labels = []

			this.chartData.forEach(sensor => {
				let label = sensor.name,
					backgroundColor = '#77' + this.mx_color_randomChannel(150) + 'FF',
					data = []

				sensor.data.forEach(sensorDataPoint => {
					let dateTime = new Date(sensorDataPoint.dataTime)

					dateTime = this.mx_time_getDateWithUTC(dateTime)
					data.push({
						x: dateTime,
						y: sensorDataPoint.value,
					})
					labels.push()
				})

				datasets.push({
					label: label,
					backgroundColor: backgroundColor,
					data: data,
				})
			})
			return {
				labels: labels,
				datasets: datasets,
			}
		},
	},
}
</script>

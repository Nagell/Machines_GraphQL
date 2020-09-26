export default {
	lineChart: {
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
						tooltipFormat: 'YYYY-MM-DD HH:mm',
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
		tooltips: {
			titleFontSize: 14,
			titleFontFamily: "'Roboto', sans-serif",
			bodyFontSize: 14,
			bodyFontFamily: "'Roboto', sans-serif",
			displayColors: false,
			xPadding: 12,
			yPadding: 12,
		},
		elements: {
			line: {
				borderWidth: 0,
			},
		},
	},
}

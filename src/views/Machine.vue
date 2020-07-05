<template>
	<div>
		<apollo-query
			:query="require('../queries/machine.js').default"
			:variables="{ id: $route.params.id }"
		>
			<template slot-scope="{ result: { loading, error, data } }">
				<h3 v-if="loading">Loading</h3>
				<h3 v-if="error">Oh No</h3>
				<div v-if="data && data.machine">
					<h1>
						{{ data.machine.name }}
					</h1>
					<ol v-if="data.machine.sensors">
						<li :key="sensor.id" v-for="sensor in data.machine.sensors">
							<h3>{{ sensor.name }}</h3>
							<ul v-if="sensor.data">
								<li :key="dataPoint.id" v-for="dataPoint of sensor.data">
									<p>Id: {{ dataPoint.id }}</p>
									<p>DataTime: {{ dataPoint.dataTime }}</p>
									<p>value: {{ dataPoint.value }}</p>
								</li>
							</ul>
						</li>
					</ol>
				</div>
				<div v-else>Nothing to show</div>
			</template>
		</apollo-query>
	</div>
</template>

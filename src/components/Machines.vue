<template>
	<v-container class="fill-height" fluid>
		<v-row align="center" justify="center">
			<apollo-query :query="require('../queries/machines.js').default">
				<template slot-scope="{ result: { loading, error, data } }">
					<h3 v-if="loading">Loading</h3>
					<h3 v-if="error">Oh No</h3>
					<div v-if="data">
						<v-flex>
							<v-card
								:key="machine.id"
								v-for="machine in data.machines"
								:to="{
									name: 'Machine',
									params: { id: machine.id, slug: machine.name },
								}"
							>
								<v-img
									:src="machine.image.url"
									class="white--text align-end"
									gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
									height="200px"
								>
									<v-card-title v-text="machine.name" />
								</v-img>
							</v-card>
						</v-flex>
					</div>
					<div v-else>Nothing to show</div>
				</template>
			</apollo-query>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'machines',
	data() {
		return {
			key: 1,
		}
	},
}
</script>

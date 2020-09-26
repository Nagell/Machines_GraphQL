<template>
	<v-container class="fill-height" fluid>
		<v-row align="center" justify="center">
			<apollo-query :query="require('../queries/machines.js').default">
				<template slot-scope="{ result: { loading, error, data } }">
					<h3 v-if="loading">Loading</h3>
					<h3 v-if="error">Oh No</h3>
					<v-col v-if="data" sm="12" cols="12">
						<v-row align="center" justify="center">
							<v-col
								:key="machine.id"
								v-for="machine in data.machines"
								sm="6"
								cols="10"
							>
								<v-card
									:to="{
										name: 'Machine',
										params: { id: machine.id, slug: machine.name },
									}"
								>
									<v-img
										:src="machine.image.url"
										class="white--text align-end"
										gradient="to bottom left, rgba(100,115,201,.33), rgba(25,32,72,.7)"
										height="200px"
									>
										<v-card-title v-text="machine.name" />
									</v-img>
								</v-card>
							</v-col>
						</v-row>
					</v-col>

					<div v-else>Nothing to show</div>
				</template>
			</apollo-query>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'machines',
}
</script>

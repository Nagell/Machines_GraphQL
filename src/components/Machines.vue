<template>
	<apollo-query :query="require('../queries/machines.js').default">
		<template slot-scope="{ result: { loading, error, data } }">
			<h3 v-if="loading">Loading</h3>
			<h3 v-if="error">Oh No</h3>
			<div v-if="data">
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
			</div>
			<div v-else>Nothing to show</div>
		</template>
	</apollo-query>
</template>

<script>
export default {
	name: 'hello-world',
	data() {
		return {
			key: 1,
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>

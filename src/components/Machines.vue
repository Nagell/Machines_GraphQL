<template>
	<div class="hello">
		<h1>Machines</h1>

		<apollo-query :query="require('../queries/machines.js').default">
			<template slot-scope="{ result: { loading, error, data } }">
				<h3 v-if="loading">Loading</h3>
				<h3 v-if="error">Oh No</h3>
				<div v-if="data">
					<router-link
						:key="machine.id"
						v-for="machine in data.machines"
						:to="{
							name: 'Machine',
							params: { id: machine.id, slug: machine.name },
						}"
					>
						{{ machine.name }}
						<!-- <img
							v-if="s.photo && s.photo.url"
							width="100"
							height="100"
							:src="s.photo.url"
							:alt="s.name"
						/> -->
					</router-link>
				</div>
				<div v-else class="empty">No Speakers match your search</div>
			</template>
		</apollo-query>
	</div>
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

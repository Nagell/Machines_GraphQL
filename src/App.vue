<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link to="/">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Machine Viewer</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
		<v-footer color="indigo" app>
			<span class="white--text">
				Machine Viewer &copy; {{ new Date().getFullYear() }}
			</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null,
	}),
}
</script>

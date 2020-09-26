import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
	uri:
		'https://api-eu-central-1.graphcms.com/v2/ckc3rd7q503s801xmbs8q5g7w/master',
})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

export default apolloProvider

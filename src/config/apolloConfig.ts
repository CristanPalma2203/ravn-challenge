import { ApolloClient, InMemoryCache, InMemoryCacheConfig } from "@apollo/client";

const inMemoryCacheConfig: InMemoryCacheConfig = {
	typePolicies: {
		Query: {
			fields: {
				tasks: {
					merge: (_existing, incoming) => {
						return incoming;
					},
				},
			},
		},
	},
};

const apolloClient = new ApolloClient({
	uri: import.meta.env.VITE_API_URL,
	cache: new InMemoryCache(inMemoryCacheConfig),
	headers: {
		authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
	},
});

export { apolloClient };

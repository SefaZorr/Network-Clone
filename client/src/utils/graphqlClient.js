import { ApolloClient, InMemoryCache } from "@apollo/client";

export const gqlClient = new ApolloClient({
    uri: 'https://us-central1-networkclone2.cloudfunctions.net/graphql',
    cache: new InMemoryCache()
  });

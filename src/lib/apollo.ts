import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q8b80s3mey01w7dvio39co/master',
  cache: new InMemoryCache(),
})

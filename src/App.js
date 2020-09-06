import React from 'react'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import client from './client'

const ME = gql`
  query me {
    user(login: "ryokatsuse") {
      name
      avatarUrl
    }
  }
`

function App() {
  return (
    <ApolloProvider client={client} >
    <div>
      <p>hello</p>
      <Query query={ME}>
        {
          ({loading, error, data}) => {
            if(loading) return 'Loading...'
            if(error) return `Error! ${error}`

            return <img src={data.user.avatarUrl} />
          }
        }
      </Query>
    </div>
    </ApolloProvider>
  );
}

export default App

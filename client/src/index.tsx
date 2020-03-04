import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"

import "./i18n"
import Root from "./Root"
import * as serviceWorker from "./serviceWorker"

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/",
    /*fetchOptions: {
      credentials: "include"
    },
    request: operation => {
      const token = localStorage.getItem("authToken") || "" 
      operation.setContext({
        headers: {
          Authorization: `JWT ${token}`
        }
      });
    },
    clientState: {
      defaults : {
        isLoggedIn: !!localStorage.getItem("authToken")
      }
    }*/
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>, 
  document.getElementById("root")
)

serviceWorker.unregister()

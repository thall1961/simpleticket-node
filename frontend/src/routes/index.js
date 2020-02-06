import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Events from "../components/Events";
import EventForm from "../components/EventForm";
import Settings from "../components/Settings";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={Events} />
      <Route path="/events" component={Events} />
      <Route path="/new-event" component={EventForm} />
      <Route path="/settings" component={Settings} />
    </Router>
  </ApolloProvider>
);

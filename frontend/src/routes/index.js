import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Events from "../components/Events";
import EventForm from "../components/EventForm";
import Settings from "../components/Settings";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Events} />
        <Route path="/events" component={Events} />
        <Route path="/new-event" component={EventForm} />
        <Route path="/settings" component={Settings} />
      </div>
      <Footer />
    </Router>
  </ApolloProvider>
);

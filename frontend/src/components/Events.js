import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Navbar from "./shared/Navbar";

function Events() {
  const { loading, error, data } = useQuery(gql`
    {
      events {
        id
        name
      }
    }
  `);

  return (
    <div className="container">
      <Navbar />
      <h2>Events</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Something happened: {error.message}</p>}
      {data && (
        <pre>
          {data.events.map(event => (
            <p key={event.id}>{event.name}</p>
          ))}
        </pre>
      )}
    </div>
  );
}

export default Events;

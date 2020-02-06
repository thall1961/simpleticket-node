import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

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
    <>
      <h2 className="h5 text-uppercase">Events</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Something happened: {error.message}</p>}
      {data && (
        <pre>
          {data.events.map(event => (
            <p key={event.id}>{event.name}</p>
          ))}
        </pre>
      )}
      <Link
        to="/new-event"
        className="mt-3 btn btn-primary btn-sm text-uppercase"
      >
        New Event
      </Link>
      </>
  );
}

export default Events;

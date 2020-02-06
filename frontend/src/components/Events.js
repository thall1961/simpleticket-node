import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

import Navbar from "./shared/Navbar";

const linkStyles = {
  padding: "5px 7px",
  background: "#f66000",
  color: "white",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "bolder",
  borderRadius: "1px",
  border: "1px solid #f66000",
  marginTop: "2rem"
};

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
      <Link to="/new-event" style={linkStyles}>
        New Event
      </Link>
    </div>
  );
}

export default Events;

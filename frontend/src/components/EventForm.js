import React from "react";

function EventForm(props) {
  return (
    <>
      <h2 className="h5 text-uppercase">New Event</h2>
      <form action="" className="col-12 col-md-8 col-lg-6 px-md-0">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="submit"
            className="btn btn-primary text-uppercase"
            value="Create Event"
          />
        </div>
      </form>
    </>
  );
}

export default EventForm;

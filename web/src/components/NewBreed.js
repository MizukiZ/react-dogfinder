import React, { Fragment } from "react";
import {} from "react-bootstrap";

import { Redirect } from "react-router-dom";

function NewBreed({ onSubmit, createSuccess, error }) {
  return (
    <Fragment>
      <h1>Add New Breed</h1>
      <form
        className="container"
        onSubmit={event => {
          event.preventDefault();
          const image = event.target.image.value;
          const name = event.target.name.value;
          const description = event.target.description.value;

          onSubmit({ image, name, description });
        }}
      >
        <input
          type="text"
          placeholder="Image url"
          className="form-control"
          name="image"
        />
        <input
          type="text"
          placeholder="name"
          className="form-control"
          name="name"
        />
        <textarea
          rows="4"
          cols="50"
          name="description"
          className="form-control"
          placeholder="description"
        />
        <button className="btn btn-primary">Add</button>
      </form>
      {createSuccess && <Redirect to="/" />}
    </Fragment>
  );
}

export default NewBreed;

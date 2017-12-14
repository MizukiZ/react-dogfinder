import React, { Fragment } from "react";
import {} from "react-bootstrap";

import { Redirect } from "react-router-dom";

function EditBreed({ breeds, id, onSubmit, updateSuccess }) {
  return (
    <Fragment>
      {breeds.map(breed => {
        if (breed._id === id) {
          return (
            <form
              onSubmit={event => {
                event.preventDefault();
                const image = event.target.image.value;
                const name = event.target.name.value;
                const description = event.target.description.value;

                onSubmit(breed._id, { image, name, description });
              }}
            >
              <img src={breed.image} />
              <p>Image url</p>
              <input
                type="text"
                placeholder="Image url"
                className="form-control"
                name="image"
                defaultValue={breed.image}
              />
              <p>name</p>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
                defaultValue={breed.name}
              />
              <p>Description</p>
              <textarea
                rows="4"
                cols="50"
                name="description"
                className="form-control"
                placeholder="description"
                defaultValue={breed.description}
              />
              <button className="btn btn-warning">Edit</button>
            </form>
          );
        }
      })}
      {updateSuccess && <Redirect to={`/breeds/${id}`} />}
    </Fragment>
  );
}

export default EditBreed;

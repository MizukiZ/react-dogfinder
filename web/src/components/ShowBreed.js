import React from "react";
import { Link, Redirect } from "react-router-dom";

function ShowBreed({
  match,
  breeds,
  deleteSuccess,
  confirmAlert,
  deleteConfirm
}) {
  const id = match.params.id;
  return (
    <div className="container text-center">
      {breeds.map(breed => {
        if (breed._id === id) {
          return (
            <div className="container">
              <h1>{breed.name}</h1>
              <img src={breed.image} />
              <h3>description</h3>
              <p>{breed.description}</p>
              <Link to={`/breeds/${breed._id}/edit`}>
                <button className="btn btn-primary">Edit</button>
              </Link>

              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteConfirm(breed._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        }
      })}
      {deleteSuccess && <Redirect to="/" />}
    </div>
  );
}

export default ShowBreed;

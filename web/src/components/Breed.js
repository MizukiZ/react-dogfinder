import React from "react";
import { Row, Col, Thumbnail } from "react-bootstrap";
import { Link } from "react-router-dom";

function Breed({ breeds }) {
  return (
    <div className="container-fluid">
      <Row className="text-center">
        <h1>Breeds List</h1>
      </Row>
      <Row>
        {breeds.map(breed => {
          return (
            <Link to={`/breeds/${breed._id}`}>
              <Col xs={4}>
                <Thumbnail src={breed.image} className="text-center">
                  <h3>{breed.name}</h3>
                </Thumbnail>
              </Col>
            </Link>
          );
        })}
      </Row>
    </div>
  );
}

export default Breed;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const RobotModal = ({ show, handleClose, robo }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="bg-modal-title">
          <img
            src={`https://robohash.org/${robo.name}.png`}
            alt={robo.name}
            className="img-modal"
          />
          <span className="titre-modal">{robo.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-modal-body">
        <ListGroup>
          <ListGroup.Item>
            <strong>Name</strong> : {robo.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Username</strong> : {robo.username}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>email</strong> : {robo.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone</strong> : {robo.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Website</strong> : <a href="#">{robo.website}</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Company name</strong> : {robo.company.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>City</strong> : {robo.address.city}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Street</strong> : {robo.address.street}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>


      </Modal.Footer>
    </Modal>
  );
};

export default RobotModal;

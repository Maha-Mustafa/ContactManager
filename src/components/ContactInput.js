import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class ContactInput extends React.Component {
  render() {
    const { handleChange, name, email, handleSubmit, editContact } = this.props;
    return (
      <div className="card card-body my-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className={
              editContact
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editContact ? "UpdateContact" : "ADD NEW"}
          </Button>
        </Form>
      </div>
    );
  }
}

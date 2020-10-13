import React from "react";

export default class ContactItem extends React.Component {
  render() {
    const { name, email, handleDelete, handleEdit, date } = this.props;
    return (
      <div>
        <li className="list-group-item  d-flex justify-content-between my-2">
          <h6>
            Name: {name}
            <br />
            Email: {email}
            <br />
            Created at: {date}
          </h6>
          <div className="contact-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

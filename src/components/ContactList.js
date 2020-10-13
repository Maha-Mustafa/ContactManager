import React from "react";
import ContactItem from "./ContactItem";
export default class ContactList extends React.Component {
  render() {
    const { contacts, handleDelete, handleEdit, clearList, date } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-uppercase text-center">Contact list</h3>
          {contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                name={contact.name}
                email={contact.email}
                date={date}
                handleDelete={() => handleDelete(contact.id)}
                handleEdit={() => handleEdit(contact.id)}
              />
            );
          })}
          <button
            onClick={clearList}
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

import React from "react";
import ContactInput from "./ContactInput";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
export default class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      date: "",
      id: uuidv4(),
      contacts: [],
      editContact: false
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      date: this.state.date
    };
    // console.log(newItems);
    const updatedContacts = [...this.state.contacts, newItems];
    this.setState({
      contacts: updatedContacts,
      name: "",
      email: "",
      date: new Date().toDateString(),
      id: uuidv4(),
      editContact: false
    });
  };

  clearList = () => {
    this.setState({
      contacts: []
    });
  };
  handleDelete = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: filteredContacts
    });
  };
  handleEdit = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    const selectedItem = this.state.contacts.find(
      (contact) => contact.id === id
    );
    // console.log(selectedItem);
    this.setState({
      contacts: filteredContacts,
      name: selectedItem.name,
      email: selectedItem.email,
      editContact: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Contact Manager</h3>
            <ContactInput
              name={this.state.name}
              email={this.state.email}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editContact={this.state.editContact}
            />
            <ContactList
              contacts={this.state.contacts}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
              date={this.state.date}
            />
          </div>
        </div>
      </div>
    );
  }
}

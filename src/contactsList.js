import React, { Component } from 'react';
import './App.css';

class contactsList extends Component {
  render() {
    return (
        <div>
        <ul>
        {this.props.contacts}.map((contact) => {
            return <Contact contact={contact} key= {
                contact.id} />
            }
        })
        
        </ul>
        </div>
    );
  }
}

export default contactsList;
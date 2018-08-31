import React, { Component } from 'react';
import './App.css';
import contactsList from './contactsList';

class contacts extends Component {
  state = {
    contacts: []
}

  render() {
    return (
      <div>
          <contactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default contacts;
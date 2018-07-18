import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (<header>
      <h2>CT Local</h2>

      <button>Add a process <i className="material-icons">add</i></button>
    </header>);
  }
}

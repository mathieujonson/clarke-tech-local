import React, { Component } from 'react'

export default class Add extends Component {
  render() {
    return (
      <div className="add-container">
        <label>Name:</label>
        <input type="text" placeholder="Dashboard Client"/>
        <label>Command:</label>
        <input type="text" placeholder="npm start"/>
        <label>Directory:</label>
        <input type="text" placeholder="~/development/thelios-data/dashboard/client"/>
        <button>
          Add Process
        </button>
      </div>
    )
  }
}

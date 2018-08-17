import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class List extends Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <i className="material-icons">list</i>List
        </Link>
        <Link to="/add">
          <i className="material-icons">add</i>Add
        </Link>
      </footer>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Card extends Component {
  componentWillMount() {
    this.setState({ showDetails: false })
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen() {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    return (
      <li className="process-card">
        <div className="name-container">
          <span className="detail-label">Name:</span> <br />
          {this.props.process.name}
        </div>
        <div className="action-container">
          <i className="material-icons" onClick={this.toggleOpen}>
            {this.state.showDetails
              ? 'keyboard_arrow_up'
              : 'keyboard_arrow_down'}
          </i>
        </div>
        <div
          className={`details-container${
            this.state.showDetails ? ' open' : ''
          }`}
        >
          <div className="command-container">
            <span className="detail-label">Command:</span> <br />
            {this.props.process.command}
          </div>
          <div className="directory-container">
            <span className="detail-label">Directory:</span> <br />
            {this.props.process.directory}
          </div>
        </div>
      </li>
    )
  }
}

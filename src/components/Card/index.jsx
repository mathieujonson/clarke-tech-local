import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/process.actions.js'
import Toggle from 'react-toggle'

export class Card extends Component {
  componentWillMount() {
    this.setState({ showDetails: false, isRunning: false })
    this.toggleOpen = this.toggleOpen.bind(this)
    this.removeProcess = this.removeProcess.bind(this)
    this.handleRunningChange = this.handleRunningChange.bind(this)
  }

  toggleOpen() {
    this.setState({ showDetails: !this.state.showDetails })
  }

  removeProcess() {
    this.props.removeProcess(this.props.process.name)
  }

  handleRunningChange() {
    this.props.updateRunning(this.props.process)
  }

  render() {
    return (
      <li className="process-card">
        <div className="name-container">
          <span className="detail-label">Name:</span> <br />
          {this.props.process.name}
        </div>
        <div className="action-container">
          <label>
            <Toggle
              defaultChecked={this.props.process.isRunning}
              onChange={this.handleRunningChange}
            />
          </label>
          <i className="material-icons" onClick={this.removeProcess}>
            delete_outline
          </i>
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

const mapStateToProps = state => {
  return {
    processes: state.processes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeProcess: actions.removeProcess,
      updateRunning: actions.updateRunning
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)

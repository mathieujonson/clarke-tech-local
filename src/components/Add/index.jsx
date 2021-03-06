import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/process.actions'

export class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      command: '',
      directory: '',
      errorMessage: '',
      successMessage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    if (!this.state.name || !this.state.command || !this.state.directory) {
      this.setState({ errorMessage: 'Complete the form, yo!' })
    } else {
      this.props.saveProcess({
        name: this.state.name,
        command: this.state.command,
        directory: this.state.directory
      })
      this.setState({
        name: '',
        command: '',
        directory: '',
        successMessage: 'You did it, yo!'
      })
    }
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ errorMessage: '' })
    this.setState({ successMessage: '' })
    this.setState({
      [name]: value
    })
  }

  renderErrorMessage() {
    return this.state.errorMessage ? (
      <span className="error">{this.state.errorMessage}</span>
    ) : null
  }

  renderSuccessMessage() {
    return this.state.successMessage ? (
      <span className="success">{this.state.successMessage}</span>
    ) : null
  }

  render() {
    return (
      <div className="add-container">
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Dashboard Client"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Command:</label>
          <input
            type="text"
            placeholder="npm start"
            name="command"
            onChange={this.handleChange}
            value={this.state.command}
          />
          <label>Directory:</label>
          <input
            type="text"
            placeholder="~/development/thelios-data/dashboard/client"
            name="directory"
            onChange={this.handleChange}
            value={this.state.directory}
          />
          <button>Add Process</button>
          {this.renderErrorMessage()}
          {this.renderSuccessMessage()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveProcess: actions.saveProcess
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

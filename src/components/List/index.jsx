import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/process.actions.js'

export class List extends Component {
  componentWillMount() {
    this.props.loadProcesses()
  }

  renderProcesses() {
    return this.props.processes.map(process => {
      return <li className="process-card">{ process.name }</li>
    })
  }

  render() {
    return (
      <ul className="process-list">
        {this.renderProcesses()}
      </ul>
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
      loadProcesses: actions.loadProcesses
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

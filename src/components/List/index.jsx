import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/process.actions.js'

export class List extends Component {
  componentWillMount() {
    this.props.loadProcesses();
  }

  render() {
    return (
      <ul className="process-list">
        <li>Here</li>
        <li>is</li>
        <li>the</li>
        <li>list</li>
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

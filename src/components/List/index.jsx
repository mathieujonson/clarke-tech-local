import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../Card'
import * as actions from '../../actions/process.actions.js'

export class List extends Component {
  componentWillMount() {
    this.props.loadProcesses()
  }

  render() {
    return (
      <ul className="process-list">
        {this.props.processes.map((process, index) => {
          return <Card process={process} key={`${process.name}-${index}`} />
        })}
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

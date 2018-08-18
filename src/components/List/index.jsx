import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../Card'
import * as actions from '../../actions/process.actions.js'

export class List extends Component {
  componentWillMount() {
    this.props.loadProcesses()
  }

  renderCards() {
    console.log("renderCards")
    if(this.props.processes.length) {
      return this.props.processes.map((process, index) => {
        return <Card process={process} key={`${process.name}-${index}`} />
      })
    }
    else {
      return (<li>There are no processes to view.</li>)
    }
  }

  render() {
    return (
      <ul className="process-list">
        {this.renderCards()}
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

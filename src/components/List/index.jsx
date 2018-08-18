import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../Card'
import * as actions from '../../actions/process.actions.js'

export class List extends Component {
  componentWillMount() {
    if (!this.props.processes.length) {
      this.props.loadProcesses()
    }
  }

  renderCards() {
    if (this.props.processes.length) {
      let sortedProcesses = this.props.processes
      sortedProcesses.sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase()
      })
      return sortedProcesses.map((process, index) => {
        return <Card process={process} key={`${process.name}-${index}`} />
      })
    } else {
      return <li>There are no processes to view.</li>
    }
  }

  render() {
    return <ul className="process-list">{this.renderCards()}</ul>
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

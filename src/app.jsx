import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="content-container">
        <Header />
        <Switch>
          <Route path="/add" component={Add} />
          <Route path="/" component={List} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div className="content-container">
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}

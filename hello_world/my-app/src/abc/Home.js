import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Content from './Content'
import BTtest from './BTtest'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
        <BTtest/>


      </div>
    )
  }
}

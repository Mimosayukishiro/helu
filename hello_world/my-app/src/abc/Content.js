import React, { Component } from 'react'
import Details from './Content/Details'
import Menu from './Content/Menu'

export default class content extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row text-center'>
            <div className='col-12'>
                <p>Slogan</p>
            </div>            
        </div>
        <div className='row'>
            <div className='col-3 bg-primary text-white' >
                <Menu/>
            </div>
            <div className='col-9 bg-primary text-white'>
                <Details/>
            </div>
        </div>
        



      </div>
    )
  }
}

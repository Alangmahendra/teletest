import React, { Component } from 'react'
import Calling from '../components/Calling'

export default class Call extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="gradient">
        <Calling credentials={this.props.credentials}/>
      </div>
    )
  }
}

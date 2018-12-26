import React, { Component } from 'react'
import './style.css'

export default class Background extends Component {
  render() {
    return (
      <div className={`bg ${this.props.className}`}></div>
    )
  }
}

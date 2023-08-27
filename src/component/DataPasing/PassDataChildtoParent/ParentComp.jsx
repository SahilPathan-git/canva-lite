import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {

    getDataChild(value){
        alert(`${value}`)
    }

  render() {
    return (
      <div><h1>Parent Component</h1>
      <div><ChildComp parentData={this.getDataChild}/></div>
      </div>
    )
  }
}

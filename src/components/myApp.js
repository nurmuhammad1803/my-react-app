import react from 'react'
import React, {
  PureComponent
} from 'react';
import {
  UncontrolledAlert
} from 'reactstrap'

class MyApp extends react.Component {
  render() {
    return ( 
      <UncontrolledAlert color = "info" >
      I am an alert and I can be dismissed! </UncontrolledAlert>
    )
  }
}
export default MyApp;
import React, { Component } from "react"
import Form from "./Form"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <Form.Container >

          <Form.Step title="one">
            <h1>First Step</h1>
          </Form.Step>

          <Form.Step title="two">
            <h1>Second Step</h1>
          </Form.Step>

          <Form.Step title="three">
            <h1>third Step</h1>
          </Form.Step>

        </Form.Container >
      </div>
    )
  }
}

export default App

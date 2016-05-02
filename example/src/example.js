import React from "react"
import ReactDOM from "react-dom"
import {
  Base,
} from "react-minions"

const App = () => (
  <div>
    <Base
      m={0}
      p={2}
      unit="rem"
    >Test</Base>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

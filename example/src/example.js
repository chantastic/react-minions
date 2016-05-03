import React from "react"
import ReactDOM from "react-dom"
import {
  Base,
} from "react-minions"

const styleProps = {
  m: {
    mn: 0,
    xs: .25,
    sm: .5,
    md: .75,
    lg: 1,
    xl: 2,
  },
  p: {
    mn: 0,
    xs: .25,
    sm: .5,
    md: .75,
    lg: 1,
    xl: 2,
  },
  unit: "rem",
}

const App = () => (
  <div>
    <Base {...styleProps}>Test</Base>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

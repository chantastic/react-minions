/* eslint-disable react/prop-types */

import React, { Component } from "react"
import mx from "./minionClassNames"

const Minionize = Composed => class Minionize extends Component {
  render () {
    const {
      className,
      minions,
      ...props,
    } = this.props

    return (
      <Composed
        className={mx(minions, className)}
        {...props}
      />
    )
  }
}

export default Minionize

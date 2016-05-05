/* eslint-disable react/prop-types */

import React, { createClass } from "react"
import mx from "./minionClassNames"

const Minionize = Composed => createClass({
  displayName: "Minionize",

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
  },
})

export default Minionize

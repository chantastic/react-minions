/* eslint-disable react/prop-types */

import React, { createClass } from "react"
import mx from "./minionClassNames"

const Minionize = Composed => createClass({
  displayName: "Minionize",

  render () {
    const {
      className,
      ...props,
    } = this.props

    return (
      <Composed
        className={mx(className)}
        {...props}
      />
    )
  },
})

export default Minionize

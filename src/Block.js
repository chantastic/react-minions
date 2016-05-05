import React from "react"
import Base from "./Base"

function getStyles (style) {
  return {
    ...style,
    display: "block",
  }
}

function getProps ({
  style,
  ...props,
}) {
  return {
    tagName: "div",
    ...props,
    componentClassName: "Block",
    style: getStyles(style),
  }
}

const Block = (props) => <Base {...getProps(props)} />

export default Block

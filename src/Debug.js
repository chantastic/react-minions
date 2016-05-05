import React from "react"
import Base from "./Base"
import mx from "./minionClassNames"

function getStyles (style) {
  return {
    ...style,
    display: "debug",
  }
}

function getProps ({
  style,
  ...props,
}) {
  return {
    tagName: "div",
    ...props,
    componentClassName: "Debug",
    style: getStyles(style),
  }
}

const DataSection = ({
  data,
  title,
  ...props,
}) => (

  <section className="mb-1r bbw-1p bc-l.9">
    <strong>{title}</strong>
    <pre className="p-1 gc-l.9 bs-3p">
      <code>
      {typeof data === "object" ? (
        JSON.stringify(data, null, 2)
      ) : (
        data
      )}
      </code>
    </pre>
  </section>
)

const Debug = props => {
  const {
    className,
    minions,
  } = props

  return (
    <Base>
      <h3>DEBUG</h3>

      <DataSection
        title="props"
        data={props}
      />

      <DataSection
        title="minions resolved className"
        data={mx(minions, className)}
      />
    </Base>
  )
}

export default Debug

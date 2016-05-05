import React, { PropTypes } from "react"
import classNames from "classnames"
import mx from "./minionClassNames"

const getClassName = (className, other) => {
  return classNames(
    other,
    mx(className),
  )
}

const Base = ({
  className,
  componentClassName,
  tagName,
  ...props,
}) => {
  const TagName = tagName || "div"

  return <TagName {...props} className={getClassName(className, componentClassName)} />
}

Base.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      mn: PropTypes.string,
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string,
    }),
  ]).isRequired,
  componentClassName: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
}

Base.defaultProps = {
  className: "",
  componentClassName: "Base",
  tagName: "div",
}

export default Base

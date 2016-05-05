import React, { PropTypes } from "react"
import mx from "./minionClassNames"

const Base = ({
  className,
  componentClassName,
  minions,
  tagName,
  ...props,
}) => {
  const TagName = tagName || "div"

  return <TagName {...props} className={mx(minions, componentClassName, className)} />
}

Base.propTypes = {
  className: PropTypes.string.isRequired,
  componentClassName: PropTypes.string.isRequired,
  minions: PropTypes.oneOfType([
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
  tagName: PropTypes.string.isRequired,
}

Base.defaultProps = {
  className: "",
  componentClassName: "Base",
  minions: "",
  tagName: "div",
}

export default Base

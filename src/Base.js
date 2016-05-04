import React, { PropTypes } from "react"
import classNames from "classnames"

const Base = ({
  tagName,
  className,
    ...props,
}) => {
  const TagName = tagName || "div"
  const classes = classNames(
    typeof className === "string" && className,
    typeof className === "object" && typeof className.mn === "string" && className.mn.split(" ").map(c => `${c}@mn`).join(" "),
    typeof className === "object" && typeof className.xs === "string" && className.xs.split(" ").map(c => `${c}@xs`).join(" "),
    typeof className === "object" && typeof className.sm === "string" && className.sm.split(" ").map(c => `${c}@sm`).join(" "),
    typeof className === "object" && typeof className.md === "string" && className.md.split(" ").map(c => `${c}@md`).join(" "),
    typeof className === "object" && typeof className.lg === "string" && className.lg.split(" ").map(c => `${c}@lg`).join(" "),
    typeof className === "object" && typeof className.xl === "string" && className.xl.split(" ").map(c => `${c}@xl`).join(" "),
  )

  return <TagName {...props} className={classes} />
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
  tagName: PropTypes.string.isRequired,
}

Base.defaultProps = {
  className: "",
  tagName: "div",
}

export default Base

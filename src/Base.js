import React, { PropTypes } from "react"

const MEASUREMENTS = PropTypes.oneOf([0,.25,.5,.75,1,2,3,4])
const UNITS = PropTypes.oneOf(["px", "em", "rem", "p", "e", "r"])

const getUnitShorthand = (u) => u.slice(0,1)

const Base = ({
  m, my, mx, mt, mr, mb, ml,
  p, py, px, pt, pr, pb, pl,
  unit,
  className,
    ...props,
}) => {
  const classes = [
    className,
    typeof m  === "number" && `m-${m}${getUnitShorthand(unit)}`,
    typeof my === "number" && `my-${my}${getUnitShorthand(unit)}`,
    typeof mx === "number" && `mx-${mx}${getUnitShorthand(unit)}`,
    typeof mt === "number" && `mt-${mt}${getUnitShorthand(unit)}`,
    typeof mr === "number" && `mr-${mr}${getUnitShorthand(unit)}`,
    typeof mb === "number" && `mb-${mb}${getUnitShorthand(unit)}`,
    typeof ml === "number" && `ml-${ml}${getUnitShorthand(unit)}`,
    typeof p  === "number" && `p-${p}${getUnitShorthand(unit)}`,
    typeof py === "number" && `py-${py}${getUnitShorthand(unit)}`,
    typeof px === "number" && `px-${px}${getUnitShorthand(unit)}`,
    typeof pt === "number" && `pt-${pt}${getUnitShorthand(unit)}`,
    typeof pr === "number" && `pr-${pr}${getUnitShorthand(unit)}`,
    typeof pb === "number" && `pb-${pb}${getUnitShorthand(unit)}`,
    typeof pl === "number" && `pl-${pl}${getUnitShorthand(unit)}`,
  ].filter(i => i !== false).join(" ")

  return <div {...props} className={classes} />
}

/*eslint-disable react/sort-prop-types */
Base.propTypes = {
  className: React.PropTypes.string.isRequired,
  m:  MEASUREMENTS,
  my: MEASUREMENTS,
  mx: MEASUREMENTS,
  mt: MEASUREMENTS,
  mr: MEASUREMENTS,
  mb: MEASUREMENTS,
  ml: MEASUREMENTS,
  p:  MEASUREMENTS,
  py: MEASUREMENTS,
  px: MEASUREMENTS,
  pt: MEASUREMENTS,
  pr: MEASUREMENTS,
  pb: MEASUREMENTS,
  pl: MEASUREMENTS,
  unit: UNITS.isRequired,
}
/*eslint-enable react/sort-prop-types */

Base.defaultProps = {
  className: "",
  unit: "em",
}

export default Base

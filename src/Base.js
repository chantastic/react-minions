import React, { PropTypes } from "react"
import classNames from "classnames"

const getUnitShorthand = (u) => u.slice(0,1)

const Base = ({
  m, my, mx, mt, mr, mb, ml,
  p, py, px, pt, pr, pb, pl,
  unit,
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

    typeof m                             === "number" && `m-${m}${getUnitShorthand(unit)}`,
    typeof m === "object" && typeof m.mn === "number" && `m-${m.mn}${getUnitShorthand(unit)}@mn`,
    typeof m === "object" && typeof m.xs === "number" && `m-${m.xs}${getUnitShorthand(unit)}@xs`,
    typeof m === "object" && typeof m.sm === "number" && `m-${m.sm}${getUnitShorthand(unit)}@sm`,
    typeof m === "object" && typeof m.md === "number" && `m-${m.md}${getUnitShorthand(unit)}@md`,
    typeof m === "object" && typeof m.lg === "number" && `m-${m.lg}${getUnitShorthand(unit)}@lg`,
    typeof m === "object" && typeof m.xl === "number" && `m-${m.xl}${getUnitShorthand(unit)}@xl`,

    typeof my                              === "number" && `my-${my}${getUnitShorthand(unit)}`,
    typeof my === "object" && typeof my.mn === "number" && `my-${my.mn}${getUnitShorthand(unit)}@mn`,
    typeof my === "object" && typeof my.xs === "number" && `my-${my.xs}${getUnitShorthand(unit)}@xs`,
    typeof my === "object" && typeof my.sm === "number" && `my-${my.sm}${getUnitShorthand(unit)}@sm`,
    typeof my === "object" && typeof my.md === "number" && `my-${my.md}${getUnitShorthand(unit)}@md`,
    typeof my === "object" && typeof my.lg === "number" && `my-${my.lg}${getUnitShorthand(unit)}@lg`,
    typeof my === "object" && typeof my.xl === "number" && `my-${my.xl}${getUnitShorthand(unit)}@xl`,

    typeof mx                              === "number" && `mx-${mx}${getUnitShorthand(unit)}`,
    typeof mx === "object" && typeof mx.mn === "number" && `mx-${mx.mn}${getUnitShorthand(unit)}@mn`,
    typeof mx === "object" && typeof mx.xs === "number" && `mx-${mx.xs}${getUnitShorthand(unit)}@xs`,
    typeof mx === "object" && typeof mx.sm === "number" && `mx-${mx.sm}${getUnitShorthand(unit)}@sm`,
    typeof mx === "object" && typeof mx.md === "number" && `mx-${mx.md}${getUnitShorthand(unit)}@md`,
    typeof mx === "object" && typeof mx.lg === "number" && `mx-${mx.lg}${getUnitShorthand(unit)}@lg`,
    typeof mx === "object" && typeof mx.xl === "number" && `mx-${mx.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              mt === "number" && `mt-${mt}${getUnitShorthand(unit)}`,
    typeof mt === "object" && typeof mt.mn === "number" && `mt-${mt.mn}${getUnitShorthand(unit)}@mn`,
    typeof mt === "object" && typeof mt.xs === "number" && `mt-${mt.xs}${getUnitShorthand(unit)}@xs`,
    typeof mt === "object" && typeof mt.sm === "number" && `mt-${mt.sm}${getUnitShorthand(unit)}@sm`,
    typeof mt === "object" && typeof mt.md === "number" && `mt-${mt.md}${getUnitShorthand(unit)}@md`,
    typeof mt === "object" && typeof mt.lg === "number" && `mt-${mt.lg}${getUnitShorthand(unit)}@lg`,
    typeof mt === "object" && typeof mt.xl === "number" && `mt-${mt.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              mr === "number" && `mr-${mr}${getUnitShorthand(unit)}`,
    typeof mr === "object" && typeof mr.mn === "number" && `mr-${mr.mn}${getUnitShorthand(unit)}@mn`,
    typeof mr === "object" && typeof mr.xs === "number" && `mr-${mr.xs}${getUnitShorthand(unit)}@xs`,
    typeof mr === "object" && typeof mr.sm === "number" && `mr-${mr.sm}${getUnitShorthand(unit)}@sm`,
    typeof mr === "object" && typeof mr.md === "number" && `mr-${mr.md}${getUnitShorthand(unit)}@md`,
    typeof mr === "object" && typeof mr.lg === "number" && `mr-${mr.lg}${getUnitShorthand(unit)}@lg`,
    typeof mr === "object" && typeof mr.xl === "number" && `mr-${mr.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              mb === "number" && `mb-${mb}${getUnitShorthand(unit)}`,
    typeof mb === "object" && typeof mb.mn === "number" && `mb-${mb.mn}${getUnitShorthand(unit)}@mn`,
    typeof mb === "object" && typeof mb.xs === "number" && `mb-${mb.xs}${getUnitShorthand(unit)}@xs`,
    typeof mb === "object" && typeof mb.sm === "number" && `mb-${mb.sm}${getUnitShorthand(unit)}@sm`,
    typeof mb === "object" && typeof mb.md === "number" && `mb-${mb.md}${getUnitShorthand(unit)}@md`,
    typeof mb === "object" && typeof mb.lg === "number" && `mb-${mb.lg}${getUnitShorthand(unit)}@lg`,
    typeof mb === "object" && typeof mb.xl === "number" && `mb-${mb.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              ml === "number" && `ml-${ml}${getUnitShorthand(unit)}`,
    typeof ml === "object" && typeof ml.mn === "number" && `ml-${ml.mn}${getUnitShorthand(unit)}@mn`,
    typeof ml === "object" && typeof ml.xs === "number" && `ml-${ml.xs}${getUnitShorthand(unit)}@xs`,
    typeof ml === "object" && typeof ml.sm === "number" && `ml-${ml.sm}${getUnitShorthand(unit)}@sm`,
    typeof ml === "object" && typeof ml.md === "number" && `ml-${ml.md}${getUnitShorthand(unit)}@md`,
    typeof ml === "object" && typeof ml.lg === "number" && `ml-${ml.lg}${getUnitShorthand(unit)}@lg`,
    typeof ml === "object" && typeof ml.xl === "number" && `ml-${ml.xl}${getUnitShorthand(unit)}@xl`,

    typeof                            p  === "number" && `p-${p}${getUnitShorthand(unit)}`,
    typeof p === "object" && typeof p.mn === "number" && `p-${p.mn}${getUnitShorthand(unit)}@mn`,
    typeof p === "object" && typeof p.xs === "number" && `p-${p.xs}${getUnitShorthand(unit)}@xs`,
    typeof p === "object" && typeof p.sm === "number" && `p-${p.sm}${getUnitShorthand(unit)}@sm`,
    typeof p === "object" && typeof p.md === "number" && `p-${p.md}${getUnitShorthand(unit)}@md`,
    typeof p === "object" && typeof p.lg === "number" && `p-${p.lg}${getUnitShorthand(unit)}@lg`,
    typeof p === "object" && typeof p.xl === "number" && `p-${p.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              py === "number" && `py-${py}${getUnitShorthand(unit)}`,
    typeof py === "object" && typeof py.mn === "number" && `py-${py.mn}${getUnitShorthand(unit)}@mn`,
    typeof py === "object" && typeof py.xs === "number" && `py-${py.xs}${getUnitShorthand(unit)}@xs`,
    typeof py === "object" && typeof py.sm === "number" && `py-${py.sm}${getUnitShorthand(unit)}@sm`,
    typeof py === "object" && typeof py.md === "number" && `py-${py.md}${getUnitShorthand(unit)}@md`,
    typeof py === "object" && typeof py.lg === "number" && `py-${py.lg}${getUnitShorthand(unit)}@lg`,
    typeof py === "object" && typeof py.xl === "number" && `py-${py.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              px === "number" && `px-${px}${getUnitShorthand(unit)}`,
    typeof px === "object" && typeof px.mn === "number" && `px-${px.mn}${getUnitShorthand(unit)}@mn`,
    typeof px === "object" && typeof px.xs === "number" && `px-${px.xs}${getUnitShorthand(unit)}@xs`,
    typeof px === "object" && typeof px.sm === "number" && `px-${px.sm}${getUnitShorthand(unit)}@sm`,
    typeof px === "object" && typeof px.md === "number" && `px-${px.md}${getUnitShorthand(unit)}@md`,
    typeof px === "object" && typeof px.lg === "number" && `px-${px.lg}${getUnitShorthand(unit)}@lg`,
    typeof px === "object" && typeof px.xl === "number" && `px-${px.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              pt === "number" && `pt-${pt}${getUnitShorthand(unit)}`,
    typeof pt === "object" && typeof pt.mn === "number" && `pt-${pt.mn}${getUnitShorthand(unit)}@mn`,
    typeof pt === "object" && typeof pt.xs === "number" && `pt-${pt.xs}${getUnitShorthand(unit)}@xs`,
    typeof pt === "object" && typeof pt.sm === "number" && `pt-${pt.sm}${getUnitShorthand(unit)}@sm`,
    typeof pt === "object" && typeof pt.md === "number" && `pt-${pt.md}${getUnitShorthand(unit)}@md`,
    typeof pt === "object" && typeof pt.lg === "number" && `pt-${pt.lg}${getUnitShorthand(unit)}@lg`,
    typeof pt === "object" && typeof pt.xl === "number" && `pt-${pt.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              pr === "number" && `pr-${pr}${getUnitShorthand(unit)}`,
    typeof pr === "object" && typeof pr.mn === "number" && `pr-${pr.mn}${getUnitShorthand(unit)}@mn`,
    typeof pr === "object" && typeof pr.xs === "number" && `pr-${pr.xs}${getUnitShorthand(unit)}@xs`,
    typeof pr === "object" && typeof pr.sm === "number" && `pr-${pr.sm}${getUnitShorthand(unit)}@sm`,
    typeof pr === "object" && typeof pr.md === "number" && `pr-${pr.md}${getUnitShorthand(unit)}@md`,
    typeof pr === "object" && typeof pr.lg === "number" && `pr-${pr.lg}${getUnitShorthand(unit)}@lg`,
    typeof pr === "object" && typeof pr.xl === "number" && `pr-${pr.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              pb === "number" && `pb-${pb}${getUnitShorthand(unit)}`,
    typeof pb === "object" && typeof pb.mn === "number" && `pb-${pb.mn}${getUnitShorthand(unit)}@mn`,
    typeof pb === "object" && typeof pb.xs === "number" && `pb-${pb.xs}${getUnitShorthand(unit)}@xs`,
    typeof pb === "object" && typeof pb.sm === "number" && `pb-${pb.sm}${getUnitShorthand(unit)}@sm`,
    typeof pb === "object" && typeof pb.md === "number" && `pb-${pb.md}${getUnitShorthand(unit)}@md`,
    typeof pb === "object" && typeof pb.lg === "number" && `pb-${pb.lg}${getUnitShorthand(unit)}@lg`,
    typeof pb === "object" && typeof pb.xl === "number" && `pb-${pb.xl}${getUnitShorthand(unit)}@xl`,

    typeof                              pl === "number" && `pl-${pl}${getUnitShorthand(unit)}`,
    typeof pl === "object" && typeof pl.mn === "number" && `pl-${pl.mn}${getUnitShorthand(unit)}@mn`,
    typeof pl === "object" && typeof pl.xs === "number" && `pl-${pl.xs}${getUnitShorthand(unit)}@xs`,
    typeof pl === "object" && typeof pl.sm === "number" && `pl-${pl.sm}${getUnitShorthand(unit)}@sm`,
    typeof pl === "object" && typeof pl.md === "number" && `pl-${pl.md}${getUnitShorthand(unit)}@md`,
    typeof pl === "object" && typeof pl.lg === "number" && `pl-${pl.lg}${getUnitShorthand(unit)}@lg`,
    typeof pl === "object" && typeof pl.xl === "number" && `pl-${pl.xl}${getUnitShorthand(unit)}@xl`,
  )

  return <TagName {...props} className={classes} />
}

const SCALE = PropTypes.oneOf([0,.25,.5,.75,1,2,3,4])

const MEASUREMENTS = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    mn: SCALE,
    xs: SCALE,
    sm: SCALE,
    md: SCALE,
    lg: SCALE,
    xl: SCALE,
  }),
])

const UNITS = PropTypes.oneOf(["px", "em", "rem", "p", "e", "r"])

/*eslint-disable react/sort-prop-types */
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
  unit: "rem",
}

export default Base

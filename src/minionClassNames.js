import classNames from "classnames"

export default function (minionClassNames, ...other) {
  return classNames(
    other,
    typeof minionClassNames === "object" && typeof minionClassNames.mn === "string" && minionClassNames.mn.split(" ").map(c => `${c}@mn`).join(" "),
    typeof minionClassNames === "object" && typeof minionClassNames.xs === "string" && minionClassNames.xs.split(" ").map(c => `${c}@xs`).join(" "),
    typeof minionClassNames === "object" && typeof minionClassNames.sm === "string" && minionClassNames.sm.split(" ").map(c => `${c}@sm`).join(" "),
    typeof minionClassNames === "object" && typeof minionClassNames.md === "string" && minionClassNames.md.split(" ").map(c => `${c}@md`).join(" "),
    typeof minionClassNames === "object" && typeof minionClassNames.lg === "string" && minionClassNames.lg.split(" ").map(c => `${c}@lg`).join(" "),
    typeof minionClassNames === "object" && typeof minionClassNames.xl === "string" && minionClassNames.xl.split(" ").map(c => `${c}@xl`).join(" "),
  )
}

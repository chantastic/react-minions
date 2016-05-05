import classNames from "classnames"

export default function (minionClassNames) {
  return classNames(
    typeof minionsClassNames === "object" && typeof minionsClassNames.mn === "string" && minionsClassNames.mn.split(" ").map(c => `${c}@mn`).join(" "),
    typeof minionsClassNames === "object" && typeof minionsClassNames.xs === "string" && minionsClassNames.xs.split(" ").map(c => `${c}@xs`).join(" "),
    typeof minionsClassNames === "object" && typeof minionsClassNames.sm === "string" && minionsClassNames.sm.split(" ").map(c => `${c}@sm`).join(" "),
    typeof minionsClassNames === "object" && typeof minionsClassNames.md === "string" && minionsClassNames.md.split(" ").map(c => `${c}@md`).join(" "),
    typeof minionsClassNames === "object" && typeof minionsClassNames.lg === "string" && minionsClassNames.lg.split(" ").map(c => `${c}@lg`).join(" "),
    typeof minionsClassNames === "object" && typeof minionsClassNames.xl === "string" && minionsClassNames.xl.split(" ").map(c => `${c}@xl`).join(" "),
  )
}

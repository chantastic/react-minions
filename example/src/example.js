import React from "react"
import ReactDOM from "react-dom"
import ReactDOMServer from "react-dom/server"
import {
  Base,
} from "react-minions"

const App = () => (
  <div>
    <section>
      <h2>Base</h2>

      <code>Base</code> is a unique component. It can take a string or object as "className". If you provide an object, it'll honor these keys:{" "}
        <code>mn</code>,{" "}
        <code>xs</code>,{" "}
        <code>sm</code>,{" "}
        <code>md</code>,{" "}
        <code>lg</code>,{" "}
        <code>xl</code>.

      <h3>Example</h3>
      <pre><code>
{`<Base className={{ mn: "p-0", md: "p-1" }} />

// => <div class="p-0@mn p-1@md"></div>`}
      </code></pre>
    </section>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

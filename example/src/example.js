import React from "react"
import ReactDOM from "react-dom"
import {
  Base,
  Block,
} from "react-minions"

const App = () => (
  <div>
    <article>
      <h2>Block</h2>

      <Block>This is a <code>Block</code></Block>
{`<Block className="m-2" />

// => <div style="display: block" class="m-2r"></div>`}
    </article>

    <article>
      <h2>Base</h2>

      <code>Base</code> is a unique component. It can take a string or object as "className". If you provide an object, it'll honor these keys:{" "}
        <code>mn</code>,{" "}
        <code>xs</code>,{" "}
        <code>sm</code>,{" "}
        <code>md</code>,{" "}
        <code>lg</code>,{" "}
        <code>xl</code>.

      <Base>This is the <code>Base</code> component </Base>

      <h4>Example</h4>
      <pre><code>
{`<Base className={{ mn: "p-0", md: "p-1" }} />

// => <div class="p-0@mn p-1@md"></div>`}
      </code></pre>
    </article>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

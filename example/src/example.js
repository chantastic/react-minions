import React from "react"
import ReactDOM from "react-dom"
import {
  Base,
} from "react-minions"

const App = () => (
  <div>
    <article>
      <h2>Base</h2>

      <section>
      <h3>className (object)</h3>
        <code>Base</code> is a unique component. It can take a string or object as "className". If you provide an object, it'll honor these keys:{" "}
          <code>mn</code>,{" "}
          <code>xs</code>,{" "}
          <code>sm</code>,{" "}
          <code>md</code>,{" "}
          <code>lg</code>,{" "}
          <code>xl</code>.

        <h4>Example</h4>
        <pre><code>
{`<Base className={{ mn: "p-0", md: "p-1" }} />

// => <div class="p-0@mn p-1@md"></div>`}
        </code></pre>
      </section>

      <section>
        <h3>Props (number)</h3>
        <code>Base</code> accepts accepts a number of style props as well. Thes correlate directly to minions classes.

        <h4>Example</h4>
        <pre><code>
{`<Base m={1} p={2} />

// => <div class="m-1r p-2r"></div>`}
        </code></pre>
      </section>

      <section>
        <h3>Props (object)</h3>
        <code>Base</code> also accepts objects for all the same props, and keys that mirror the className prop:{" "}
          <code>mn</code>,{" "}
          <code>xs</code>,{" "}
          <code>sm</code>,{" "}
          <code>md</code>,{" "}
          <code>lg</code>,{" "}
          <code>xl</code>.


        <h4>Example</h4>
        <pre><code>
{`<Base m={{ mn: 0, md: 1 }} p={{ mn: 1, md: 2 }} />

// => <div class="m-0r@mn m-1r@md p-1@mn p-2r@md"></div>`}
        </code></pre>
      </section>
    </article>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

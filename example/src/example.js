import React, { PropTypes} from "react"
import ReactDOM from "react-dom"
import {
  Base,
  Block,
} from "react-minions"

const APIArticle = ({
  abstract,
  children,
  example,
  title,
  usage,
  ...props,
}) => (
  <article {...props}>
    <h2>{title}</h2>
    <p>{abstract}</p>

    {children}

    <h3>Usage</h3>
    {usage}

    <h3>Example</h3>
    <pre><code>
      {example}
    </code></pre>
  </article>
)
APIArticle.propTypes = {
  abstract: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  example: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  usage: PropTypes.node.isRequired,
}
APIArticle.defaultProps = {
  children: "",
}

const App = () => (
  <div>
    <APIArticle
      abstract="display: block"
      example={<Block>This is a <code>Block</code></Block>}
      title="Block"
      usage={`<Block className="m-2" />

// => <div style="display: block" class="m-2r"></div>`}
    >
    </APIArticle>

    <APIArticle
      abstract="The foundation of it all"
      example={<Base>This is the <code>Base</code> component </Base>}
      title="Base"
      usage={`<Base className={{ mn: "p-0", md: "p-1" }} />

// => <div class="p-0@mn p-1@md"></div>`}
    >
      <code>Base</code> is a unique component. It can take a string or object as "className". If you provide an object, it'll honor these keys:{" "}
        <code>mn</code>,{" "}
        <code>xs</code>,{" "}
        <code>sm</code>,{" "}
        <code>md</code>,{" "}
        <code>lg</code>,{" "}
        <code>xl</code>.
    </APIArticle>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))

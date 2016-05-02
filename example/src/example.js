var React = require('react');
var ReactDOM = require('react-dom');
var ReactMinions = require('react-minions');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactMinions />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));

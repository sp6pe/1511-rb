var React = require('react');

var BlogTitle = React.createClass({
    render: function () {
        return <h1>{this.props.title}</h1>;
    }
});

module.exports = BlogTitle;
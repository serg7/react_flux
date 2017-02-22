'use strict';

var React = require('react'),
    Link  = require('react-router').Link;

var notFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Page not found</h1>
                <p>There is nothing interesting here</p>
                <Link to="app">Back to Homepage</Link>
            </div>
        );
    }
});

module.exports = notFoundPage;
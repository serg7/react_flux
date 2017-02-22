'use strict';

var React = require('react'),
    AuthorsApi = require('../../api/author'),
    AuthorList = require('./authorList.js');


var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        }
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({authors: AuthorsApi.getAllAuthors()});
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        )
    }
});

module.exports = AuthorPage;
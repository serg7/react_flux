
$ = jQuery   = require('jquery');
var ReactDOM = require('react-dom'),
    React    = require('react'),
    Home     = require('./components/homePage.jsx'),
    About    = require('./components/about/about.jsx'),
    Header   = require('./components/common/header.jsx'),
    Authors  = require('./components/authors/authorPage.jsx');


(function (win) {
    'use strict';

    var App = React.createClass({
        render: function () {
            var Child;

            switch(this.props.route) {
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        ReactDOM.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange ', render);

    render();
})(window);

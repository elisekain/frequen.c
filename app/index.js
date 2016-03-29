var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;

var Header = require('./src/components/Header');
var Footer = require('./src/components/Footer');

var App = React.createClass({
  componentWillMount: function() {
      console.log(this.props.children);
  },
  render: function () {
    return (
      <div>
          <Header />
              {this.props.children}
          <Footer />
      </div>
    )
  }
});

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
});

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
});

var Podcasts = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Podcasts</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/podcasts" component={Podcasts}/>
        </Route>
    </Router> , document.getElementById('app'));

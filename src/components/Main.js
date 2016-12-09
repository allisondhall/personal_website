var React = require('react');
var Header = require('./Header');
var RightMenu = require('./RightMenu');

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-wrapper">
        <Header />
        {this.props.children}
        <RightMenu />
      </div>
    );
  }
});

module.exports = Main;
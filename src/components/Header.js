var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <header className="header">
        <h1 className="name">Computer Stuffs</h1>
      </header>
    );
  }
});

module.exports = Header;
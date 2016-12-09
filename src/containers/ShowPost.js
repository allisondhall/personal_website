var React = require('react');
var BlogPost = require('../components/BlogPost');

var ShowPost = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      postId: this.props.routeParams.postId || 0
    };
  },

  render: function () {
    return (
      <BlogPost postId={this.state.postId} />
    )
  }
});

module.exports = ShowPost;
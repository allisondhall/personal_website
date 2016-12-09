var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var LIProfile = function () {
  return (
    <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="allison-hall-7335b42a"><a class="LI-simple-link" href='https://www.linkedin.com/in/allison-hall-7335b42a?trk=profile-badge'></a></div>
  )
};

var Summary = function () {
  return (
    <p>Hi, I'm Allison, a Senior UI Software Engineer at LinkedIn. I have a particular interest in learning new technologies and bridging the gap between backend and frontend development.</p>
  )
}

var History = function () {
  return (
    <div>
      <h3 className="history-title">View Other Posts</h3>
      <ul className="history-list">
        <Link to='post/0' className='history-link'>
          <li>
            How a webpage loads
          </li>
        </Link>
      </ul>
    </div>
  )
}


var RightMenu = React.createClass({
  render: function () {
    return (
      <section className="personal-info">
        <LIProfile />
        <Summary />
      </section>
    )
  }
});

module.exports = RightMenu;
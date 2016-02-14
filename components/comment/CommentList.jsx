var React = require('react');
var ReactDOM = require('react-dom');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <Comment author="ZZY" date="yesterday">时不我待，雅宁学姐</Comment>
        <Comment author="银枪小霸王" date="last week">there is a **river**</Comment>
      </div>
    );
  }
});

module.exports = CommentList;

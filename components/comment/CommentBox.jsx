var React = require('react');
var ReactDOM = require('react-dom');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('react-marked');

var Comment= React.createClass({
  render: function() {
    console.log(this.props.children);
    console.log(this.props.children.toString());
    return (
      <div className="content">
        <a className="author">{this.props.author}</a>
        <div className="metadata">
          <span className="date">{this.props.date}</span>
        </div>
        <div className="text">
          <p>{marked(this.props.children.toString())}</p>
        </div>
      </div>
    );
  }
});

module.exports = Comment;

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return ( < div className = "commentBox" >
      < h1 > Comments < /h1>  < CommentList / >
      < CommentForm / >
      < /div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return ( < div className = "commentList" >
      < Comment author = "Pete Hunt" > This is one comment <
      /Comment> <
      Comment author = "Jordan Walker" > This is * another * comment <
      /Comment> < /div >
    );
  }
});


var CommentForm = React.createClass({
  render: function() {
    return ( < div className = "commentForm" >
      Hello, world!I am a CommentForm. < /div>
    );
  }
});

// tutorial6.js
var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return {
      __html: rawMarkup
    };
  },

  render: function() {
    return ( < div className = "comment" >
      < h2 className = "commentAuthor" > {
        this.props.author
      } < /h2> < span dangerouslySetInnerHTML = {
      this.rawMarkup()
    }
    /> < /div >
  );
}
});

var data = [{
  id: 1,
  author: "Fred Fish",
  text: "This is one comment"
}, {
  id: 2,
  author: "Harry Herbert",
  text: "This is *another* comment"
}];

ReactDOM.render( < CommentBox / > ,
  document.getElementById('content')
);

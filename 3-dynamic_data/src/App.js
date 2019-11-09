import React, { Component } from 'react';
import './App.css';

//psuedo data base
const data = [
  {id: 1, title: 'Message number 1', body: 'Content of number 1 messsage ...'},
  {id: 2, title: 'Message number 2', body: 'Content of number 2 messsage ...'}
];

setInterval( () => {
  const index = data.length + 1;
  data.push({
    id: index, title: `Message number ${index}`, body: `Content of number ${index} messsage ...`
  });
}, 5000 )

class App extends Component {
  state = {
    comments: [...data],
  }

  getData = () => {
    if(this.state.comments.length !== data.length) {
      console.log("Aktualizacja: ")
      this.setState({
        comments: [...data],
      })
    } else { console.log("same data - not actualized")}
  }

  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ))
    //console.log(comments);
    return (
      <div className="App">
        {comments.reverse()}
      </div>
    ) 
  }
}

export default App;

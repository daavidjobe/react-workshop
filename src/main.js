import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Link} from  'react-router';
import TodoList from './components/todolist/TodoList';


const Home = (props) => {
  return (
      <div>
        <h1>Home</h1>
        <Link to="about">about</Link>
        {props.children}
      </div>
  );
}

const About = () => {
  return <h1>About</h1>
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: 'hello, world!'
    }
  }

  
  handleClick() {
    this.setState({message: 'hello again!'});
  }

  render() {
    return (
        <TodoList />
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
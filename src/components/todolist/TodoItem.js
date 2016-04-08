import React from 'react';



class TodoItem extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
    <li>
      <p style={{color: this.props.todo.done? 'green' : 'blue'}}>
        {this.props.todo.text}</p>
        <button onClick={this.props.remove}>remove</button>
    </li>
    );
  }
}

export default TodoItem
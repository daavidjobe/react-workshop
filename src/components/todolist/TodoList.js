import React from 'react';
import TodoItem from './TodoItem';
import TodoFrom from './TodoForm';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: 'learn react',
          done: false
        },
        {
          text: 'eat food',
          done: true
        }
      ]
    }
  }

  add(text) {
    console.log(text)
    let todos = this.state.todos;
    todos.push({
      text: text,
      done: false
    });
    this.setState({todos})
  }

  remove(index) {
    let todos = this.state.todos;
    delete todos[index];
    this.setState({todos});
  }

  render() {
    let list = this.state.todos.map((item, index) => {
      return <TodoItem key={index}
                       remove={this.remove.bind(this, index)}
                       todo={item}/>
    });

    return (
        <div>
          <TodoFrom add={this.add.bind(this)} />
          <ul>
            {list}
          </ul>
        </div>
    )
  }
}

export default TodoList
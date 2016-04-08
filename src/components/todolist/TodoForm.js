import React from 'react';



class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.input.value > 0) {
      this.props.add(this.refs.input.value);
      this.refs.input.value = '';
    }
  }

  handleChange(e) {
    this.setState({val: e.target.value});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="input" onChange={this.handleChange.bind(this)} type="text"/>
          <input type="submit" value="add" />
          {this.state.val}
        </form>
    )
  }
}

export default TodoForm
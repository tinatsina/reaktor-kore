import React from "react";

class InputTodo extends React.Component {
  state = {
    title: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add new Todow"
          value={this.state.title}
          onChange={this.onChange}
          name="title"
        />
        <button className="input-submit" type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default InputTodo;
import React from "react";

// we are already using hooks and arrow functions so why not stay with the same approach with FC
// restrict or just don't use any
class Todo extends React.Component<any> {
  shouldComponentUpdate(prevProps: any) {
    if (this.props != prevProps) {
      return true;
    }
    return false;
  }

  handleOnClick() {
    window.location.href = "/detail";
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOnClick}>{this.props.todo.title}</div>
      </div>
    );
  }
}

export default Todo;

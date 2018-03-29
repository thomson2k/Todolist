import React, {Component} from "react";

class Todolist extends Component {
  render() {
    return (
      <div className="todoListMain">
      <div className="header">
      <form>
          <imput placeholder="enter task"></imput>
          <button type="sumbit"> add </button>
      </form>
    </div>
  </div>
    );
  }
}

export default TodoList;

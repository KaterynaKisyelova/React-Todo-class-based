import { Component } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import List from "./components/todos/List";
import TodoContext from "./store/store";
import styles from "./Todo.module.css";

class Todo extends Component {
  state = { list: [], activeCount: 0, hasCompleted: false };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ list: todos });
  }

  onHeaderFormSubmit(newTodo) {
    this.setState((prevState) => {
      return { list: [...prevState.list, newTodo] };
    });
  }

  componentDidUpdate(_, pervState) {
    localStorage.setItem("todos", JSON.stringify(this.state.list));

    if (pervState.list === this.state.list) {
      return;
    }

    this.setState({
      activeCount: this.state.list.reduce(
        (acc, todo) => (todo.completed === false ? ++acc : acc),
        0
      ),
    });

    this.setState({
      hasCompleted: this.state.list.some((todo) => todo.completed === true),
    });
    console.log(this.state.hasCompleted);
  }

  onItemDelete(id) {
    this.setState({ list: this.state.list.filter((item) => item.id !== id) });
  }

  onItemEdit(id, changes) {
    this.setState({
      list: this.state.list.map((item) =>
        item.id === id ? { ...item, ...changes } : item
      ),
    });
  }

  toggleAllCompleteness() {
    const hasIncomplete = this.state.list.some(
      (todo) => todo.completed === false
    );

    if (hasIncomplete) {
      this.setState({
        list: this.state.list.map((todo) =>
          todo.completed === false ? { ...todo, completed: true } : todo
        ),
      });

      return;
    }

    this.setState({
      list: this.state.list.map((todo) => {
        return { ...todo, completed: false };
      }),
    });
  }

  onClearCompleted() {
    this.setState({
      list: this.state.list.filter((todo) => todo.completed !== true),
    });
  }

  render() {
    return (
      <TodoContext.Provider
        value={{
          list: this.state.list,
          activeCount: this.state.activeCount,
          hasCompleted: this.state.hasCompleted,
          delete: this.onItemDelete.bind(this),
          edit: this.onItemEdit.bind(this),
          toggleAll: this.toggleAllCompleteness.bind(this),
          clear: this.onClearCompleted.bind(this),
        }}
      >
        <div className={styles.todoapp}>
          <Header onHeaderFormSubmit={this.onHeaderFormSubmit.bind(this)} />
          <List />
          <Footer />
        </div>
      </TodoContext.Provider>
    );
  }
}

export default Todo;

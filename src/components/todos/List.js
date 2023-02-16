import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "./Todos";
import TodoContext from "../../store/store";
import styles from "./List.module.css";

class List extends Component {
  static contextType = TodoContext;

  render() {
    return (
      <main className={styles.list}>
        <input
          id="toggle-all"
          className={styles.list__toggle_all}
          type="checkbox"
          onClick={this.context.toggleAll}
        />
        <label htmlFor="toggle-all"></label>
        <ul className={styles.list__content}>
          <Routes>
            <Route
              path="/"
              element={<Todos list={this.context.list} />}
            ></Route>
            <Route
              path="/active"
              element={
                <Todos
                  list={this.context.list.filter(
                    (todo) => todo.completed === false
                  )}
                />
              }
            ></Route>
            <Route
              path="/completed"
              element={
                <Todos
                  list={this.context.list.filter(
                    (todo) => todo.completed === true
                  )}
                />
              }
            ></Route>
          </Routes>
        </ul>
      </main>
    );
  }
}

export default List;

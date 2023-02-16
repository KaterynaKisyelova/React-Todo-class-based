import { Component, createRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Header.module.css";

class Header extends Component {
  inputField = createRef();

  onFormSubmit(e) {
    e.preventDefault();
    const value = this.inputField.current.value;
    const todo = { title: value, completed: false, id: uuidv4() };

    this.props.onHeaderFormSubmit(todo);
    e.target.reset();
  }

  render() {
    return (
      <header className="header">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <h1 className={styles.header__title}>todos</h1>
          <input
            className={styles.header__input}
            name="header-input"
            placeholder="What needs to be done?"
            autoFocus
            ref={this.inputField}
          />
        </form>
      </header>
    );
  }
}

export default Header;

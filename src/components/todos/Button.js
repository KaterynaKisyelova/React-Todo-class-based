import { Component } from "react";
import TodoContext from "../../store/store";
import styles from "./Button.module.css";

class Button extends Component {
  static contextType = TodoContext;

  render() {
    return (
      <button
        className={styles.delete}
        onClick={() => this.context.delete(this.props.id)}
      ></button>
    );
  }
}

export default Button;

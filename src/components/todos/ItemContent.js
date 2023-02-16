import { Component } from "react";
import TodoContext from "../../store/store";
import Button from "./Button";
import styles from "./ItemContent.module.css";

class ItemContent extends Component {
  static contextType = TodoContext;

  state = { done: "" };

  onCheckboxChange() {
    this.setState({ done: !this.state.done });
    this.context.edit(this.props.todo.id, { completed: !this.state.done });
  }

  componentDidMount() {
    this.setState({ done: this.props.todo.completed });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todo.completed !== this.props.todo.completed) {
      this.setState({ done: this.props.todo.completed });
    }
  }

  render() {
    return (
      <div>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={this.state.done}
          onChange={this.onCheckboxChange.bind(this)}
        />
        <label
          className={
            this.state.done
              ? `${styles.item__text} ${styles.completed}`
              : styles.item__text
          }
        >
          {this.props.todo.title}
        </label>
        {this.props.isMouseOver ? <Button id={this.props.todo.id} /> : null}
      </div>
    );
  }
}

export default ItemContent;

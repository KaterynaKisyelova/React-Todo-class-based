import { Component } from "react";
import EditInput from "./EditInput";
import ItemContent from "./ItemContent";
import styles from "./Item.module.css";

class Item extends Component {
  state = { isMouseOver: false, isEditing: false };

  onItemMouseEnter() {
    this.setState({ isMouseOver: true });
  }

  onItemMouseLeave() {
    this.setState({ isMouseOver: false });
  }

  onItemDoubleClick() {
    this.setState({ isEditing: true });
  }

  onItemBlur() {
    this.setState({ isEditing: false });
  }

  render() {
    return (
      <li
        className={
          this.props.todo.completed
            ? `${styles.item} ${styles.completed}`
            : styles.item
        }
        onMouseEnter={this.onItemMouseEnter.bind(this)}
        onMouseLeave={this.onItemMouseLeave.bind(this)}
        onDoubleClick={this.onItemDoubleClick.bind(this)}
        onBlur={this.onItemBlur.bind(this)}
      >
        {this.state.isEditing ? (
          <EditInput
            todoTitle={this.props.todo.title}
            todoId={this.props.todo.id}
          />
        ) : (
          <ItemContent
            todo={this.props.todo}
            isMouseOver={this.state.isMouseOver}
          />
        )}
      </li>
    );
  }
}

export default Item;

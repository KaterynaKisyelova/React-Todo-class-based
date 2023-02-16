import { Component } from "react";
import TodoContext from "../../store/store";
import styles from "./EditInput.module.css";

class EditInput extends Component {
  static contextType = TodoContext;

  state = { newTitle: "" };

  componentDidMount() {
    this.setState({ newTitle: this.props.todoTitle });
  }

  onInputChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  onInputKeydown(e) {
    if (e.key === "Enter") {
      e.target.blur();
    }
  }

  onInputBlur() {
    this.context.edit(this.props.todoId, { title: this.state.newTitle });
  }

  render() {
    return (
      <input
        className={styles.edit}
        value={this.state.newTitle}
        onChange={this.onInputChange.bind(this)}
        onKeyDown={this.onInputKeydown}
        onBlur={this.onInputBlur.bind(this)}
        autoFocus
      />
    );
  }
}

export default EditInput;

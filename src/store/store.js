import React from "react";

const todos = {
  list: [],
  activeCount: 0,
  hasCompleted: false,
  delete: (id) => {},
  edit: (id, text) => {},
  toggleAll: () => {},
  clear: () => {},
};
const TodoContext = React.createContext(todos);

export default TodoContext;

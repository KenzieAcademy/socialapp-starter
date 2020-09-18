import DeleteMessage from "../deleteMessage/DeleteMessage";

export default class TodoList extends Component {
  removeItem(e) {
    this.props.removeTodo(message);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <li
              onClick={() => {
                this.removeItem(todo);
              }}
              key={todo}
            >
              {todo}
            </li>
          );
        })}
      </ul>
    );
  }
}

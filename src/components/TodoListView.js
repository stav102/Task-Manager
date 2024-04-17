import TodoItem from './Todo'

function TodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map((todo, idx) => <TodoItem key={idx} todo={todo} />)}
            </ul>
        </div>
    )
}
export default TodoView;
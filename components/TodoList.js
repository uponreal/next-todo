import palette from "../theme/palette";

const TodoList = ({todos}) => {
    return (
        <>
            <div className="container">
                <div className="todo-list-header">
                    <p className="todo-list-last-todo">
                        남은 TODO<span>{todos.length}개</span>
                    </p>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                }
                .container .todo-list-header {
                    padding: 12px;
                    border-bottom: 1px solid ${palette.gray}
                }
                .container .todo-list-header .todo-list-last-todo {
                    font-size: 14px;
                }   
                .container .todo-list-header .todo-list-last-todo span {
                    margin-left: 8px;
                }  
            `}</style>
        </>
    )
}

export default TodoList;
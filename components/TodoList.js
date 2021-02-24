import { useCallback, useMemo } from "react";
import palette from "../theme/palette";
import { FaRegCircle, FaTrashAlt, FaUndo } from "react-icons/fa";
import { putTodos } from "../lib/api/todo";

const TodoList = ({ todos, todoMutate }) => {
  const getTodoColorCount = useCallback(() => {
    let colorCount = {};
    todos.forEach((todo) => {
      if (colorCount[todo.color] === undefined) {
        colorCount[todo.color] = 1;
      } else {
        colorCount[todo.color]++;
      }
    });
    return colorCount;
  }, [todos]);

  const todoColorCount = useMemo(getTodoColorCount, [todos]);

  return (
    <>
      <div className="container">
        <div className="header">
          <p className="header__last-todo">
            남은 TODO<span>{todos.length}개</span>
          </p>
          <div className="header__colors">
            {Object.keys(todoColorCount).map((color, index) => {
              return (
                <div className="header__color" key={index}>
                  <div className={`header__round-color bg-${color}`}></div>
                  <p>{todoColorCount[color]}개</p>
                </div>
              );
            })}
          </div>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => {
            return (
              <li className="todo-list__item" key={todo.id}>
                <div className="todo-list__item__left-side">
                  <div
                    className={`todo-list__item__block bg-${todo.color}`}
                  ></div>
                  <p
                    className={`todo-list__item__text ${
                      todo.checked === true ? "checked-text" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                </div>
                <div className="todo-list__item__right-side">
                  {todo.checked === true ? (
                    <>
                      <FaTrashAlt
                        color={palette.red}
                        size={22}
                        onClick={() => console.log("click delete button")}
                      />
                      <FaUndo
                        color={palette.navy}
                        size={22}
                        onClick={async () => {
                          try {
                            const response = await putTodos(todo.id);
                            const todos = response.data;
                            todoMutate(todos, false);
                          } catch (e) {
                            console.log(e);
                            alert("오류가 발생하였습니다.");
                          }
                        }}
                        style={{ marginLeft: 12 }}
                      />
                    </>
                  ) : (
                    <FaRegCircle
                      color={palette.gray}
                      size={24}
                      onClick={async () => {
                        try {
                          const response = await putTodos(todo.id);
                          const todos = response.data;
                          todoMutate(todos, false);
                        } catch (e) {
                          console.log(e);
                          alert("오류가 발생하였습니다.");
                        }
                      }}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .header {
          padding: 12px;
          border-bottom: 1px solid ${palette.gray};
        }
        .header__last-todo {
          font-size: 14px;
          margin-bottom: 4px;
        }
        .header__last-todo span {
          margin-left: 8px;
        }
        .header__colors {
          display: flex;
        }
        .header__color {
          display: flex;
          align-items: center;
          margin-right: 8px;
        }
        .header__round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .todo-list {
          padding: 0;
          margin: 0;
        }
        .todo-list__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 52px;
          border-bottom: 1px solid ${palette.gray};
        }
        .todo-list__item__left-side {
          height: 100%;
          display: flex;
          align-items: center;
        }
        .todo-list__item__block {
          width: 12px;
          height: 100%;
        }
        .todo-list__item__text {
          font-size: 16px;
          margin-left: 12px;
        }
        .checked-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-list__item__right-side {
          height: 100%;
          display: flex;
          align-items: center;
          padding-right: 12px;
        }
        .todo-list__item__right-side :global(svg) {
          cursor: pointer;
        }
        .bg-blue {
          background-color: ${palette.blue};
        }
        .bg-green {
          background-color: ${palette.green};
        }
        .bg-navy {
          background-color: ${palette.navy};
        }
        .bg-orange {
          background-color: ${palette.orange};
        }
        .bg-red {
          background-color: ${palette.red};
        }
        .bg-yellow {
          background-color: ${palette.yellow};
        }
      `}</style>
    </>
  );
};

export default TodoList;

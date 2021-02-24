import { useCallback, useMemo } from "react";
import palette from "../theme/palette";


const TodoList = ({todos}) => {
    const getTodoColorCount = useCallback(() => {
        let colorCount = {};
        todos.forEach((todo) => {
            if(colorCount[todo.color] === undefined) {
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
                        {Object.keys(todoColorCount).map((color, index)=>{
                            return (
                                <div className="header__color" key={index}>
                                    <div className={`header__round-color bg-${color}`}></div>
                                    <p>{todoColorCount[color]}개</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                }
                .header {
                    padding: 12px;
                    border-bottom: 1px solid ${palette.gray}
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
                    margin-right: 8px;
                }
                .header__round-color {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
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
}

export default TodoList;
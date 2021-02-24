import { BiBrush } from "react-icons/bi";
import palette from "../theme/palette";

const AddTodo = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="header__title">Add Todo</h1>
          <button className="header__add-button">추가하기</button>
        </div>
        <div className="colors-wrapper">
          <div className="colors_wrapper__color-list">
            {["red", "orange", "yellow", "green", "blue", "navy"].map(
              (color, index) => (
                <div
                  className={`colors_wrapper__color-button bg-${color}`}
                  key={index}
                />
              )
            )}
          </div>
          <BiBrush size={25} />
        </div>
        <textarea className="input-todo" placeholder="할 일을 입력해주세요." />
      </div>
      <style jsx>
        {`
          .container {
            padding: 16px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header__title {
            font-size: 21px;
            margin: 0;
          }
          .header__add-button {
            padding: 4px 8px;
            border: 1px solid black;
            border-radius: 5px;
            background-color: white;
            font-size: 14px;
            outline: none;
            cursor: pointer;
          }
          .colors-wrapper {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
          }
          .colors_wrapper__color-list {
            display: flex;
          }
          .colors_wrapper__color-button {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 16px;
          }
          .colors_wrapper__color-button:last-child {
            margin: 0;
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
          textarea.input-todo {
            width: 100%;
            height: 300px;
            border: 1px solid ${palette.gray};
            border-radius: 5px;
            margin-top: 12px;
            resize: none;
            outline: none;
            padding: 12px;
            font-size: 16px;
          }
        `}
      </style>
    </>
  );
};

export default AddTodo;

import palette from "../theme/palette";

const Header = () => {
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          width: 100%;
          height: 52px;
          padding: 0 12px;
          border-bottom: 1px solid ${palette.gray};
        }
        .container h1 {
          font-size: 21px;
        }
      `}</style>
    </>
  );
};

export default Header;

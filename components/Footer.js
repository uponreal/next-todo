import palette from "../theme/palette";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const isMain = router.pathname === "/";
  return (
    <>
      <div className="container">
        <button
          className="footer-button"
          onClick={() => {
            if (isMain) {
              router.push("/todo/add");
            } else {
              router.push("/");
            }
          }}
        >
          {isMain ? "+" : "-"}
        </button>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 53px;
            position: fixed;
            bottom: 0;
            border-top: 1px solid ${palette.gray};
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-button {
            width: 32px;
            height: 32px;
            border-radius: 5px;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            padding: 0;
            outline: none;
            font-size: 32px;
          }
        `}
      </style>
    </>
  );
};

export default Footer;

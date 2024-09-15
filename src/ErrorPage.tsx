import { useNavigate } from "react-router-dom";
import ErrorIllus from "../src/assets/images/error.svg";
const Errorpage = () => {
  const navigte = useNavigate();

  return (
    <div
      className="Error-page"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "60px auto",
        gap: "0",
      }}
    >
      <h1 style={{ color: "grey", fontSize: "2rem", fontWeight: "600" }}>
        Oops!
      </h1>
      <p>Something went wrong</p>
      <img
        src={ErrorIllus}
        alt="Error illustration"
        style={{
          width: "35%",
          aspectRatio: "1",
          padding: "0",
          margin: "0 !important",
        }}
      />
      <h1 style={{ color: "grey", fontSize: "1.5rem", fontWeight: "600" }}>
        404 ERROR PAGE
      </h1>

      <button
        onClick={() => {
          navigte("/login");
        }}
        className="goBack-btn"
      >
        Go back
      </button>
    </div>
  );
};

export default Errorpage;

import GlobalStyle from "../GlobalStyle";
import HeaderComponent from "../components/HomeButton";

function NotFound() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <div
        style={{
          fontSize: "22px",
          color: "red",
          textAlign: "center",
          width: "350px",
          margin: "200px auto",
        }}>
        Sorry, We couldn't find that page.
      </div>
    </>
  );
}

export default NotFound;

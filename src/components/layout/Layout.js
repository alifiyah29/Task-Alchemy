import Header from "./Header";
import Footer from "./Footer";
import {
  ThemeContext,
  ThemeProvider,
} from "../../contexts/ThemeContext";
import { useContext } from "react";

const Inner = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);
  const layoutVersion = "Layout Version 2.0";
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
    >
      <Header layoutVersion={layoutVersion} />
      {children}
      <br />
      <Footer />
    </div>
  );
};

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Inner {...props} />
    </ThemeProvider>
  );
};

export default Layout;

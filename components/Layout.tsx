import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

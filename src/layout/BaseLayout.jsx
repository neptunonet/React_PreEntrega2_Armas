//import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

const BaseLayout = ({ children }) => {

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default BaseLayout;
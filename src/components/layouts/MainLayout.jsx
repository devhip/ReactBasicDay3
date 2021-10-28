import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;

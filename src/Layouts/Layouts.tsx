import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <div className="bg-gray-50">
      <NavBar />
      <div data-aos="fade-down">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layouts;

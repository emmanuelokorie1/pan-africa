import { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layouts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 containerMain">
      <NavBar />
      <div data-aos="fade-down overflow-hidden ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layouts;

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layouts from "./Layouts/Layouts"
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
// import About from "./Pages/About/About";
// import Services from "./Pages/Services/Services";
import EGS from "./Pages/EGS/EGS";
import Career from "./Pages/Career/Career";
import News from "./Pages/News/News";
import WhoAreWe from "./Pages/About/matrix/WhoAreWe";
import OurCoreValue from "./Pages/About/matrix/OurCoreValue";
import OurFocus from "./Pages/About/matrix/OurFocus";
import CoreServices from "./Pages/Services/Metrix/CoreServices";
import ValueAddedServices from "./Pages/Services/Metrix/ValueAddedServices";
import { Suspense } from "react";
import Loading from "./Layouts/Loading";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="who-are-we" element={<WhoAreWe />} />
            <Route path="our-core-values" element={<OurCoreValue />} />
            <Route path="our-focus" element={<OurFocus />} />
            <Route path="core-services" element={<CoreServices />} />
            <Route path="value-added-services" element={<ValueAddedServices />} />
            <Route path="egs" element={<EGS />} />
            <Route path="career" element={<Career />} />
            <Route path="news" element={<News />} />
          </Route>
      </Route>
    )
  );
  return (
    <div className="App">
       <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;

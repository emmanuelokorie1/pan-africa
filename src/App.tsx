import React, { Suspense, lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Loading from "./Layouts/Loading";

const Home = lazy(() => import("./Pages/Home/Home"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const EGS = lazy(() => import("./Pages/EGS/EGS"));
const Career = lazy(() => import("./Pages/Career/Career"));
const News = lazy(() => import("./Pages/News/News"));
const WhoAreWe = lazy(() => import("./Pages/About/matrix/WhoAreWe"));
const OurCoreValue = lazy(() => import("./Pages/About/matrix/OurCoreValue"));
const OurFocus = lazy(() => import("./Pages/About/matrix/OurFocus"));
const CoreServices = lazy(() => import("./Pages/Services/Metrix/CoreServices"));
const ValueAddedServices = lazy(() => import("./Pages/Services/Metrix/ValueAddedServices"));


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layouts />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="who-are-we"
            element={
              <Suspense fallback={<Loading />}>
                <WhoAreWe />
              </Suspense>
            }
          />
          <Route
            path="our-core-values"
            element={
              <Suspense fallback={<Loading />}>
                <OurCoreValue />
              </Suspense>
            }
          />
          <Route
            path="our-focus"
            element={
              <Suspense fallback={<Loading />}>
                <OurFocus />
              </Suspense>
            }
          />
          <Route
            path="core-services"
            element={
              <Suspense fallback={<Loading />}>
                <CoreServices />
              </Suspense>
            }
          />
          <Route
            path="value-added-services"
            element={
              <Suspense fallback={<Loading />}>
                <ValueAddedServices />
              </Suspense>
            }
          />
          <Route
            path="egs"
            element={
              <Suspense fallback={<Loading />}>
                <EGS />
              </Suspense>
            }
          />
          <Route
            path="career"
            element={
              <Suspense fallback={<Loading />}>
                <Career />
              </Suspense>
            }
          />
          <Route
            path="news"
            element={
              <Suspense fallback={<Loading />}>
                <News />
              </Suspense>
            }
          />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


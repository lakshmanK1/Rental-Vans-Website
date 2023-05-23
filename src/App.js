import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const LayoutHeader = React.lazy(() => import("./Components/Ui/LayoutHeader/LayoutHeader"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const OurVans = React.lazy(() => import("./Pages/OurVans/OurVans"));
const SingleVanDetails = React.lazy(() => import("./Pages/SingleVanDetails/SingleVanDetails"));
const Host = React.lazy(() => import("./Pages/Host/Host"));
const DashBoard = React.lazy(() => import("./Pages/Host/DashBoard"));
const Income = React.lazy(() => import("./Pages/Host/Income"));
const Vans = React.lazy(() => import("./Pages/Host/Vans/Vans"));
const Reviews = React.lazy(() => import("./Pages/Host/Reviews"));
const SpecificVan = React.lazy(() => import("./Pages/Host/Vans/SpecificVan"));
const Details = React.lazy(() => import("./Pages/Host/Vans/Details"));
const Pricing = React.lazy(() => import("./Pages/Host/Vans/Pricing"));
const Photos = React.lazy(() => import("./Pages/Host/Vans/Photos"));

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading..</div>}>
                <LayoutHeader />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<div>Loading..</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="aboutus"
              element={
                <Suspense fallback={<div>Loading..</div>}>
                  <About />
                </Suspense>
              }
            />

            <Route path="vans">
              <Route
                index
                element={
                  <Suspense fallback={<div>Loading..</div>}>
                    <OurVans />
                  </Suspense>
                }
              />
              <Route
                path=":id"
                element={
                  <Suspense fallback={<div>Loading..</div>}>
                    <SingleVanDetails />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="host"
              element={
                <Suspense fallback={<div>Loading..</div>}>
                  <Host />
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback={<div>Loading..</div>}>
                    <DashBoard />
                  </Suspense>
                }
              />
              <Route
                path="income"
                element={
                  <Suspense fallback={<div>Loading..</div>}>
                    <Income />
                  </Suspense>
                }
              />
              <Route
                path="reviews"
                element={
                  <Suspense fallback={<div>Loading..</div>}>
                    <Reviews />
                  </Suspense>
                }
              />
              <Route path="allvans">
                <Route
                  index
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <Vans />
                    </Suspense>
                  }
                />
                <Route
                  path=":id"
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <SpecificVan />
                    </Suspense>
                  }
                >
                  <Route
                    index
                    element={
                      <Suspense fallback={<div>Loading..</div>}>
                        <Details />
                      </Suspense>
                    }
                  />
                  <Route
                    path="pricing"
                    element={
                      <Suspense fallback={<div>Loading..</div>}>
                        <Pricing />
                      </Suspense>
                    }
                  />
                  <Route
                    path="photos"
                    element={
                      <Suspense fallback={<div>Loading..</div>}>
                        <Photos />
                      </Suspense>
                    }
                  />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

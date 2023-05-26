import React, { Suspense } from "react";
import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import ErrorBoundary from "./Components/Ui/ErrorBoundary/ErrorBoundary";

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
const NotFound = React.lazy(() => import('./Pages/NotFoundPage/NotFound'));


const router = createBrowserRouter(createRoutesFromElements(
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading..</div>}>
                  <LayoutHeader />
                </Suspense>
              </ErrorBoundary>
            }
          >
            <Route
              index
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading..</div>}>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="aboutus"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading..</div>}>
                    <About />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route path="vans">
              <Route
                index
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading..</div>}>
                      <OurVans />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path=":id"
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading..</div>}>
                      <SingleVanDetails />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
            </Route>

            <Route
              path="host"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading..</div>}>
                    <Host />
                  </Suspense>
                </ErrorBoundary>
              }
            >
              <Route
                index
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading..</div>}>
                      <DashBoard />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="income"
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading..</div>}>
                      <Income />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="reviews"
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading..</div>}>
                      <Reviews />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route path="allvans">
                <Route
                  index
                  element={
                    <ErrorBoundary>
                      <Suspense fallback={<div>Loading..</div>}>
                        <Vans />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path=":id"
                  element={
                    <ErrorBoundary>
                      <Suspense fallback={<div>Loading..</div>}>
                        <SpecificVan />
                      </Suspense>
                    </ErrorBoundary>
                  }
                >
                  <Route
                    index
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading..</div>}>
                          <Details />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="pricing"
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading..</div>}>
                          <Pricing />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="photos"
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading..</div>}>
                          <Photos />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={
            <Suspense fallback={<div>Loading..</div>}>
              <NotFound/>
            </Suspense>
            }/>
          </Route>
));

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </React.Fragment>
  );
}

export default App;

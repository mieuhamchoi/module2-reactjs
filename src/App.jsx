import "./App.scss"; // link css
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTE_NAMES  from './routeNames';
import LazyLoad from './LazyLoad';

export default function TabContainer() {
  const listTab = [
    {
      sessionNumber: 0,
      sessionHomeWork: [
        {
          name: 'Learn Use Reducer',
          path: ROUTE_NAMES.SESSION0 + '/' + ROUTE_NAMES.SESSION0_LEARNUSEREDUCER,
          element: LazyLoad(() => import('./pages/session0/learnUseReducers/LearnUseReducer'))()
        },
        {
          name: 'Task Keepers',
          path: ROUTE_NAMES.SESSION0 + '/' + ROUTE_NAMES.SESSION0_TASKKEEPER,
          element: LazyLoad(() => import('./pages/session0/TaskKeepers/TaskKeeper'))()
        }
      ],
      path: ROUTE_NAMES.SESSION0,
      element: LazyLoad(() => import('./pages/session0/Session0'))()
    }
  ];
  
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  return (
    <BrowserRouter>
      <div className="page__container">
        <div className="navbar__container">
          <div className="content">
            <Navbar
              listTab={listTab}
              style={{ width: "100%" }}
            ></Navbar>
          </div>
        </div>
        <div className="content__container">
          <div className="content">
            {/* Nội dung render theo router sẽ xuất hiện */}
            <Routes>
              {
                listTab.map((route) => 
                  <Route key={uuidv4()} path={route.path} element={route.element}>
                    {
                      route.sessionHomeWork.map((route) => 
                        <Route key={uuidv4()} path={route.path} element={route.element} />
                      )
                    }
                  </Route>
                )
              }
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

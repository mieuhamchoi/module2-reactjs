import "./App.scss"; // link css
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTE_NAMES from "./routeNames";
import LazyLoad from "./LazyLoad";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PageConfig from "./components/PageConfig";
import { store } from "./stores/index.store";
import { Provider } from "react-redux";
export default function App() {
  const { t } = useTranslation();

  const listTab = [
    {
      sessionNumber: 0,
      sessionHomeWork: [
        {
          name: t("learnUseReducer"),
          path:
            ROUTE_NAMES.SESSION0.path + ROUTE_NAMES.SESSION0.LEARNUSEREDUCER,
          routePath: ROUTE_NAMES.SESSION0.LEARNUSEREDUCER.slice(1),
          element: LazyLoad(() =>
            import("./pages/session0/learnUseReducers/LearnUseReducer")
          )(),
        },
        {
          name: t("taskKeeper"),
          path: ROUTE_NAMES.SESSION0.path + ROUTE_NAMES.SESSION0.TASKKEEPER,
          routePath: ROUTE_NAMES.SESSION0.TASKKEEPER.slice(1),
          element: LazyLoad(() =>
            import("./pages/session0/TaskKeepers/TaskKeeper")
          )(),
        },
      ],
      path: ROUTE_NAMES.SESSION0.path,
      element: LazyLoad(() => import("./pages/session0/Session0"))(),
    },
    {
      sessionNumber: 2,
      sessionHomeWork: [
        {
          name: t("flipCoint"),
          path: ROUTE_NAMES.SESSION2.path + ROUTE_NAMES.SESSION2.FLIPCOIN,
          routePath: ROUTE_NAMES.SESSION2.FLIPCOIN.slice(1),
          element: LazyLoad(() =>
            import("./pages/session2/FlipCoins/FlipCoin")
          )(),
        },
        {
          name: t("searchProduct"),
          path: ROUTE_NAMES.SESSION2.path + ROUTE_NAMES.SESSION2.SEARCHPRODUCT,
          routePath: ROUTE_NAMES.SESSION2.SEARCHPRODUCT.slice(1),
          element: LazyLoad(() =>
            import("./pages/session2/SearchProducts/SearchProduct")
          )(),
        },
      ],
      path: ROUTE_NAMES.SESSION2.path,
      element: LazyLoad(() => import("./pages/session2/Session2"))(),
    },
    {
      sessionNumber: 3,
      sessionHomeWork: [
        {
          name: t("lifeCycle"),
          path: ROUTE_NAMES.SESSION3.path + ROUTE_NAMES.SESSION3.LIFECYCLE,
          routePath: ROUTE_NAMES.SESSION3.LIFECYCLE.slice(1),
          element: LazyLoad(() => import("./pages/session3/LifeCycle"))(),
        },
        {
          name: t("form"),
          path: ROUTE_NAMES.SESSION3.path + ROUTE_NAMES.SESSION3.FROMS,
          routePath: ROUTE_NAMES.SESSION3.FROMS.slice(1),
          element: LazyLoad(() => import("./pages/session3/Forms/Form"))(),
        },
      ],
      path: ROUTE_NAMES.SESSION3.path,
      element: LazyLoad(() => import("./pages/session3/Session3"))(),
    },
    {
      sessionNumber: 4,
      sessionHomeWork: [
        {
          name: t("useState"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USESTATE,
          routePath: ROUTE_NAMES.SESSION4.USESTATE.slice(1),
          element: LazyLoad(() => import("./pages/session4/UseState"))(),
        },
        {
          name: t("useEffect"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEEFFECT,
          routePath: ROUTE_NAMES.SESSION4.USEEFFECT.slice(1),
          element: LazyLoad(() => import("./pages/session4/UseEffect"))(),
        },
        {
          name: t("useMemo"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEMEMO,
          routePath: ROUTE_NAMES.SESSION4.USEMEMO.slice(1),
          element: LazyLoad(() => import("./pages/session4/UseMemo"))(),
        },
        {
          name: t("useCallback"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USECALLBACK,
          routePath: ROUTE_NAMES.SESSION4.USECALLBACK.slice(1),
          element: LazyLoad(() => import("./pages/session4/UseCallback"))(),
        },
        {
          name: t("useReducer"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEREDUCER,
          routePath: ROUTE_NAMES.SESSION4.USEREDUCER.slice(1),
          element: LazyLoad(() => import("./pages/session4/UseReducer"))(),
        },
        {
          name: t("useRef"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEREF,
          routePath: ROUTE_NAMES.SESSION4.USEREF.slice(1),
          element: LazyLoad(() => import("./pages/session4/UseRef"))(),
        },
        {
          name: t("useContext"),
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USECONTEXT,
          routePath: ROUTE_NAMES.SESSION4.USECONTEXT.slice(1),
          element: LazyLoad(() =>
            import("./pages/session4/UseContexts/Parent")
          )(),
        },
      ],
      path: ROUTE_NAMES.SESSION4.path,
      element: LazyLoad(() => import("./pages/session4/Session4"))(),
    },
    {
      sessionNumber: 5,
      sessionHomeWork: [
        {
          name: t("meoMeoUi"),
          path: ROUTE_NAMES.SESSION5.path + ROUTE_NAMES.SESSION5.MEOMEOUI,
          routePath: ROUTE_NAMES.SESSION5.MEOMEOUI.slice(1),
          element: LazyLoad(() => import("./pages/session5/meomeos/MeoMeo"))(),
        },
      ],
      path: ROUTE_NAMES.SESSION5.path,
      element: LazyLoad(() => import("./pages/session5/Session5"))(),
    },
    {
      sessionNumber: 6,
      sessionHomeWork: [
        {
          name: t("toDoListProject"),
          path: ROUTE_NAMES.SESSION6.path + ROUTE_NAMES.SESSION6.TODOLIST,
          routePath: ROUTE_NAMES.SESSION6.TODOLIST.slice(1),
          element: LazyLoad(() =>
            import("./pages/session6/todolists/Todolist")
          )(),
        },
      ],
      path: ROUTE_NAMES.SESSION6.path,
      element: LazyLoad(() => import("./pages/session6/Session6"))(),
    },
    {
      sessionNumber: 7,
      sessionHomeWork: [
        {
          name: t("meoFashion"),
          path: ROUTE_NAMES.SESSION7.path + ROUTE_NAMES.SESSION7.MEOFASHION,
          routePath: ROUTE_NAMES.SESSION7.MEOFASHION.slice(1),
          element: LazyLoad(() =>
            import("./pages/session7/meoFashions/MeoFashion")
          )(),
        },
      ],
      path: ROUTE_NAMES.SESSION7.path,
      element: LazyLoad(() => import("./pages/session7/Session7"))(),
    },
    {
      sessionNumber: 8,
      sessionHomeWork: [
        {
          name: t("topMeo"),
          path: ROUTE_NAMES.SESSION8.path + ROUTE_NAMES.SESSION8.TOPMEO,
          routePath: ROUTE_NAMES.SESSION8.TOPMEO.slice(1),
          element: LazyLoad(() => import("./pages/session8/TopMeos/TopMeo"))(),
          details: [
            {
              path: "meo-detail/:id",
              element: LazyLoad(() =>
                import("./pages/session8/TopMeos/MeoDetail")
              )(),
            },
          ],
        },
      ],
      path: ROUTE_NAMES.SESSION8.path,
      element: LazyLoad(() => import("./pages/session8/Session8"))(),
    },
    {
      sessionNumber: 9,
      sessionHomeWork: [
        {
          name: t("exampleRedux"),
          path: ROUTE_NAMES.SESSION9.path + ROUTE_NAMES.SESSION9.EXAMPLEREDUX,
          routePath: ROUTE_NAMES.SESSION9.EXAMPLEREDUX.slice(1),
          element: LazyLoad(() => import("./pages/session9/ExampleRedux"))(),
        },
        {
          name: t("toDoListRedux"),
          path: ROUTE_NAMES.SESSION9.path + ROUTE_NAMES.SESSION9.TODOLISTREDUX,
          routePath: ROUTE_NAMES.SESSION9.TODOLISTREDUX.slice(1),
          element: LazyLoad(() =>
            import("./pages/session9/ToDoListReduxs/ToDoListRedux")
          )(),
        },
      ],
      path: ROUTE_NAMES.SESSION9.path,
      element: LazyLoad(() => import("./pages/session9/Session9"))(),
    },
  ];

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  function getMode() {
    return localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light'
  }

  useEffect(() => {
    document.querySelector('.page__container').style.setProperty('--background-color', getMode() == 'light' ? 'white' : 'black')
  }, [])
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="page__container">
          <div className="navbar__container">
            <div className="content">
              <Navbar listTab={listTab} style={{ width: "100%" }}></Navbar>
            </div>
          </div>
          <div className="content__container">
            <div className="content">
              {/* Nội dung render theo router sẽ xuất hiện */}
              <Routes>
                <Route
                  path="/"
                  element={LazyLoad(() => import("./pages/Home"))()}
                />
                {listTab.map((route) => (
                  // session number
                  <Route
                    key={uuidv4()}
                    path={route.path}
                    element={route.element}
                  >
                    {route.sessionHomeWork.map((route) => (
                      <React.Fragment key={uuidv4()}>
                        {/* session home work (top meo) */}
                        <Route
                          key={uuidv4()}
                          path={route.routePath}
                          element={route.element}
                        />
                        {route.details?.map((item) => (
                          // session 8 có meoDetail
                          <Route
                            key={uuidv4()}
                            path={item.path}
                            element={item.element}
                          />
                        ))}
                      </React.Fragment>
                    ))}
                  </Route>
                ))}
              </Routes>
            </div>
          </div>
          <PageConfig />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

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
          path: ROUTE_NAMES.SESSION0.path + ROUTE_NAMES.SESSION0.LEARNUSEREDUCER,
          routePath: ROUTE_NAMES.SESSION0.LEARNUSEREDUCER.slice(1),
          element: LazyLoad(() => import('./pages/session0/learnUseReducers/LearnUseReducer'))()
        },
        {
          name: 'Task Keepers',
          path: ROUTE_NAMES.SESSION0.path + ROUTE_NAMES.SESSION0.TASKKEEPER,
          routePath: ROUTE_NAMES.SESSION0.TASKKEEPER.slice(1),
          element: LazyLoad(() => import('./pages/session0/TaskKeepers/TaskKeeper'))()
        }
      ],
      path: ROUTE_NAMES.SESSION0.path,
      element: LazyLoad(() => import('./pages/session0/Session0'))()
    },
    {
      sessionNumber: 2,
      sessionHomeWork: [
        {
          name: 'Flip Coin',
          path: ROUTE_NAMES.SESSION2.path + ROUTE_NAMES.SESSION2.FLIPCOIN,
          routePath: ROUTE_NAMES.SESSION2.FLIPCOIN.slice(1),
          element: LazyLoad(() => import('./pages/session2/FlipCoins/FlipCoin'))()
        },
        {
          name: 'Search Products',
          path: ROUTE_NAMES.SESSION2.path + ROUTE_NAMES.SESSION2.SEARCHPRODUCT,
          routePath: ROUTE_NAMES.SESSION2.SEARCHPRODUCT.slice(1),
          element: LazyLoad(() => import('./pages/session2/SearchProducts/SearchProduct'))()
        },
      ],
      path: ROUTE_NAMES.SESSION2.path,
      element: LazyLoad(() => import('./pages/session2/Session2'))()
    },
    {
      sessionNumber: 3,
      sessionHomeWork: [
        {
          name: 'Life Cycle',
          path: ROUTE_NAMES.SESSION3.path + ROUTE_NAMES.SESSION3.LIFECYCLE,
          routePath: ROUTE_NAMES.SESSION3.LIFECYCLE.slice(1),
          element: LazyLoad(() => import('./pages/session3/LifeCycle'))()
        },
        {
          name: 'Forms',
          path: ROUTE_NAMES.SESSION3.path + ROUTE_NAMES.SESSION3.FROMS,
          routePath: ROUTE_NAMES.SESSION3.FROMS.slice(1),
          element: LazyLoad(() => import('./pages/session3/Forms/Form'))()
        }
      ],
      path: ROUTE_NAMES.SESSION3.path,
      element: LazyLoad(() => import('./pages/session3/Session3'))()
    },
    {
      sessionNumber: 4,
      sessionHomeWork: [
        {
          name: 'useState()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USESTATE,
          routePath: ROUTE_NAMES.SESSION4.USESTATE.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseState'))()
        },
        {
          name: 'useEffect()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEEFFECT,
          routePath: ROUTE_NAMES.SESSION4.USEEFFECT.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseEffect'))()
        },
        {
          name: 'useMemo()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEMEMO,
          routePath: ROUTE_NAMES.SESSION4.USEMEMO.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseMemo'))()
        },
        {
          name: 'useCallback()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USECALLBACK,
          routePath: ROUTE_NAMES.SESSION4.USECALLBACK.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseCallback'))()
        },
        {
          name: 'useReducer()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEREDUCER,
          routePath: ROUTE_NAMES.SESSION4.USEREDUCER.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseReducer'))()
        },
        {
          name: 'useRef()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USEREF,
          routePath: ROUTE_NAMES.SESSION4.USEREF.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseRef'))()
        },
        {
          name: 'useContext()',
          path: ROUTE_NAMES.SESSION4.path + ROUTE_NAMES.SESSION4.USECONTEXT,
          routePath: ROUTE_NAMES.SESSION4.USECONTEXT.slice(1),
          element: LazyLoad(() => import('./pages/session4/UseContexts/Parent'))()
        }
      ],
      path: ROUTE_NAMES.SESSION4.path,
      element: LazyLoad(() => import('./pages/session4/Session4'))()
    },
    {
      sessionNumber: 5,
      sessionHomeWork: [
        {
          name: 'Meo Meo Ui',
          path: ROUTE_NAMES.SESSION5.path + ROUTE_NAMES.SESSION5.MEOMEOUI,
          routePath: ROUTE_NAMES.SESSION5.MEOMEOUI.slice(1),
          element: LazyLoad(() => import('./pages/session5/meomeos/MeoMeo'))()
        }
      ],
      path: ROUTE_NAMES.SESSION5.path,
      element: LazyLoad(() => import('./pages/session5/Session5'))()
    },
    {
      sessionNumber: 6,
      sessionHomeWork: [
        {
          name: 'To Do List Project',
          path: ROUTE_NAMES.SESSION6.path + ROUTE_NAMES.SESSION6.TODOLIST,
          routePath: ROUTE_NAMES.SESSION6.TODOLIST.slice(1),
          element: LazyLoad(() => import('./pages/session6/todolists/Todolist'))()
        }
      ],
      path: ROUTE_NAMES.SESSION6.path,
      element: LazyLoad(() => import('./pages/session6/Session6'))()
    },
    {
      sessionNumber: 7,
      sessionHomeWork: [
        {
          name: 'Meo Fashion',
          path: ROUTE_NAMES.SESSION7.path + ROUTE_NAMES.SESSION7.MEOFASHION,
          routePath: ROUTE_NAMES.SESSION7.MEOFASHION.slice(1),
          element: LazyLoad(() => import('./pages/session7/meoFashions/MeoFashion'))()
        }
      ],
      path: ROUTE_NAMES.SESSION7.path,
      element: LazyLoad(() => import('./pages/session7/Session7'))()
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
              <Route path="/" element={LazyLoad(() => import('./pages/Home'))()} />
              {
                listTab.map((route) => 
                  <Route key={uuidv4()} path={route.path} element={route.element}>
                    {
                      route.sessionHomeWork.map((route) => 
                      <Route key={uuidv4()} path={route.routePath} element={route.element} />
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

import "./App.scss"; // link css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // css react boostrap
import { useState, useTransition } from "react";

//.........................pages
import TaskKeeper from "./pages/session0/TaskKeepers/TaskKeeper";
import LearnUseReducer from "./pages/session0/learnUseReducers/LearnUseReducer";
import Test from "./pages/session0/tests/Test";
//..session 2
import FlipCoin from "./pages/session2/FlipCoins/FlipCoin";
import SearchProduct from "./pages/session2/SearchProducts/SearchProduct";
//..session 3
import LifeCycle from "./pages/session3/LifeCycle";
import Form from "./pages/session3/Forms/Form";
//..session 4
import UseState from "./pages/session4/UseState";
import UseEffect from "./pages/session4/UseEffect";
import UseReducer from "./pages/session4/UseReducer";
import Parent from "./pages/session4/UseContexts/Parent";
import UseRef from "./pages/session4/UseRef";
import UseMemo from "./pages/session4/UseMemo";
import UseCallback from "./pages/session4/UseCallback";
//..session 5
import MeoMeo from "./pages/session5/meomeos/MeoMeo";
//.........................components
import Navbar from "./components/Navbar";

export default function TabContainer() {
  const listTab = [
    {
      sessionNumber: 0,
      sessionHomeWork: ["TaskKeeper", "LearnUseReducer", "Test"],
    },
    {
      sessionNumber: 2,
      sessionHomeWork: ["Flip Coin", "Search Product"],
    },
    {
      sessionNumber: 3,
      sessionHomeWork: ["Lifecycle", "Forms"],
    },
    {
      sessionNumber: 4,
      sessionHomeWork: [
        "UseState",
        "UseEffect",
        "UseReducer",
        "UseContext",
        "UseRef",
        "UseMemo",
        "UseCallback",
      ],
    },
    {
      sessionNumber: 5,
      sessionHomeWork: ["MeoMeo"],
    },
  ];
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("FlipCoin");

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <div className="page__container">
        <div className="navbar__container">
          <div className="content">
            <Navbar
              selectTab={selectTab}
              listTab={listTab}
              style={{ width: "100%" }}
            ></Navbar>
          </div>
        </div>
        <div className="content__container">
          <div className="content">
            {/* session 2 */}
            {tab === "Flip Coin" && <FlipCoin />}
            {tab === "Search Product" && <SearchProduct />}
            {tab === "Lifecycle" && <LifeCycle />}
            {tab === "Forms" && <Form />}
            {tab === "UseState" && <UseState />}
            {tab === "UseEffect" && <UseEffect />}
            {tab === "UseReducer" && <UseReducer />}
            {tab === "UseContext" && <Parent />}
            {tab === "UseRef" && <UseRef />}
            {tab === "UseMemo" && <UseMemo />}
            {tab === "UseCallback" && <UseCallback />}
            {tab === "MeoMeo" && <MeoMeo />}
            {tab === "TaskKeeper" && <TaskKeeper />}
            {tab === "LearnUseReducer" && <LearnUseReducer />}
            {tab === "Test" && <Test />}
          </div>
        </div>
      </div>
    </>
  );
}

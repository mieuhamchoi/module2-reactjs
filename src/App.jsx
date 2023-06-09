import './App.scss'; // link css
import 'bootstrap/dist/css/bootstrap.min.css'; // css react boostrap
import { useState, useTransition } from 'react';

//.........................pages
//..session 2
import FlipCoin from "./pages/session2/FlipCoins/FlipCoin";
import SearchProduct from "./pages/session2/SearchProducts/SearchProduct";
//..session 3
import LifeCycle from "./pages/session3/LifeCycle";
import Form from "./pages/session3/Forms/Form";
//.........................components
import Navbar from './components/Navbar'

export default function TabContainer() {
  const listTab = [
    {
      sessionNumber: 2,
      sessionHomeWork: ['Flip Coin', 'Search Product']
    },
    {
      sessionNumber: 3,
      sessionHomeWork: ['Lifecycle', 'Forms']
    }
  ]
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('FlipCoin');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);      
    });
  }

  return (
    <>
      <div className='page__container'>
        <div className='navbar__container'>
          <div className="content">
            <Navbar selectTab={selectTab} listTab={listTab} style={{width: "100%"}}></Navbar>
          </div>
        </div>
        <div className="content__container">
            <div className="content">
              {/* session 2 */}
              {tab === 'Flip Coin' && <FlipCoin />}
              {tab === 'Search Product' && <SearchProduct />}
              {tab === 'Lifecycle' && <LifeCycle />}
              {tab === 'Forms' && <Form />}
            </div>
        </div>
      </div>
    </>
  );
}

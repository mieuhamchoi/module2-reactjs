import './App.scss'; // link css

import { useState, useTransition } from 'react';

//.........................pages
//..session 2
import FlipCoin from "./pages/session2/FlipCoins/FlipCoin";
//.........................components
import Navbar from './components/Navbar'

export default function TabContainer() {
  const listTab = [
    {
      sessionNumber: 2,
      sessionHomeWork: ['Flip Coin', 'Roll Dice', 'Đồng Hồ']
    },
    {
      sessionNumber: 3,
      sessionHomeWork: ['Updating..']
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
            <div class="content">
              {/* session 2 */}
              {tab === 'Flip Coin' && <FlipCoin />}
            </div>
        </div>
      </div>
    </>
  );
}

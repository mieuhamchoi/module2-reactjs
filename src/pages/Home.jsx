import React from 'react'
import './Home.scss'
import { useTranslation  } from 'react-i18next';

export default function Home() {
  document.title =`HW | ${'HOME PAGE'}`; 
  const { t } = useTranslation();

  
  return (
    <div className='home_container'>
        <span className='home_sologan'>{t('learnTogetherGood')}</span>
    </div>
  )
}

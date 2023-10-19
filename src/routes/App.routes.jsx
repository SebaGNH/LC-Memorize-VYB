import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { HomeNavBar } from './HomeNavBar';
import { StateInitial } from '../L_01_State/StateInitial';

export const AppRoutes = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/*' element={<HomeNavBar />}/>
        <Route path='/StateInitial' element={<StateInitial />}/>
      </Routes>
    </div>
  )
}

import React from 'react'
import Head from './Head'
import LeftSide from '../leftside/LeftSide'
import {Outlet} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

const HeadAndLeft = () => {
  return (
    <div>
      <Head />
      <LeftSide />
      <Outlet />
      
    </div>
  );
}

export default HeadAndLeft

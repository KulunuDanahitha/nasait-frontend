import React from 'react'
import './ownerSideBar.css'

const OwnerSideBar = () => {
  return (
    <div>
      <ul className='sidebar'> 

      {/* Dashboard */}
      <span className='left-title'> Owner </span>

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
            </a>

        </li>

        {/* Check Price */}

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-coin"></i>
            <span> Check Price </span>
            </a>

        </li>

        {/* Discount */}

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-calculator"></i>
            <span> Discount </span>
            </a>

        </li>


        {/* Reports */}


        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-clipboard2-data"></i>
            <span> Reports </span>
            </a>

        </li>

        {/* Forecasting */}


        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-graph-up-arrow"></i>
            <span> Forecasting </span>
            </a>

        </li>

        {/* Create User Accounts */}


        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-person-add"></i>
            <span> Create Account </span>
            </a>

        </li>


      </ul>
    </div>
  )
}

export default OwnerSideBar

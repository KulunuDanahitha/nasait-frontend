import React from 'react'
import './adminSideBar.css'

const AdminSideBar = () => {
  return (
    <div>
    <ul className='sidebar'> 

      {/* Dashboard */}
      <span className='left-title'> Admin </span>

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-grid"></i>
            
             <span>Dashboard</span>
            
            </a>

        </li>

        {/* Suppliers */}

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-truck"></i>
            <span> Suppliers </span>
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

        
        {/* Customer */}


        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-people"></i>
            <span> Customer </span>
            </a>

        </li>

        {/* Update Items */}


        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-arrow-repeat"></i>
            <span> Update Items </span>
            </a>

        </li>

        {/* Add Items */}


        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-plus-square"></i>
            <span> Add Items </span>
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

      </ul>
      
    </div>
  )
}

export default AdminSideBar

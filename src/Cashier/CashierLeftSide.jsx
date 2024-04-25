import React from 'react'
import './cashierLeftside.css'

const CashierLeftSide = () => {
  return (
    <div>

    <ul className='sidebar'> 

      {/* Dashboard */}
      <span className='left-title'> Cashier </span>

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
            </a>

        </li>

        {/* Create Bill */}

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-receipt-cutoff"></i>
            <span> Create Bill </span>
            </a>

        </li>

        {/* Check Price */}

        <li className='left-item'>
            <a className='left-link' href='/'>
            <i class="bi bi-coin"></i>
            <span> Check Price </span>
            </a>

        </li>



      </ul>


      
    </div>
  )
}

export default CashierLeftSide

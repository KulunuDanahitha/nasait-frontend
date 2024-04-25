import React from 'react'
import './leftSide.css'
import { Link } from 'react-router-dom'

const LeftSide = () => {
  return (
    <div>
      <ul className="sidebar">
        {/* Dashboard */}
        <span className="left-title"> Admin </span>

        <li className="left-item">
          <Link to="/headandleft/dashboard">
            <a className="left-link" href="/">
              <i class="bi bi-grid"></i>

              <span>Dashboard</span>
            </a>
          </Link>

          {/*  <Link to="/addsupplier">  <button className='addSupplierbtn'> Add new Supplier   </button></Link>  */}
        </li>

        {/* Suppliers */}

        <li className="left-item">
          <Link to="/headandleft/supplierManagement">
            <a className="left-link" href="/">
              <i class="bi bi-truck"></i>
              <span> Suppliers </span>
            </a>
          </Link>
        </li>

        {/* Check Price */}

        <li className="left-item">
          <Link to="/checkprice">
            <a className="left-link" href="/">
              <i class="bi bi-coin"></i>
              <span> Check Price </span>
            </a>
          </Link>
        </li>

        {/* Discount */}

        <li className="left-item">
          
            <a className="left-link" href="/">
              <i class="bi bi-calculator"></i>
              <span> Discount </span>
            </a>
          
        </li>

        {/* Customer */}

        <li className="left-item">
          <Link to="/headandleft/customermanagement">
            <a className="left-link" href="/">
              <i class="bi bi-people"></i>
              <span> Customer </span>
            </a>
          </Link>
        </li>

        {/* Update Items */}

        <li className="left-item">
          <a className="left-link" href="/">
            <i class="bi bi-arrow-repeat"></i>
            <span> Update Items </span>
          </a>
        </li>

        {/* Add Items */}

        <li className="left-item">
          <a className="left-link" href="/">
            <i class="bi bi-plus-square"></i>
            <span> Add Items </span>
          </a>
        </li>

        {/* Reports */}

        <li className="left-item">
          <a className="left-link" href="/">
            <i class="bi bi-clipboard2-data"></i>
            <span> Reports </span>
          </a>
        </li>

        {/* Forecasting */}

        <li className="left-item">
          <a className="left-link" href="/">
            <i class="bi bi-graph-up-arrow"></i>
            <span> Forecasting </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftSide

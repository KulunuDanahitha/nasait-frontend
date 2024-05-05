import React from 'react'
import './addStock.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const AddStock = () => {

    const [stock, setStock] = useState({
        itemid: "",
        supplierid: "",
        quantity: "",
        purchaseprice: "",
        sellprice: "",
        description: "",
        date: "",

    });

    //   const [errors, setErrors] = useState({});
      const navigate = useNavigate();

        // const handleChange = (e) => {
        //     const { name, value } = e.target;
        //     setStock((prevStock) => ({ ...prevStock, [name]: value }));
        // };


         const handleChange = (e) => {
        setStock((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8081/addstock", stock);
        navigate("/headandleft/manageitem");
      } catch (err) {
        console.log(err);
      }
    };




  return (
    <div>
      <div>
        <div className="AddCategory">
          <div>
            <div className="addcategoryformcontainer">
              <h2 className="create-account"> Add Stock </h2>

              <div className="input-group">
                <label htmlFor="itemid" className="label-left">
                  Item ID
                </label>
                <input
                  type="text"
                  id="itemid"
                  onChange={handleChange}
                  name="itemid"
                  className="input-right"
                />
              </div>
              <div className="input-group">
                <label htmlFor="supplierid" className="label-left">
                  Supplier ID
                </label>
                <input
                  type="text"
                  id="supplierid"
                  onChange={handleChange}
                  name="supplierid"
                  className="input-right"
                />
              </div>

              <div className="input-group">
                <label htmlFor="quantity" className="label-left">
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  onChange={handleChange}
                  name="quantity"
                  className="input-right"
                />
              </div>

              <div className="input-group">
                <label htmlFor="purchaseprice" className="label-left">
                  Purchase Price
                </label>
                <input
                  type="text"
                  id="purchaseprice"
                  onChange={handleChange}
                  name="purchaseprice"
                  className="input-right"
                />
              </div>

              <div className="input-group">
                <label htmlFor="sellprice" className="label-left">
                  Selling Price
                </label>
                <input
                  type="text"
                  id="sellprice"
                  onChange={handleChange}
                  name="sellprice"
                  className="input-right"
                />
              </div>

              <div className="input-group">
                <label htmlFor="description" className="label-left">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  onChange={handleChange}
                  name="description"
                  className="input-right"
                />
              </div>

              <div className="input-group">
                <label htmlFor="date" className="label-left">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  onChange={handleChange}
                  name="date"
                  className="input-right"
                />
              </div>

              {/* Image Upload */}

              {/* <div className="input-group">
                <label htmlFor="image" className="label-left">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  //   onChange={handleFile}
                  className="input-right"
                />
              </div> */}

              <div className="button-group">
                <Link to="/headandleft/manageitem">
                  <button className="cancel-button"> Back </button>
                </Link>

                <button className="addstockbttn" onClick={handleClick}>
                  Add Stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStock

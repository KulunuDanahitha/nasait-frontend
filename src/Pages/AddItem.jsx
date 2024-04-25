import React from 'react'
import './additem.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";



const AddItem = () => {


      const [items, setItems] = useState({
        itemId: "",
        itemname: "",
        categoryname: "",
        brandname: "",
        description: "",
        image: "",
      });


       const [errors, setErrors] = useState({});
       const navigate = useNavigate();


         const handleChange = (e) => {
           const { name, value } = e.target;
           let error = { ...errors };


           setErrors(error); // Set errors object
           setItems((prev) => ({ ...prev, [name]: value }));
         };

           const handleClick = async (e) => {
             e.preventDefault();

             try {
               await axios.post("http://localhost:8081/item", items);
               navigate("/");
             } catch (err) {
               console.log(err);
             }
           };

  return (
    <div>
      <div>
        <div className="AddItem">
          <div className="form-container">
            <h2 className="edit-account"> Add New Item </h2>
            <div className="input-group">
              <label htmlFor="itemname" className="label-left">
                Item Name
              </label>
              <input
                type="text"
                id="itemname"
                onChange={handleChange}
                name="itemname"
                className="input-right"
              />
            </div>
            <div className="input-group">
              <label htmlFor="categoryname" className="label-left">
                Category Name
              </label>
              <select
                type="text"
                id="categoryname"
                onChange={handleChange}
                name="categoryname"
                className="input-right"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="brandname" className="label-left">
                Brand
              </label>
              <input
                type="text"
                id="brandname"
                onChange={handleChange}
                name="brandname"
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
              <label htmlFor="image" className="label-left">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </div>

            <div className="button-group">
              <Link to="/">
                <button className="cancel-button"> Cancel </button>
              </Link>
              <button className="save-changes-button" onClick={handleClick}>
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem
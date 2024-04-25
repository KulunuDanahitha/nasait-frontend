import React from 'react'
import './addcategory.css'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from 'react';

const AddCategory = () => {



    const [categories, setCategories] = useState({
      categoryName: "",
      description: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      let error = { ...errors };

  

      setErrors(error); // Set errors object
      setCategories((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = async (e) => {
      e.preventDefault();

      try {
        await axios.post("http://localhost:8081/category", categories);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };




  return (
    <div>
      <div className="AddCategory">
        <div>
          <div className="addcategoryformcontainer">
            <h2 className="create-account"> Add Category </h2>
            <div className="input-group">
              <label htmlFor="categoryName" className="label-left">
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                onChange={handleChange}
                name="categoryName"
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

            <div className="button-group">
              <Link to="/">
                <button className="cancel-button"> Back </button>
              </Link>

              <button className="addcategorysubmitbttn" onClick={handleClick}>
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory

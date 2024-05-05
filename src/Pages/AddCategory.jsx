import React from 'react'
import './addcategory.css'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const AddCategory = () => {



    const [categories, setCategories] = useState({
      categoryName: "",
      description: "",

    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [file, setFile] = useState();
    const [data, setData] = useState();


    const handleFile = (e) => {

      setFile(e.target.files[0]);
    }

    

    const handleChange = (e) => {

    
      const { name, value } = e.target;
      let error = { ...errors };

  

      setErrors(error); // Set errors object
      setCategories((prev) => ({ ...prev, [name]: value }));
    };

    // const handleClick = async (e) => {

    //     const formdata = new FormData();
    //     formdata.append("image", file);

    //   e.preventDefault();

    //   try {
    //     const categoryResponse = await axios.post("http://localhost:8081/category", categories);
    //     const categoryId = categoryResponse.data.categoryId;
    //     await axios.post(
    //       `http://localhost:8081/upload/${categoryId}`,
    //       formdata
    //     );
    //     navigate("/headandleft/categorymanage");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

const handleClick = async (e) => {
  e.preventDefault();

  try {
    const categoryResponse = await axios.post(
      "http://localhost:8081/category",
      categories
    );
    const categoryId = categoryResponse.data.categoryId;

    const formdata = new FormData();
    formdata.append("image", file);

    await axios.post(`http://localhost:8081/upload/${categoryId}`, formdata);

    navigate("/headandleft/categorymanage");
  } catch (err) {
    console.error("Error while adding category and uploading image:", err);
    // Here you can set an error state to display a message to the user
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



            {/* Image Upload */}


            <div className="input-group">
              <label htmlFor="image" className="label-left">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFile}
                className="input-right"
              />
            </div>

            <div className="button-group">
              <Link to="/headandleft/categorymanage">
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

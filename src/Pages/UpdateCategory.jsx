import React from "react";
import "./addcategory.css";
import "./updatecategory.css";


import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateCategory() {
  const [categories, setCategories] = React.useState({
    categoryName: "",
    description: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/category/${categoryId}`
        );
        const data = response.data;
        if (data && data.length > 0) {
          const fetchCategory = data[0]; // Assuming there is only one Category with the specified ID
          setCategories({
            categoryName: fetchCategory.categoryname,
            description: fetchCategory.description,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategory();
  }, [categoryId]);









  const handleChange = (e) => {   
    setCategories((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8081/category/${categoryId}`, categories);
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
            <h2 className="create-account"> Update Category </h2>
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
                value={categories.categoryName}
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
                value={categories.description}
              />
            </div>

            <div className="button-group">
              <Link to="/">
                <button className="cancel-button"> Back </button>
              </Link>

              <button className="updatecategorybttn" onClick={handleClick}>
                Update Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;

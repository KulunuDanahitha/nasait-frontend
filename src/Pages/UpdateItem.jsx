import React from 'react'
import './additem.css'
import './updateitem.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'



const UpdateItem = () => {
    

    const [items, setItems] = useState({
      itemId: "",
      itemname: "",
      categoryname: "",
      brandname: "",
      description: "",
    });


      const navigate = useNavigate();
      const location = useLocation();
      const itemId = location.pathname.split("/")[2];


      useEffect(() => {
        const fecthItem = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8081/item/${itemId}`
            );
            const data = response.data;
            if (data && data.length > 0) {
              const fecthItem = data[0]; // Assuming there is only one discount with the specified ID
              setItems({
                itemname: fecthItem.itemname,
                categoryname: fecthItem.categoryname,
                brandname: fecthItem.brandname,
                description: fecthItem.description,
              });
            }
          } catch (err) {
            console.log(err);
          }
        };

        fecthItem();
      }, [itemId]);

       const handleChange = (e) => {
         setItems((prev) => ({ ...prev, [e.target.name]: e.target.value }));
       };


  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8081/item/${itemId}`, items);

    
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
                defaultValue="John1234"
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
                defaultValue="Perera12"
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
                defaultValue="DELL"
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
                defaultValue="Matara12"
              />
            </div>

            <div className="input-group">
              <label htmlFor="image" className="label-left">
                Image
              </label>
              <input type="file" id="image" onChange={handleChange} />
            </div>

            <div className="button-group">
               <Link to="/"> 
              <button className="cancel-button"> Cancel </button>
               </Link>  
              <button className="save-changes-button" onClick={handleClick}> Add Item </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateItem
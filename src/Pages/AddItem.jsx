import React from 'react'
import './additem.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



const AddItem = () => {


      const [items, setItems] = useState({
        itemId: "",
        itemname: "",
        categoryId: "",
        brandname: "",
        description: "",
     
      });

      
      const [category, setCategory] = useState([]);

      useEffect(() => {
        const fecthAllcategory= async () => {
          try {
            const res = await axios.get("http://localhost:8081/category");
            setCategory(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fecthAllcategory();
      }, []);


       const [errors, setErrors] = useState({});

    

        const [file, setFile] = useState();
         const [data, setData] = useState();

           const handleFile = (e) => {
                setFile(e.target.files[0]);
              };
     

 

           
    const handleChange = (e) => {
      const { name, value } = e.target;
      let error = { ...errors };

      setErrors(error); // Set errors object
      setItems((prev) => ({ ...prev, [name]: value }));
    };
           

   const navigate = useNavigate();
   


          const handleClick = async (e) => {
            e.preventDefault();

            

            try {
              const itemResponse = await axios.post(
                "http://localhost:8081/item",
                items
              );
              const itemId = itemResponse.data.itemId;

               const formdata = new FormData();
               formdata.append("image", file);

              await axios.post(
                `http://localhost:8081/upload/${itemId}`,
                formdata
              ).then(response => {
                  console.log(response.data.Message);
                  navigate("/headandleft/manageitem");
                })

              navigate("/headandleft/manageitem");
            } catch (err) {
              console.error(
                "Error while adding category and uploading image:",
                err
              );
              // Here you can set an error state to display a message to the user
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
              <label htmlFor="categoryId" className="label-left">
                Category Id
              </label>
              <select
                type="text"
                id="categoryId"
                onChange={handleChange}
                name="categoryId"
                className="input-right"
              >
                {category.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_id}
                  </option>
                ))}
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
                onChange={handleFile}
              />
            </div>

            <div className="button-group">
              <Link to="/headandleft/manageitem">
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
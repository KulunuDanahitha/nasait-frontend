import React from "react";
import "./manageitem.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

const ManageItem = () => {
  const [category, setCategory] = useState([]);

  const [data, setData] = useState([]);
  //const [file, setFile] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fecthAllcategory = async () => {
      try {
        const res = await axios.get("http://localhost:8081/category");
        setCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllcategory();
  }, []);

  return (
    <div className="manageitem">
      <div className="row1">
        <h1> Add Items & Add Stock</h1>
        <br></br>

        <div className="twobttns">
          <Link to="/headandleft/addstock">
            <button className="addstockbutton"> Add Stock </button>
          </Link>

          <Link to="/headandleft/additem">
            <button className="addnewitembttn"> Add New Item </button>
          </Link>
        </div>
      </div>

      <div className="item-container">
        {category.map((category) => (
          <div key={category.id}>
         
            {/* <Link key={category.id}> */}

            <Link to={`/headandleft/displayitems/${category.category_id}`}>
              <Card
                style={{
                  width: "350px",
                  height: "350px",
                  margintop: "15px",
                  marginBottom: "15px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <Card.Body>
                  {category.image && (
                    <Card.Img
                      src={`http://localhost:8081/images/` + category.image}
                      style={{
                        width: "350px",
                        height: "350px",
                        margin: "-16px",
                      }}
                    />
                  )}
                </Card.Body>
              </Card>
            </Link>
            </div>
       
        ))}
      </div>
    </div>
  );
};


export default ManageItem;
import React from "react";
import "./manageitem.css";
import keyboard from "../images/keyboard.jpg";
//import one from "../images/01.jpg";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import { ListItem } from "@mui/material";



const ManageItem = () => {
  const [item, setItem] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  // useEffect(() => {
  //   const fetchAllItem = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8081/item");
  //       console.log("Fetched data:", res.data); // Log fetched data
        
  //       setItem(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllItem();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8081/item");
        console.log(res);
        setItem(res.data)
        // console.log(res.data.image.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., show a message to the user
      }
    };

    fetchData();
  }, []);

    // useEffect(() => {
    //   // Fetch data from your API
    //   fetch("your_api_endpoint")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Convert BLOB data to URLs or Base64 strings
    //       const imageUrls = data.map((blobData) => {
    //         const imageUrl = `data:image/jpeg;base64,${blobData}`;
    //         return imageUrl;
    //       });

    //       setImages(imageUrls);
    //     })
    //     .catch((error) => console.error(error));
    // }, []);

  // console.log("Items state:", item); // Log state for debugging


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/item/${id}`);
      //setSupplier(supplier.filter(item => item.supplier_id !== id));
      //await axios.delete("http://localhost:8081/supplier/"+id)
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="manageitem">
      <h1> Manage Item </h1>
      <Link to="/additem">
        <button className="addcustomerbttn"> Add New Item </button>
      </Link>
      <div className="item-container">
        {item.map((item) => (
          <Card
            key={item.id}
            style={{
              width: "301px",
              height: "450px",
              margin: "10px",
            }}
          >
            <Card.Body>
              {/* <Card.Img variant="top" src={item.image} /> */}
              {/*{item.image && (
                <Card.Img
                  variant="top"
                  src={`data:image/jpeg;base64,${Buffer.from(
                    item.image.data
                  ).toString("base64")}`}
                /> */}
              <Card.Title>{item.itemname}</Card.Title>
              {/* <Card.Title>{item.itemname}</Card.Title> */}

              {item.image && (
                <Card.Img
                  variant="top"
                  src={`data:image/jpeg;base64,${item.image}`}
                  style={{ width: "260px", height: "150px", margin: "2px" }}
                />
              )}

              {/* <Card.Title>{item.item_id}</Card.Title>
              <Card.Title>{item.itemname}</Card.Title> */}
              <Card.Text>{item.categoryname}</Card.Text>
              <Card.Text>{item.brandname}</Card.Text>
              <Card.Text>{item.description}</Card.Text>

              <Link to={`/updateitem/${item.item_id}`}>
                <button variant="primary" className="left-button">
                  <i class="bi bi-pencil-fill"></i>
                </button>
              </Link>

              {/* <Link to={`/headandleft/updatesupplier/${supplier.supplier_id}`}>
                {" "}
                <i class="bi bi-pencil-fill"> </i>{" "}
              </Link> */}
              <button
                variant="primary"
                className="middle-button"
                onClick={() => handleDelete(item.item_id)}
              >
                <i class="bi bi-trash3-fill"></i>
              </button>
              <button variant="primary" className="viewmorebutton">
                View More
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageItem;

import React, { useState, useEffect } from "react";
import "./displayItem.css";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const DisplayItems = ({ categoryId }) => {
  const [items, setItems] = useState([]);
  const location = useLocation()
  //get location from params

const categoryid = location.pathname.split("/")[3];
console.log(categoryid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(categoryid);
        const itemsResponse = await axios.get(
          `http://localhost:8081/items/${categoryid}`
        );
        console.log(itemsResponse);
        setItems(itemsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [categoryid]);

  return (
    <div className="displayitem" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "10px" }}>
      {items &&
        items?.map((item, index) => (
          <Card
            key={index}
            style={{
              width: "250px",
              height: "350px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <Card.Body>
              <Card.Title>{item.itemname}</Card.Title>
              {/* Add more card details as needed */}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default DisplayItems;
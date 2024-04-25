import React from "react";
import "./dashboard.css";

import Head from "../components/Head";
import LeftSide from "../leftside/LeftSide";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
  return (
    <div className="fulldashboard">
      <h1> Dashboard </h1>

      <div className="row">
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title> Profit </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title> Profit </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title> Total Supplier </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

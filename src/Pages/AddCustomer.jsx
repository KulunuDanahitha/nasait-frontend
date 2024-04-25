import React, { useState } from 'react';
import './addCustomer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddCustomer = () => {
    const [customers, setCustomers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };



    // Validation functions
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^(0\d{9})$/; // Matches Sri Lankan phone number format
        return regex.test(phoneNumber);
    };

    const handleClick = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!customers.firstName || !customers.lastName || !customers.email || !customers.address || !customers.phoneNumber) {
            window.alert("All fields are required");
            return;
        }

        if (!validateEmail(customers.email)) {
            window.alert("Invalid email format");
            return;
        }

        if (!validatePhoneNumber(customers.phoneNumber)) {
            window.alert("Invalid phone number format");
            return;
        }

        try {
            await axios.post("http://localhost:8081/customer", customers);
            navigate("/headandleft/customermanagement");
        } catch (err) {
            console.log(err);
        }
    };

    return (
      <div className="addCustomer">
        <div>
          <div className="addcustomerformcontainer">
            <h2 className="create-account"> Add Customer </h2>
            <div className="input-group">
              <label htmlFor="firstName" className="label-left">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                onChange={handleChange}
                name="firstName"
                className="input-right"
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName" className="label-left">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                onChange={handleChange}
                name="lastName"
                className="input-right"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label-left">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                name="email"
                className="input-right"
              />
            </div>
            <div className="input-group">
              <label htmlFor="address" className="label-left">
                {" "}
                Address{" "}
              </label>
              <input
                type="text"
                id="address"
                onChange={handleChange}
                name="address"
                className="input-right"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phonenumber" className="label-left">
                {" "}
                Phone Number{" "}
              </label>
              <input
                type="text"
                id="phonenumber"
                onChange={handleChange}
                name="phoneNumber"
                className="input-right"
              />
            </div>
            <div className="button-group">
              <Link to="/headandleft/customermanagement">
                {" "}
                <button className="cancel-button"> Back </button>{" "}
              </Link>

              <button className="addcustomersubmitbutton" onClick={handleClick}>
                {" "}
                Add Customer{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddCustomer;

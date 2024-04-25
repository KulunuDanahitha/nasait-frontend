import React, { useState } from 'react';
import './addSupplier.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddSupplier = () => {
    const [suppliers, setSuppliers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        shopname: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSuppliers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        if (!suppliers.firstName || !suppliers.lastName || !suppliers.email || !suppliers.address || !suppliers.phoneNumber || !suppliers.shopname) {
            window.alert("All fields are required");
            return;
        }

        if (!validateEmail(suppliers.email)) {
            window.alert("Invalid email format");
            return;
        }

        if (!validatePhoneNumber(suppliers.phoneNumber)) {
            window.alert("Invalid phone number format");
            return;
        }

        try {
            await axios.post("http://localhost:8081/supplier", suppliers);
            navigate("/headandleft/supplierManagement");
        } catch (err) {
            console.log(err);
        }
    };

    return (
      <div className="addSupplier">
        <div>
          <div className="addsupplierformcontainer">
            <h2 className="create-account"> Add Supplier </h2>
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
            <div className="input-group">
              <label htmlFor="shopname" className="label-left">
                {" "}
                Shop Name{" "}
              </label>
              <input
                type="text"
                id="shopname"
                onChange={handleChange}
                name="shopname"
                className="input-right"
              />
            </div>
            <div className="button-group">
              <Link to="/headandleft/supplierManagement">
                {" "}
                <button className="cancel-button"> Back </button>{" "}
              </Link>

              <button className="addsuppliersubmitbutton" onClick={handleClick}>
                {" "}
                Add Supplier{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddSupplier;

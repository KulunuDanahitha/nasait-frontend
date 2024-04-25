import React, { useState } from 'react';
import './addCustomer.css';
import './updateCustomer.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdateCustomer = () => {
    const [customers, setCustomers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const customerId = location.pathname.split("/")[3];

    useEffect(() => {
    const fecthCustomer = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/customer/${customerId}`);
            const data = response.data;
            if (data && data.length > 0) {
                const fecthedCustomer = data[0]; // Assuming there is only one supplier with the specified ID
                setCustomers({
                    firstName: fecthedCustomer.firstname,
                    lastName: fecthedCustomer.lastname,
                    email: fecthedCustomer.email,
                    address: fecthedCustomer.address,
                    phoneNumber: fecthedCustomer.phonenumber,
                    shopname: fecthedCustomer.shopname
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    fecthCustomer();
}, [customerId]);

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
            await axios.put(`http://localhost:8081/customer/${customerId}`, customers);
            navigate("/headandleft/customermanagement");
        } catch (err) {
            console.log(err);
        }
    };

    return (
      <div className="addCustomer">
        <div>
          <div className="addcustomerformcontainer">
            <h2 className="create-account"> Update the Customer </h2>
            <div className="input-group">
              <label htmlFor="firstName" className="label-left">
                {" "}
                First Name:{" "}
              </label>
              <input
                type="text"
                id="firstName"
                onChange={handleChange}
                name="firstName"
                className="input-right"
                value={customers.firstName}
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
                value={customers.lastName}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="label-left">
                {" "}
                Email{" "}
              </label>
              <input
                type="text"
                id="email"
                onChange={handleChange}
                name="email"
                className="input-right"
                value={customers.email}
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
                value={customers.address}
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
                value={customers.phoneNumber}
              />
            </div>
            <div className="button-group">
              <Link to="/headandleft/customermanagement">
                {" "}
                <button className="cancel-button"> Back </button>{" "}
              </Link>

              <button className="addcustomersubmitbutton" onClick={handleClick}>
                {" "}
                Update Customers{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateCustomer;

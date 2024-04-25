import React, { useState, useEffect } from 'react';
import './addSupplier.css';
import './updateSupplie.css';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const UpdateSupplier = () => {
    const [suppliers, setSuppliers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        shopname: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const supplierId = location.pathname.split("/")[3];

    // useEffect(() => {
    //     // Fetch supplier data and populate the form fields
    //     const fetchSupplier = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8081/supplier/${supplierId}`);
    //             const data = response.data;
    //             setSuppliers(data); // Update state with fetched data
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchSupplier();
    // }, [supplierId]);

    useEffect(() => {
    const fetchSupplier = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/supplier/${supplierId}`);
            const data = response.data;
            if (data && data.length > 0) {
                const fetchedSupplier = data[0]; // Assuming there is only one supplier with the specified ID
                setSuppliers({
                    firstName: fetchedSupplier.firstname,
                    lastName: fetchedSupplier.lastname,
                    email: fetchedSupplier.email,
                    address: fetchedSupplier.address,
                    phoneNumber: fetchedSupplier.phonenumber,
                    shopname: fetchedSupplier.shopname
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    fetchSupplier();
}, [supplierId]);

    const handleChange = (e) => {
        setSuppliers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    

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
            await axios.put(`http://localhost:8081/supplier/${supplierId}`, suppliers);
            navigate("/headandleft/suppliermanagement");
        } catch (err) {
            console.log(err);
        }
    };

    return (
      <div className="addSupplier">
        <div>
          <div className="addsupplierformcontainer">
            <h2 className="create-account"> Update the Supplier </h2>
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
                value={suppliers.firstName}
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
                value={suppliers.lastName}
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
                value={suppliers.email}
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
                value={suppliers.address}
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
                value={suppliers.phoneNumber}
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
                value={suppliers.shopname}
              />
            </div>
            <div className="button-group">
              <Link to="/headandleft/suppliermanagement">
                {" "}
                <button className="canselsuppliersubmitbutton">
                  {" "}
                  Back{" "}
                </button>{" "}
              </Link>
              <button
                className="updatesuppliersubmitbutton"
                onClick={handleClick}
              >
                {" "}
                Update Supplier{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateSupplier;
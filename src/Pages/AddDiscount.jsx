import React, { useState } from "react";
import "./addDiscount.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddDiscount = () => {
  const [discounts, setDiscounts] = useState({
    itemId: "",
    discountName: "",
    value: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = { ...errors };

    // Validate itemId and value fields
    if (name === "itemId") {
      // Allow only numbers for itemId
      if (!/^\d*$/.test(value)) {
        error.itemId = "Item ID must contain only numbers.";
      } else {
        error.itemId = ""; // Clear the error if valid
      }
    } else if (name === "value") {
      // Allow only numbers or decimal for value
      if (!/^\d*\.?\d*$/.test(value)) {
        error.value = "Value must be a valid number.";
      } else {
        error.value = ""; // Clear the error if valid
      }
    }

    setErrors(error); // Set errors object
    setDiscounts((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (!discounts.itemId || !discounts.value) {
      alert("Item ID and Value are required.");
      return; // Exit if required fields are not filled
    }

    // Check for errors
    if (errors.itemId || errors.value) {
      alert("Please fix the validation errors.");
      return; // Exit if validation fails
    }

    try {
      await axios.post("http://localhost:8081/discount", discounts);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addDiscount">
      <div>
        <div className="adddiscountformcontainer">
          <h2 className="create-account"> Add Discount </h2>
          <div className="input-group">
            <label htmlFor="itemId" className="label-left">
              Item ID:
            </label>
            <input
              type="text"
              id="itemId"
              onChange={handleChange}
              name="itemId"
              className="input-right"
            />
            {errors.itemId && <p className="error-msg">{errors.itemId}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="discountName" className="label-left">
              Discount Name:
            </label>
            <input
              type="text"
              id="discountName"
              onChange={handleChange}
              name="discountName"
              className="input-right"
            />
          </div>
          <div className="input-group">
            <label htmlFor="value" className="label-left">
              Value:
            </label>
            <input
              type="text"
              id="value"
              onChange={handleChange}
              name="value"
              className="input-right"
            />
            {errors.value && <p className="error-msg">{errors.value}</p>}
          </div>

          <div className="button-group">
            <Link to="/">
              <button className="cancel-button"> Back </button>
            </Link>

            <button className="adddiscountsubmitbutton" onClick={handleClick}>
              Add Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDiscount;

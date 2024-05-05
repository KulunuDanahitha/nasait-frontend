import React, { useState } from "react";
import "./updatediscount.css"
import "./addDiscount.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UpdateDiscount = () => {
const [discounts, setDiscounts] = useState({
  itemId: "",
  discountName: "",
  value: "",
});

  const navigate = useNavigate();
  const location = useLocation();
  const discountId = location.pathname.split("/")[3];

  useEffect(() => {
    const fecthDiscount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/discount/${discountId}`
        );
        const data = response.data;
        if (data && data.length > 0) {
          const fecthDiscount = data[0]; // Assuming there is only one discount with the specified ID
          setDiscounts({
            itemId: fecthDiscount.item_id,
            discountName: fecthDiscount.discount_name,
            value: fecthDiscount.value,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fecthDiscount();
  }, [discountId]);

  const handleChange = (e) => {
    setDiscounts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8081/discount/${discountId}`,
        discounts
      );

      //await axios.put(`http://localhost:8081/customer/${customerId}`, customers);
      navigate("/headandleft/discountmanage");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addDiscount">
      <div>
        <div className="adddiscountformcontainer">
          <h2 className="create-account"> Update Discount </h2>
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
              value={discounts.itemId}
            />
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
              value={discounts.discountName}
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
              value={discounts.value}
            />
          </div>

          <div className="button-group">
            <Link to="/headandleft/discountmanage">
              <button className="cancel-button"> Back </button>
            </Link>

            <button
              className="updatediscountsubmitbutton"
              onClick={handleClick}
            >
              Update Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDiscount;

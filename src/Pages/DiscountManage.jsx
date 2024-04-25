import React from 'react'
import './discountmanage.css'

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const DiscountManage = () => {


      const [discount, setDiscount] = useState([]);

      useEffect(() => {
        const fecthAlldiscount = async () => {
          try {
            const res = await axios.get("http://localhost:8081/discount");
            setDiscount(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fecthAlldiscount();
      }, []);


      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8081/discount/${id}`);
          //setSupplier(supplier.filter(item => item.supplier_id !== id));
          //await axios.delete("http://localhost:8081/supplier/"+id)
          window.location.reload();
        } catch (e) {
          console.log(e);
        }
      };




  return (
    <div className="discountmanage">
      <h1> Discount Manage </h1>

      <Link to="/adddiscount">
        <button className="adddiscountbutton">Add new Discount </button>
      </Link>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Discount ID </TableCell>
              <TableCell align="center"> Item ID </TableCell>
              <TableCell align="right"> Discount Name </TableCell>

              <TableCell align="right"> Value </TableCell>
              <TableCell align="center"> Status </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {discount.map((discount) => (
              <TableRow
                key={discount.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {discount.discount_id}
                </TableCell>
                <TableCell align="center">{discount.item_id}</TableCell>
                <TableCell align="right">{discount.discount_name}</TableCell>
                <TableCell align="right">{discount.value}</TableCell>

                <TableCell align="center">
                  {" "}
                  <div className="supplierstatus">
                    <Link to={`/updatediscount/${discount.discount_id}`}>
                      
                      <i class="bi bi-pencil-fill"></i>
                    </Link>
                    <i
                      class="bi bi-trash-fill"
                      onClick={() => handleDelete(discount.discount_id)}
                    >
                      {" "}
                    </i>{" "}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DiscountManage

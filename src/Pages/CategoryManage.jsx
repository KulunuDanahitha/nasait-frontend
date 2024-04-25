import React from 'react'

import './categorymanage.css'

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


const CategoryManage = () => {


          const [category, setCategory] = useState([]);

          useEffect(() => {
            const fecthAllcategory = async () => {
              try {
                const res = await axios.get("http://localhost:8081/category");
                setCategory(res.data);
              } catch (err) {
                console.log(err);
              }
            };
            fecthAllcategory();
          }, []);


                const handleDelete = async (id) => {
                  try {
                    await axios.delete(`http://localhost:8081/category/${id}`);
                    //setSupplier(supplier.filter(item => item.supplier_id !== id));
                    //await axios.delete("http://localhost:8081/supplier/"+id)
                    window.location.reload();
                  } catch (e) {
                    console.log(e);
                  }
                };




  return (
    <div className="categorymanage">
      <h1> Category Manage </h1>

      <Link to="/addcategory">
        <button className="addcategorybutton"> Add new Category </button>
      </Link>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Category ID </TableCell>
              <TableCell align="right"> Category Name </TableCell>

              <TableCell align="right"> Description </TableCell>
              <TableCell align="center"> Status </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((category) => (
              <TableRow
                key={category.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.category_id}
                </TableCell>

                <TableCell align="right">{category.categoryname}</TableCell>
                <TableCell align="right">{category.description}</TableCell>

                <TableCell align="center">
                  <div className="supplierstatus">
                    <Link to={`/updatecategory/${category.category_id}`}>
                      <i class="bi bi-pencil-fill"></i>
                    </Link>
                    <i
                      class="bi bi-trash-fill"
                      onClick={() => handleDelete(category.category_id)}
                    ></i>
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

export default CategoryManage

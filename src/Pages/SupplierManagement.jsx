import * as React from 'react';
import './customerManagement.css'
//import UpdateSupplier from './UpdateSupplier';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const SupplierManagement = () => {

  const [supplier, setSupplier] = useState([])

useEffect(() => {
  const fecthAllsupplier = async () => {
    try{
      const res = await axios.get("http://localhost:8081/supplier")
      setSupplier(res.data);
    }catch(err){
      console.log(err)
    }
  }
  fecthAllsupplier()
},[])

const handleDelete = async (id) => {

  try{
    await axios.delete(`http://localhost:8081/supplier/${id}`)
    //setSupplier(supplier.filter(item => item.supplier_id !== id));
    //await axios.delete("http://localhost:8081/supplier/"+id)
    window.location.reload();
  } catch(e){
    console.log(e)  
}
}


  return (
    <div className="supplierManagement">
      <h1> Supplier Management </h1>

      

      <Link to="/headandleft/addsupplier">
        {" "}
        <button className="addSupplierbtn">Add new Supplier</button>
      </Link>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Supplier ID </TableCell>
              <TableCell align="right"> First Name </TableCell>
              <TableCell align="right"> Last Name </TableCell>
              <TableCell align="right"> Email </TableCell>
              <TableCell align="right"> Address </TableCell>
              <TableCell align="right"> Phone Number </TableCell>
              <TableCell align="right"> Shop Name </TableCell>
              <TableCell align="center"> Status </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplier.map((supplier) => (
              <TableRow
                key={supplier.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {supplier.supplier_id}
                </TableCell>
                <TableCell align="right">{supplier.firstname}</TableCell>
                <TableCell align="right">{supplier.lastname}</TableCell>
                <TableCell align="right">{supplier.email}</TableCell>
                <TableCell align="right">{supplier.address}</TableCell>
                <TableCell align="right">{supplier.phonenumber}</TableCell>

                <TableCell align="right">{supplier.shopname}</TableCell>
                <TableCell align="right">
                  {" "}
                  <div className="supplierstatus">
                    <Link
                      to={`/headandleft/updatesupplier/${supplier.supplier_id}`}
                    >
                      {" "}
                      <i class="bi bi-pencil-fill"> </i>{" "}
                    </Link>
                    <i
                      class="bi bi-trash-fill"
                      onClick={() => handleDelete(supplier.supplier_id)}
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

export default SupplierManagement

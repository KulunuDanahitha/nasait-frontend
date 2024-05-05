import * as React from 'react';
import './supplierManagement.css'
import UpdateCustomer from './UpdateCustomer';

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

const CustomerManagement = () => {
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        const fetchAllCustomer = async () => {
            try {
                const res = await axios.get("http://localhost:8081/customer")
                setCustomer(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllCustomer()
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8081/customer/${id}`);
                setCustomer(customer.filter(item => item.customer_id !== id));
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
      <div className="customermanagement">
        <h1> Customer Management</h1>
        <Link to="/headandleft/addcustomer">
          <button className="addcustomerbttn">Add new Customer</button>
        </Link>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer ID</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customer.map((customer) => (
                <TableRow
                  key={customer.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {customer.customer_id}
                  </TableCell>
                  <TableCell align="right">{customer.firstname}</TableCell>
                  <TableCell align="right">{customer.lastname}</TableCell>
                  <TableCell align="right">{customer.email}</TableCell>
                  <TableCell align="right">{customer.address}</TableCell>
                  <TableCell align="right">{customer.phonenumber}</TableCell>
                  <TableCell align="right">
                    <div className="customerstatus">
                      <Link
                        to={`/headandleft/updatecustomer/${customer.customer_id}`}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Link>
                      <i
                        className="bi bi-trash-fill"
                        onClick={() => handleDelete(customer.customer_id)}
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

export default CustomerManagement;


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"




export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent User</h3>
    <TableContainer component={Paper}
     style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
     >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr_No</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell component="th" scope="row">
               1
              </TableCell>
              <TableCell align="left">dipak@gmail.com</TableCell>
              <TableCell align="left">admin</TableCell>
              <TableCell align="left">
                <button>Edit</button>
                <button>Delete</button>
              </TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
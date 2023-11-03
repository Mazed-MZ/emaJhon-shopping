import React, { useEffect, useState } from 'react';
import './Order.css';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Order({ cart, handleClearCart }) {

  console.log(cart)
  // const cart = props.cart; --->> Option One <<---

  // const {cart} = props; -->> Option two <<--

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //-->> Handle quantity from storage to cart <<--
    // if(product.quantity === 0){
    //   product.quantity = 1
    // }
    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = total * 7 / 100;
  const grandTotal = total + totalShipping + tax;
  console.log(quantity);




  const color = deepOrange['700'];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // function createData(Information, Selected Items, Total Quantity) {
  //   return { Information, Selected Items, Total Quantity };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  return (
    <div className='cart-container'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <Typography variant='h4' color={color} spacing={2} sx={{ width: '100%' }}>Order Summary</Typography>
            <StyledTableRow>
              <StyledTableCell>Information</StyledTableCell>
              <StyledTableCell align="right">Amounts (unite $)</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Selected Items
              </StyledTableCell>
              <StyledTableCell align="right">{cart.length}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Total Quantity
              </StyledTableCell>
              <StyledTableCell align="right">{quantity}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Total Price
              </StyledTableCell>
              <StyledTableCell align="right">${total}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Shipping Charge
              </StyledTableCell>
              <StyledTableCell align="right">${totalShipping}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                VAT Added
              </StyledTableCell>
              <StyledTableCell align="right">${tax.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Grand Total
              </StyledTableCell>
              <StyledTableCell align="right">${grandTotal.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
            <a href='/order'><Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClearCart}>
              Clear Cart
            </Button></a>
          </TableBody>
        </Table>
      </TableContainer >
    </div>


    // <div className='order-cart'>
    //   <h2 className='text-4xl font-bold'>Order Summery</h2>
    //   <div className=''>
    //     <div>
    //       <p>Selected Items <span>{cart.length}</span> </p>
    //     </div>
    //   </div>
    //   <table className="">
    //     <thead>
    //       <tr>
    //         <th scope="col" colspan="2">Selected Items</th>
    //         <td className="table-info">{cart.length}</td>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="col" colspan="2">Quantity</th>
    //         <td className="table-info">{quantity}</td>
    //       </tr>
    //       <tr>
    //         <th scope="col" colspan="2">Total Price</th>
    //         <td className="table-info">${total}</td>
    //       </tr>
    //       <tr>
    //         <th scope="col" colspan="2">Total shipping charge</th>
    //         <td className="table-info">${totalShipping}</td>
    //       </tr>
    //       <tr>
    //         <th scope="col" colspan="2">Tax added</th>
    //         <td className="table-info">${tax.toFixed(2)}</td>
    //       </tr>
    //       <tr className="table-success">
    //         <th scope="col" colspan="2">Grand Total</th>
    //         <td className="table-info">${grandTotal.toFixed(2)}</td>
    //       </tr>
    //     </tbody>
    //     <button className="btn btn-outline-warning order-btn">Place Order</button>
    //   </table>

  )
}

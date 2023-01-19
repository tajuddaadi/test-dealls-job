import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'

import TableList from 'src/views/tables/TableList'
import { getAllCarts } from 'src/configs/fetchData'

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getAllCarts(setCarts, setTotal, rowsPerPage, skip)
  }, [rowsPerPage, skip])

  const columns = [
    { id: 'userId', label: 'User ID', minWidth: 170 },
    {
      id: 'total',
      label: 'Total',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'discountedTotal',
      label: 'Discounted Total',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'totalProducts',
      label: 'Total Products',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'totalQuantity',
      label: 'Total Quantity',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    { id: 'action', label: 'Action', minWidth: 100 },
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Data Cart' titleTypographyProps={{ variant: 'h6' }} />
          <TableList
            rows={carts}
            columns={columns}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            setSkip={setSkip}
            total={total}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cart

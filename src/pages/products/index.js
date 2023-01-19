// ** MUI Imports
import React, { useMemo, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'

import TableList from 'src/views/tables/TableList'
import { getAllProducts, getAllBrands } from 'src/configs/fetchData'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const Products = () => {
  const [products, setProducts] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [query, setQuery] = useState('')
  const [brands, setBrands] = useState([])
 
  useEffect(() => {
    getAllProducts(setProducts, setTotal, rowsPerPage, skip, query)
    getAllBrands(setBrands)
  }, [rowsPerPage, skip, query])

  const groupedDataBrands = brands.reduce((brands, obj) => {
    const brand = obj.brand;
    if (!brands[brand]) {
      brands[brand] = [];
    }
    brands[brand].push(obj);
    return brands;
  }, {});

  const handleChange = e => {
    e.preventDefault()
    // setTimeout(() => {
    setQuery(e.target.value)
    localStorage.removeItem('QUERY_STATE')
    localStorage.setItem('QUERY_STATE', JSON.stringify(e.target.value))
    // }, 300);
  }

  useEffect(() => {
    const dataQuery = localStorage.getItem('QUERY_STATE')
    dataQuery ? setQuery(dataQuery.replaceAll('"', '')) : setQuery('')
  }, [])

  const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'brand', label: 'Brand', minWidth: 100 },
    {
      id: 'price',
      label: 'Price',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'stock',
      label: 'Stock',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'category',
      label: 'Category',
      minWidth: 170,
      align: 'right'
    }
  ]

  const valuegroupedDataBrands = Object.values(groupedDataBrands);
  const lengthCart = valuegroupedDataBrands.map(item => item.length);
  const filteredData = products.filter(obj => obj.brand = "Apple");
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ mb: 10 }}>
          <CardHeader title='Chart Product by Brand' titleTypographyProps={{ variant: 'h6' }} />
          <Line
            style={{ padding: 10 }}
            datasetIdKey='id'
            data={{
              labels: Object.keys(groupedDataBrands),
              datasets: [
                {
                  id: 1,
                  label: '',
                  data: lengthCart
                },
              ]
            }}
          />
        </Card>
        <TextField
          value={query}
          onChange={handleChange}
          type='search'
          size='small'
          sx={{ mb: 10, '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment onChange={handleChange} position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
        <Card>
          <CardHeader title='Data Products' titleTypographyProps={{ variant: 'h6' }} />
          <TableList
            rows={filteredData}
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

export default Products

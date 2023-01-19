// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Slider from '@mui/material/Slider'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'

const TableList = ({
  rows,
  columns,
  rowsPerPage,
  setRowsPerPage,
  setSkip,
  total,
  openFilter,
  handleFilterChange,
  productFilter
}) => {
  // ** States
  const router = useRouter()
  const [page, setPage] = useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    setSkip(rowsPerPage * newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {openFilter ? (
        <Grid container spacing={6} sx={{ padding: 5 }}>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id='outlined-basic'
              label='Product Name'
              variant='outlined'
              name='title'
              value={productFilter?.title}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id='outlined-basic'
              label='Brand'
              variant='outlined'
              name='brand'
              value={productFilter?.brand}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id='outlined-basic'
              label='Category'
              variant='outlined'
              name='category'
              value={productFilter?.category}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='p'>Min Price</Typography>
            <Slider
              key={`slider-${productFilter?.price}`} /* fixed issue */
              defaultValue={productFilter?.price}
              max={10000}
              aria-label='Default'
              valueLabelDisplay='auto'
              name='price'
              onChange={handleFilterChange}
            />
          </Grid>
        </Grid>
      ) : null}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      <>
                        {column.id === 'action' ? (
                          <TableCell align='left' key={column.id}>
                            <Button
                              variant='contained'
                              size='small'
                              sx={{ color: '#fff !important' }}
                              onClick={() => router.push(`/cart/${row.id}`)}
                            >
                              Detail
                            </Button>
                          </TableCell>
                        ) : (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        )}
                      </>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component='div'
        count={parseInt(total)}
        rowsPerPage={parseInt(rowsPerPage)}
        page={parseInt(page)}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableList

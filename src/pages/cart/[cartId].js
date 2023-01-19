import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

import TableDetail from 'src/views/tables/TableDetail'
import { getCartDetail, getUserDetail } from 'src/configs/fetchData'
import { useRouter } from 'next/router'

const DetailGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingTop: `${theme.spacing(1)} !important`
  }
}))

const CartId = () => {
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    getCartDetail(setCart, router?.query?.cartId)
    getUserDetail(setUser, cart?.userId)
  }, [router?.query?.cartId, cart?.userId])

  const columns = [
    { id: 'title', label: 'Product Name', minWidth: 170 },
    {
      id: 'quantity',
      label: 'Quantity',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'discountPercentage',
      label: 'Discount Percentage',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'discountedPrice',
      label: 'Discounted Price',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'price',
      label: 'Price',
      minWidth: 170,
      align: 'right',
      format: value => value.toLocaleString('en-US')
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ mb: 10 }}>
          <CardHeader title='Cart Detail' titleTypographyProps={{ variant: 'h6' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>User</Typography>
              </Grid>
              <DetailGrid item xs={12} sm={10}>
                <Typography variant='subtitle1' sx={{ marginBottom: 2 }}>
                  {user?.firstName} {user?.lastName}
                </Typography>
              </DetailGrid>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Total Product</Typography>
              </Grid>
              <DetailGrid item xs={12} sm={10}>
                <Typography variant='subtitle1' sx={{ marginBottom: 2 }}>
                  {cart?.totalProducts}
                </Typography>
              </DetailGrid>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Total Quantity</Typography>
              </Grid>
              <DetailGrid item xs={12} sm={10}>
                <Typography variant='subtitle1' sx={{ marginBottom: 2 }}>
                  {cart?.totalQuantity}
                </Typography>
              </DetailGrid>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Discounted Total</Typography>
              </Grid>
              <DetailGrid item xs={12} sm={10}>
                <Typography variant='subtitle1' sx={{ marginBottom: 2 }}>
                  {cart?.discountedTotal}
                </Typography>
              </DetailGrid>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Total</Typography>
              </Grid>
              <DetailGrid item xs={12} sm={10}>
                <Typography variant='subtitle1' sx={{ marginBottom: 2 }}>
                  {cart?.total}
                </Typography>
              </DetailGrid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title='Product Sold' titleTypographyProps={{ variant: 'h6' }} />
          <TableDetail rows={cart?.products} columns={columns} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default CartId

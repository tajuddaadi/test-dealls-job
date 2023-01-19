// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
          Welcome, Go to products menu to see Products. Go to cart menu to see Cart
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Dashboard

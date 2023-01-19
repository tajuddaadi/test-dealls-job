// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'

const navigation = () => {
  return [
    {
      sectionTitle: 'Sections'
    },
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Products',
      icon: Table,
      path: '/products'
    },
    {
      icon: CubeOutline,
      title: 'Cart',
      path: '/cart'
    }
  ]
}

export default navigation


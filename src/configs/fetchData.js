import axios from 'axios'

const url = 'https://dummyjson.com'

export const getAllProducts = (setProducts, setTotal, rowsPerPage, skip, query) => {
  axios
    .get(`${url}/products/search?q=${query}&limit=${rowsPerPage}&skip=${skip}&select=title,brand,price,stock,category`)
    .then(response => {
      const products = response.data.products
      setProducts(products)
      setTotal(response.data.total)
    })
    .catch(error => console.error(`Error: ${error}`))
}

export const getAllBrands = setBrands => {
  axios
    .get(`${url}/products?limit=100&select=brand`)
    .then(response => {
      const products = response.data.products
      setBrands(products)
    })
    .catch(error => console.error(`Error: ${error}`))
}

export const getAllCarts = (setCarts, setTotal, rowsPerPage, skip) => {
  axios
    .get(`${url}/carts?limit=${rowsPerPage}&skip=${skip}`)
    .then(response => {
      const carts = response.data.carts
      setCarts(carts)
      setTotal(response.data.total)
    })
    .catch(error => console.error(`Error: ${error}`))
}

export const getCartDetail = (setCart, cartId) => {
  cartId
    ? axios
        .get(`${url}/carts/${cartId}`)
        .then(response => {
          const cart = response.data
          setCart(cart)
        })
        .catch(error => console.error(`Error: ${error}`))
    : null
}

export const getUserDetail = (setUser, userId) => {
  userId
    ? axios
        .get(`${url}/users/${userId}?select=firstName,lastName`)
        .then(response => {
          const user = response.data
          setUser(user)
        })
        .catch(error => console.error(`Error: ${error}`))
    : null
}

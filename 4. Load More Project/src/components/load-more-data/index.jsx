import React, { useEffect, useState } from 'react'

function LoadMore() {
  const [loading,setLoading] = useState(false)
  const [products,setProducts] = useState([])
  const [count,setCount] = useState()

  async function fetchProducts(){
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
      const result = await res.json();
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='container'>
      lore more data
    </div>
  )
}

export default LoadMore

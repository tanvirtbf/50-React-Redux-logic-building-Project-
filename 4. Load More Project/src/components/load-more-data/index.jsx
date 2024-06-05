import React, { useEffect, useState } from 'react'

function LoadMore() {
  const [loading,setLoading] = useState(false)
  const [products,setProducts] = useState([])
  const [count,setCount] = useState(0)

  async function fetchProducts(){
    try {
      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
      const result = await res.json();
      console.log(result)

      if(result && result.products && result.products.length){
        setProducts(result.products)
        setLoading(false)
      }

    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  if(loading){
    return <h1>Loading data...</h1>
  }

  return (
    <div className='container'>
      <div>
        {
          products && products.length ? products.map((item) => <div key={item.id}>

          </div>) : null
        }
      </div>
    </div>
  )
}

export default LoadMore

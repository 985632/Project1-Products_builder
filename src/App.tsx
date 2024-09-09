import React from 'react'
import ProductCard from './Components/ProductCards/ProductCard'
import { productList } from './Data/Data'

const App = () => {
  const RenderProduct = productList.map(product => <ProductCard key={product.id} product={product} />)
  return (
    <main className='container'>
      <div className='p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3	xl:grid-cols-4 gap-4  '>
        {RenderProduct}
      </div>
    </main>
  )
}

export default App

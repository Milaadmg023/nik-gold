import React from 'react'

function Products() {
  return (
    <section className='flex'>
    <div id='all__products' className='grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-6'>
     <div></div>
    </div>
    <div id="filters" className='flex flex-col'></div>
    </section>
  )
}

export default Products
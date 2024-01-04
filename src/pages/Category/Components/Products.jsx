import React from 'react'

function Products() {
  return (
    <section className='flex'>
    <div id='all__products' className='grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-6 lg:px-4 px-2 py-2'>
     <div className='w-[70%] h-fit border h-fit rounded-xl'>
      <img src="https://fakeimg.pl/300/" alt="product image" className='rounded-t-xl'/>
      <p className='text-center text-sm md:text-md lg:text-lg' dir='rtl'>انگشتر K170</p>
     </div>
    </div>
    <div id="filters" className='flex flex-col'></div>
    </section>
  )
}

export default Products
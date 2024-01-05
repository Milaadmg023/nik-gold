import React from 'react'
import { Link } from 'react-router-dom';

function Inactive() {
  return (
    <div className='text-center grid gap-2'>
     <p className='bg-[#d1e7dd] text-[#0f5132] m-3 rounded-md p-4' >کاربر گرامی این بخش در حال بروزرسانی می باشد به زودی فعال میگردد</p>
     <Link to={'/'}>
     <button className='bg-[#0d6efd] text-white text-sm p-2 rounded-xl'>
          بازگشت به فروشگاه
     </button>
     </Link>
    </div>
  )
}

export default Inactive
import React from 'react'

function LoanForm() {
  return (
    <section dir='rtl' className='px-4 py-6 grid gap-2'>
     <div className='bg-[#fff3cd] text-[#664d03] p-4 rounded'>لطفا فرم زیر را تکمیل و عکس فیش واریزی را ارسال کنید</div>
     <form action="post" className='w-full grid gap-2'>
      <div id="code" className='flex flex-col gap-1'>
        <label htmlFor="customer__code">کدمشتری</label>
        <input type="text" id='customer__code' name='customer__code' className='border border-2 rounded h-10'/>
      </div>
      <div id="fac__num" className='flex flex-col gap-1'>
        <label htmlFor="customer__fac">شماره فاکتور</label>
        <input type="text" id='customer__fac' name='customer__fac' className='border border-2 rounded h-10'/>
      </div>
      <div id="name" className='flex flex-col gap-1'>
        <label htmlFor="customer__name">نام و نام خانوادگی</label>
        <input type="text" id='customer__name' name='customer__name' className='border border-2 rounded h-10'/>
      </div>
      <div id="branch" className='flex flex-col gap-1'>
        <label htmlFor="customer__branch">شعبه خریداری شده</label>
        <select name="customer__branch" id="customer__branch" className='border border-2 rounded h-10'>
        <option value="#">انتخاب نمایید..</option>
          <option value="ملاصدرا">ملاصدرا</option>
          <option value="بازار زرگرها">بازار زرگرها</option>
          <option value="پاساژ پارس">نگین فارس</option>
          <option value="20 متری">20 متری</option> 
          <option value="ستاره فارس">ستاره فارس</option>         
        </select>
      </div>
      <div id="payment" className='flex flex-col gap-1'>
        <label htmlFor="customer__payment">مبلغ قسط</label>
        <input type="text" id='customer__payment' name='customer__payment' className='border border-2 rounded h-10'/>
      </div>
      <div id="file" className='flex flex-col mt-2'>
        <button className='border border-2 rounded-md h-10 w-fit p-1 bg-gray-800 text-white text-sm'>انتخاب عکس فیش واریزی </button>
      </div>
      <div id="submit" className='flex flex-col mt-2'>
        <button type='submit' className='mx-auto border border-2 rounded-md h-10 w-fit p-1 bg-green-800 text-white text-sm'>ثبت اطلاعات</button>
      </div>
     </form>
    </section>
  )
}

export default LoanForm
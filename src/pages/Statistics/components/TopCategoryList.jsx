import React from 'react'

const TopCategoryList = () => {
  return (
    <div>
      <h2 className='font-semibold text-xl mb-4'>Top Categories</h2>
      <div className='space-y-7'>
        <div className='space-y-2'>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Fruit and Vegetables</p>
            <p>23%</p>
          </div>
          <div className='h-2 rounded-xl overflow-hidden bg-clrPearlBush w-full'>
            <div className='h-full w-[23%] bg-clrMalibu '></div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Meat and Fish</p>
            <p>14%</p>
          </div>
          <div className='h-2 rounded-xl overflow-hidden bg-clrPearlBush w-full'>
            <div className='h-full w-[14%] bg-clrMalibu '></div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Pets</p>
            <p>11%</p>
          </div>
          <div className='h-2 rounded-xl overflow-hidden bg-clrPearlBush w-full'>
            <div className='h-full w-[11%] bg-clrMalibu '></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCategoryList
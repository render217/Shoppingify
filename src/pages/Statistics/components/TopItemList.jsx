import React from 'react'

const TopItemList = () => {
  return (
    <div>
      <h2 className='font-semibold text-xl mb-4'>Top items</h2>
      <div className='space-y-7'>
        <div className='space-y-2'>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Banana</p>
            <p>40%</p>
          </div>
          <div className='h-2 rounded-xl overflow-hidden bg-clrPearlBush w-full'>
            <div className='h-full w-[40%] bg-clrOrangePeel '></div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Chicken 1kg</p>
            <p>60%</p>
          </div>
          <div className='h-2 rounded-xl overflow-hidden bg-clrPearlBush w-full'>
            <div className='h-full w-[60%] bg-clrOrangePeel '></div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='text-sm font-semibold flex items-center justify-between'>
            <p>Rice</p>
            <p>10%</p>
          </div>
          <div className='h-2 rounded-xl overflow-hidden bg-clrPearlBush w-full'>
            <div className='h-full w-[10%] bg-clrOrangePeel '></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopItemList
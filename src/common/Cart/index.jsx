import React from 'react'
import { CartButton, CartForm, CartHeader, CartItemList, ItemDisplay } from './components'

export const Cart = () => {
  return (
    <div className='h-full'>

      {/* <div className='bg-clrYellowishOrange h-screen pt-5 relative flex flex-col '>

        <div className='mb-5  mx-3'>
          <CartHeader />
        </div>

        <div className='flex-1 '>
          <div className='customScollbarCartList  max-h-[60vh]  overflow-y-scroll   mx-3'>
            <CartItemList />
          </div>
        </div>

        <div className='mt-5 '>
          <CartButton />
        </div>

      </div> */}

      
        <div className='bg-white h-screen  pt-5 relative flex flex-col'>
          <div className=' mx-3'>
            {/* <CartForm /> */}
            <ItemDisplay />
          </div>
        </div>
      



    </div >
  )
}

import React from 'react'
import { CartButton, CartForm, CartHeader, CartItemList, ItemDisplay } from './components'

export const Cart = () => {
  return (
    <div>

      <div className='bg-clrYellowishOrange h-screen pt-5 relative flex flex-col '>
        <div className='mb-5  mx-3'>
          <CartHeader />
        </div>
        <div className='customScollbarCartList flex-1 max-h-[70vh] overflow-y-scroll mb-20  mx-3'>
          <CartItemList />
        </div>
        <hr className="my-7"/>
        <div className='mt-5 w-full absolute bottom-0'>
          <CartButton />
        </div>
      </div>


      {/* <div className='bg-white h-screen pt-5 relative flex flex-col'>
        <div className=' mx-3'>
          <CartForm />
          <ItemDisplay />
        </div>
      </div> */}


    </div >
  )
}

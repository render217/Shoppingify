import React from 'react'
import { CartButton, CartForm, CartHeader, CartItemList, ItemDisplay } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { selectshowProductPreview, selectshowCartForm, selectShowCartList } from '../../store/features/uiSlice'


export const Cart = () => {
  const dispatch = useDispatch()
  const showProductPreview = useSelector(selectshowProductPreview)
  const showCartForm = useSelector(selectshowCartForm)
  const showCartList = useSelector(selectShowCartList)



  return (
    <div className='h-full'>
      {showCartList ? (
        <div className='bg-clrYellowishOrange h-screen pt-5 relative flex flex-col '>

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

        </div>
      ) : (
        <div className='bg-white h-full pt-5'>
          <div className='mx-3'>
            {showProductPreview && <ItemDisplay />}
            {showCartForm && <CartForm />}
          </div>
        </div>
      )}








    </div >
  )
}

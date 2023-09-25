import React from 'react'
import { CartItem } from './CartItem'
import { CartItemEdit } from './CartItemEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
export const CartItemList = () => {
    return (
        <>

            {/* <div className='h-60 flex items-center justify-center'>
                <h1 className='text-center text-xl font-semibold'>No items</h1>
                <img className='absolute z-10 h-48  transform left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-2 flex justify-center items-center' src="./cart.svg" alt="" />
            </div> */}

            <div>
                <div className='flex items-center justify-between pr-5 pb-3'>
                    <h2 className='text-2xl font-semibold'>Shopping List</h2>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <div className=''>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div className=''>
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                    <CartItemEdit />
                </div>

            </div>


        </>
    )
}

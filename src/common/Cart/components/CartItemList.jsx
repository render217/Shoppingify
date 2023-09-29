import React, { useEffect } from 'react'
import { CartItem } from './CartItem'
import { CartItemEdit } from './CartItemEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, selectCartListName, selectCartProducts } from '../../../store/features/cartSlice'
import { selectIsCartEdit, uiActions } from '../../../store/features/uiSlice'
export const CartItemList = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCartProducts)
    const isCartEdit = useSelector(selectIsCartEdit)
    const cartListName = useSelector(selectCartListName)

    const toggleCartEdit = () => {
        dispatch(uiActions.setIsCarttobeSubmit(false))
        dispatch(uiActions.toggleCartIsEdit())
    }
    useEffect(() => {
        if (cartProducts.length === 0) {
            dispatch(cartActions.setCartListName(''))
        }
    }, [cartProducts.length === 0])
    return (
        <>
            {cartProducts.length === 0 && (
                <div className='h-60 flex items-center justify-center'>
                    <h1 className='text-center text-xl font-semibold'>No items</h1>
                    <img className='absolute z-10 h-48  transform left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-2 flex justify-center items-center' src="./cart.svg" alt="" />
                </div>
            )}

            {cartProducts.length > 0 && (
                <div>
                    <div className='flex items-center justify-between pr-5 pb-3'>
                        <h2 className='text-2xl font-semibold'>{cartListName || 'Shopping List'}</h2>
                        <FontAwesomeIcon icon={faPen} onClick={toggleCartEdit} />
                    </div>
                    {isCartEdit ? (
                        cartProducts.map((item, id) => (
                            <div key={id}>
                                <p className='font-semibold'>{item.categoryName}</p>
                                <div>
                                    {item.products.map((product, id) => (
                                        <CartItemEdit key={id} product={product} />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        cartProducts.map((item, id) => (
                            <div key={id}>
                                <p className='font-semibold'>{item.categoryName}</p>
                                <div>
                                    {item.products.map((product, id) => (
                                        <CartItem key={id} product={product} />
                                    ))}
                                </div>
                            </div>
                        ))
                    )}

                </div>
            )}



        </>
    )
}

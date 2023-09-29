import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/features/uiSlice'
import useScreenSize from '../../../hooks/useScreenSize'
import { productsAction } from '../../../store/features/productsSlice'
import { cartActions } from '../../../store/features/cartSlice'
const MOBILE_SIZE = 975
export const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { screenWidth } = useScreenSize();

    const showPreview = () => {
        if (screenWidth < 975) {
            dispatch(uiActions.setShowProductPreview())
            dispatch(uiActions.setSelectedProduct(product))
            dispatch(uiActions.setShowCart(true))
            dispatch(uiActions.setCartBackdrop(true))
        } else {
            dispatch(uiActions.setShowProductPreview())
            dispatch(uiActions.setSelectedProduct(product))
            dispatch(uiActions.setShowCart(true))
            dispatch(uiActions.setCartBackdrop(false))
        }
    }

    const handleAddToCart = () => {
        dispatch(cartActions.addToCart(product))
    }

    return (
        <>
            <div className='cursor-pointer bg-white shadow-md w-36 py-1 flex gap-1  rounded-3xl items-center justify-between'>
                <h1 onClick={showPreview} className='text-sm font-semibold  rounded-l-3xl  py-1 grid place-items-center flex-1'>{product.name}</h1>
                <span onClick={handleAddToCart} className='h-10 px-3 grid place-items-center rounded-r-3xl'>
                    <FontAwesomeIcon icon={faPlus} className="text-sm text-gray-400" />
                </span>
            </div>
        </>
    )
}

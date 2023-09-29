import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/features/uiSlice';

export const CartHeader = () => {
    const dispatch = useDispatch();
    
    const showAddItem = ()=>{
        dispatch(uiActions.setShowCartForm())
    }
    return (
        <>
            <div className='bg-clrRosyFinch py-2 relative min-h-[130px] rounded-2xl flex items-center'>
                <img className='absolute h-42 -top-5 left-5' src="./bottle.svg" alt="" />
                <div className='text-white ml-28 space-y-2'>
                    <h3 className='font-semibold text-lg'>Disn't find what you need?</h3>
                    <button onClick={showAddItem} className='bg-white px-6 py-2 rounded-xl text-black font-semibold'>Add item</button>
                </div>
            </div>

        </>
    )
}

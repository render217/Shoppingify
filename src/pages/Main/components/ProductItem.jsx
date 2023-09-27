import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ProductItem = () => {
    return (
        <>
            <div className='cursor-pointer bg-white shadow-md w-36 py-1 flex gap-1  rounded-3xl items-center justify-between'>
                <h1 className='text-xs pl-3 font-semibold  rounded-l-3xl  py-1 grid place-items-center'>bunch of corn 450g</h1>
                <span className='h-10 px-3 grid place-items-center rounded-r-3xl'>
                    <FontAwesomeIcon icon={faPlus} className="text-sm text-gray-400" />
                </span>
            </div>
        </>
    )
}

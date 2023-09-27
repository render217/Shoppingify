import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const CartItemEdit = () => {
  const [checked, setChecked] = useState(false)
  
  return (
    <>
      <div className="flex justify-between items-center py-2 my-2 mx-3">

        <div onClick={()=>setChecked(!checked)} className={`flex items-center gap-2 py-2 ${checked ? "before:content-['✔'] before:text-clrOrangePeel" : ""}  before:w-5 before:h-5 before:border-2 before:border-clrOrangePeel before:bg-transparent before:grid before:place-items-center before:text-xs `}>
          
          {/* <input id='check' type="checkbox" className='border-2 rounded bg-transparent accent-clrOrangePeel w-0 opacity-0'  checked={checked} /> */}
          <p 
          
            className={`${checked ? 'line-through  ' : ''} cursor-pointer  text-base text-ellipsis overflow-hidden max-w-[100px]`}
          >
            EdIt item
          </p>
        </div>


        <div className='flex justify-between items-center'>
          <div className=" py-2  rounded-xl w-0">
            <FontAwesomeIcon icon={faTrash} className="text-transparent" />
          </div>

          <p className=" px-2 py-1 cursor-pointer text-sm border-2  border-clrOrangePeel rounded-2xl bg-transparent ">
            1000 pcs
          </p>
        </div>

      </div>
    </>
  )
}

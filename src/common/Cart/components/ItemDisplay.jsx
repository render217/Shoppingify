import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
export const ItemDisplay = () => {
  return (
    <div className='mx-3'>

      <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faLeftLong} className='text-clrOrangePeel ' />
        <p className='text-clrOrangePeel'>Back</p>
      </div>
      <div className='flex flex-col gap-5 min-h-[90vh] pt-6'>
        <div className='max-h-60 rounded-xl overflow-hidden'>
          <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
        <div className='flex flex-col'>
          <p className='mb-2 text-sm' htmlFor="name">Name</p>
          <p className='text-xl font-semibold'>Avocado</p>
        </div>
        <div className='flex flex-col'>
          <p className='mb-2 text-sm' htmlFor="name">Category</p>
          <p className='text-xl font-semibold'>Fruit and vegetables</p>
        </div>
        <div className='flex flex-col '>
          <p className='mb-2 text-sm' htmlFor="note">Description </p>
          <p className='text-lg font-semibold customScollbarCartList max-h-52 overflow-y-scroll'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi consectetur laborum recusandae tempore dolorem beatae aliquid. Saepe, ipsam placeat! ipsum dolor sit amet consectetur adipisicing elit. Iste neque porro illum odit, animi cum quibusdam nemo perspiciatis tempore repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deserunt minus. Enim similique vel odit ducimus velit dicta, molestiae officia?</p>
        </div>
        <div className='mt-auto flex justify-center gap-5'>
          <button className='py-3 w-24 border-2 rounded-2xl'>Cancel</button>
          <button className='py-3 w-24 border-2 text-white bg-clrOrangePeel rounded-2xl'>Save</button>
        </div>
      </div>

    </div>
  )
}

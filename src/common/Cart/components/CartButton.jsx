import React from 'react'

export const CartButton = () => {
  return (
    <>
      <div className='bg-white py-8'>

        <form>
          <div className='bg-white flex mx-5 rounded-xl overflow-hidden border-2 border-clrOrangePeel'>
            <input className='outline-none border-0 w-full py-3 pl-5 text-lg pr-3' type="text" placeholder='Enter a name' />
            <button className='w-32 text-white bg-clrOrangePeel rounded-l-xl' >Save</button>
          </div>
        </form>

        {/* <div className='mt-auto flex justify-center gap-5'>
          <button className='py-3 w-24 border-2 rounded-2xl'>Cancel</button>
          <button className='py-3 w-24 border-2 text-white bg-clrMalibu rounded-2xl'>Complete</button>
        </div> */}

      </div>
    </>
  )
}

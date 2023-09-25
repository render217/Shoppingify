import React from 'react'

export const CartForm = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold '>Add a new item</h2>
            <form className='flex flex-col gap-5 min-h-[90vh] pt-6'>
                <div className='flex flex-col'>
                    <label className='mb-2 text-sm' htmlFor="name">Name</label>
                    <input id='name' className='w-full border-2 border-clrCottonSeed py-2 text-sm px-2 rounded-xl' type="text" placeholder='Enter a name' />
                </div>
                <div className='flex flex-col'>
                    <label   className='mb-2 text-sm' htmlFor="note">Note (optional) </label>
                    <textarea id='note'  className='resize-none border-clrCottonSeed  w-full border-2 py-3 text-sm px-2 rounded-xl' name="note"  cols="10" rows="4"></textarea>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2 text-sm' htmlFor="imageUrl">Image url (optional) </label>
                    <input className='w-full border-clrCottonSeed border-2 py-2 text-sm px-2 rounded-xl'  id='imageUrl' name='imageUrl' type="text" placeholder='Enter a note' />
                </div>
                <div className='flex flex-col' >
                    <label className='mb-2 text-sm' htmlFor="category">Category</label>
                    <select className='w-full border-clrCottonSeed border-2 py-2 text-sm px-2 rounded-xl' name="category" id="category">
                        <option value="fruit">Fruit adn vegetables</option>
                        <option value="meat">Meat and Fish</option>
                        <option value="beverages">Beverages</option>
                    </select>
                </div>
                <div className='mt-auto flex justify-center gap-5'>
                    <button className='py-3 w-24 border-2 rounded-2xl'>Cancel</button>
                    <button className='py-3 w-24 border-2 text-white bg-clrOrangePeel rounded-2xl'>Save</button>
                </div>
            </form>

        </div>
    )
}

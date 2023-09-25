import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';
export const Main = () => {
    
    return (
        <section >
            <header className='py-5 px-10'>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <h1 className=' lg:flex-1 text-2xl lg:text-3xl  font-medium leading-tight max-md:text-center max-md:mx-auto'>
                        <span className="text-clrOrangePeel font-semibold "> Shoppingify</span> allows you
                        take your <br /> shopping list wherever you go
                    </h1>
                    <form className='max-md:mx-auto'>
                        <div className='px-5 bg-white rounded-lg shadow-md flex items-center text-md '>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input className='py-3 px-3 text-gray-800 outline-none border-0' autoComplete='off' type="text" placeholder='Search' />
                        </div>
                    </form>
                </div>
            </header>
            <main>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
                <p>here goes list</p>
            </main>
        </section>
    );
};

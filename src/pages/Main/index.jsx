import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';
import { ProductItem } from './components/ProductItem';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, selectProductsData, selectProductsError, selectProductsStatus } from '../../store/features/productsSlice';
export const Main = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(selectProductsData)
    const productsStatus = useSelector(selectProductsStatus)
    const productsError = useSelector(selectProductsError)
    useEffect(() => {
        if (productsData.length === 0) {
            dispatch(getAllProducts())
        }
    }, [])
    if (productsStatus === 'loading') {
        return <p>loading...</p>
    }
    if (productsStatus === 'failed') {
        return <p>{productsError}</p>
    }
    console.log(productsData)
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
                {productsData && productsData.length > 0 && (
                    productsData.map((item, id) => (
                        <div className='mb-8' key={id}>
                            <h2 className='text-lg font-semibold mb-4'>{item.categoryName}</h2>
                            <div className='flex max-md:justify-center gap-4 flex-wrap scroll-py-3'>
                                {item.products.map((product, id) => (
                                    <ProductItem key={id} product={product}/>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </main>
        </section>
    );
};

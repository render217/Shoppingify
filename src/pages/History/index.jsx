import React, { useEffect } from 'react'

import { HistoryList } from './components/HistoryList';
import { useDispatch, useSelector } from 'react-redux';
import { getCartHistory, selectCartHistory } from '../../store/features/cartSlice';

export const History = () => {

    const dispatch = useDispatch();
    const cartHistory = useSelector(selectCartHistory);
  
    useEffect(() => {
        if (cartHistory.length === 0) {
            dispatch(getCartHistory())
        }
    }, [])
    return (
        <section className='pb-20'>
            <header className='py-5 px-10'>
                <h1 className=' text-2xl lg:text-3xl font-medium leading-tight '>
                    <span className="font-semibold ">Shopping history</span>
                </h1>
            </header>
            <main>
                {cartHistory && cartHistory.length > 0 ? <HistoryList cartHistory={cartHistory} /> : <p>Loading...</p>}
            </main>
        </section>
    )
}

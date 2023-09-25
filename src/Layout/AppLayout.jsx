import React, { useEffect, useState } from 'react'
import { Cart, Navigation } from '../common'
import { Outlet } from 'react-router-dom'
import useScreenSize from '../hooks/useScreenSize';

const AppLayout = () => {
    const [showCart, setShowCart] = useState(false);
    const [showBackDrop, setShowBackDrop] = useState(false)
    const { screenWidth } = useScreenSize();


    const toggleCart = () => {
        if (screenWidth > 768) {
            setShowCart(true);
            setShowBackDrop(false)
        } else {
            setShowCart(!showCart)
            setShowBackDrop(!showBackDrop)
        }
    }
    useEffect(() => {
        if (screenWidth > 768) {
            setShowCart(true)
            setShowBackDrop(false)
        } else if (screenWidth < 768) {
            setShowBackDrop(false)
            setShowCart(false)
        }
    }, [screenWidth])

    return (
        <>
            <div className='bg-clrShowDrift font-Quicksand '>
                <div className='min-h-screen flex relative'>
                    <div className='w-[65px] fixed bg-white'>
                        <Navigation toggleCart={() => toggleCart()} />
                    </div>
                    <div className='flex-1 flex '>
                        <div className='flex-1  ml-[65px] md:mr-[350px]  '>
                            <div className='relative  pl-8 pr-8'>
                                <Outlet />
                            </div>
                            {showBackDrop && <div onClick={() => {
                                setShowBackDrop(false)
                                setShowCart(false)
                            }} className='fixed top-0 bottom-0 h-full  w-full bg-black/70'></div>}
                        </div>
                        <div className='fixed right-0 max-md:w-[300px] w-[350px] overflow-hidden bg-white z-10'>
                            {showCart && <Cart />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppLayout
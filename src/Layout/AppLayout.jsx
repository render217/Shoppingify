import React, { useEffect, useState } from 'react'
import { Cart, Navigation } from '../common'
import { Outlet } from 'react-router-dom'
import useScreenSize from '../hooks/useScreenSize';
import { useSelector, useDispatch } from 'react-redux'
import { selectBackdrop, selectShowCart, uiActions } from '../store/features/uiSlice';

const MOBILE_SIZE = 975
const AppLayout = () => {
    // const [showCart, setShowCart] = useState(false);
    // const [showBackDrop, setShowBackDrop] = useState(false)
    const { screenWidth } = useScreenSize();

    const dispatch = useDispatch();
    const showCart = useSelector(selectShowCart)
    const showBackdrop = useSelector(selectBackdrop)

    const toggleCart = () => {
        if (screenWidth > MOBILE_SIZE) {
            dispatch(uiActions.setShowCart(true))
            dispatch(uiActions.setCartBackdrop(false))
            // setShowCart(true);
            // setShowBackDrop(false)
        } else {
            // setShowCart(!showCart)
            // setShowBackDrop(!showBackDrop)
            dispatch(uiActions.setShowCart(!showCart))
            dispatch(uiActions.setCartBackdrop(!showBackdrop))
        }
    }
    useEffect(() => {
        if (screenWidth > MOBILE_SIZE) {
            dispatch(uiActions.setShowCart(true))
            dispatch(uiActions.setCartBackdrop(false))
            // setShowCart(true)
            // setShowBackDrop(false)
        } else if (screenWidth < MOBILE_SIZE) {
            // setShowBackDrop(false)
            // setShowCart(false)
            dispatch(uiActions.setShowCart(false))
            dispatch(uiActions.setCartBackdrop(false))
        }
    }, [screenWidth])

    return (
        <>
            <div className='bg-clrShowDrift font-Quicksand '>

                <div className='min-h-screen relative flexoverflow-x-hidden'>

                    <div className='w-[65px] bg-white left-0  z-30 fixed top-0 bottom-0'>
                        <Navigation toggleCart={() => toggleCart()} />
                    </div>

                    <div className='   '>
                        <div className={`ml-[65px] px-[10px] ${screenWidth > MOBILE_SIZE ? 'mr-[400px]' : ''}`}>
                            <div className='customMainScroll max-h-screen max-w-7xl mx-auto overflow-hidden overflow-y-scroll'>
                                <Outlet />
                            </div>
                            {showBackdrop && <div onClick={() => {
                                // setShowBackDrop(false)
                                // setShowCart(false)
                                dispatch(uiActions.setShowCart(false))
                                dispatch(uiActions.setCartBackdrop(false))
                            }} className='fixed top-0 bottom-0 left-0 right-0 h-full  w-full bg-black/70'></div>}
                        </div>
                    </div>
                    {
                        showCart && screenWidth < MOBILE_SIZE && (
                            <div className={`w-[345px] ml-[65px] fixed right-0 top-0 bottom-0 z-10`}>
                                <div className='bg-white h-full '>
                                    <Cart />
                                </div>
                            </div>
                        )

                    }
                    {
                        showCart && screenWidth >= MOBILE_SIZE &&
                        (
                            <div className={`w-[400px] fixed top-0 bottom-0 right-0 z-10 `}>
                                <div className='bg-white h-full '>
                                    <Cart />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default AppLayout


// return (
//     <>
//         <div className='bg-clrShowDrift font-Quicksand  '>
//             <div className='h-screen relative'>

//                 <div className='w-[65px] fixed top-0 bottom-0 left-0  bg-red-200 z-10'>
//                     <Navigation toggleCart={() => toggleCart()} />
//                 </div>

//                 <div className='flex'>

//                     <div className=' ml-[65px] pl-[10px] md:mr-[350px] md:pr-[10px]'>
//                         <div className='relative h-full'>
//                             <Outlet />
//                         </div>
//                         {showBackDrop && <div onClick={() => {
//                             setShowBackDrop(false)
//                             setShowCart(false)
//                         }} className='fixed top-0 bottom-0 left-0 right-0 h-full  w-full bg-black/70'></div>}
//                     </div>

//                     <div className={`${screenWidth < 768 && showCart ? 'top-0 bottom-0 bg-transparent h-full fixed right-0 max-md:w-[350px]' : 'fixed right-0 w-[350px]'}  `}>
//                         <div className='bg-white h-full'>
//                             {showCart && <Cart />}
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     </>
// )
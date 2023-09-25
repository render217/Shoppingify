import React, { useEffect, useState } from 'react'

const useScreenSize = () => {
    const [screenSize, getDimension] = useState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
    })


    const setDimension = () => {
        getDimension({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        })
    }


    useEffect(() => {
        window.addEventListener('resize', setDimension)
        return () => {
            window.removeEventListener('resize', setDimension)
        }
    }, [screenSize])


    return { screenWidth: screenSize.screenWidth, screenHeight: screenSize.screenHeight }
    
}

export default useScreenSize
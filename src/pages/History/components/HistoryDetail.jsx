import { faArrowLeftLong, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleCartHistory, selectSingleCartHistory } from '../../../store/features/cartSlice'

const HistoryDetail = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cartDetail = useSelector(selectSingleCartHistory);
    const params = useParams();
    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        dispatch(getSingleCartHistory(params.id))
    }, [params.id])
    console.log(cartDetail);

    const customDateFormat = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = date.toLocaleString('en', {
            weekday: 'short',
            day: '2-digit',
            month: 'numeric',
            year: 'numeric'
        });
        return formattedDate;
    }
    return (
        <section className='pb-20'>
            <header className='py-5 px-10'>
                <div onClick={goBack} className='cursor-pointer text-xs w-fit pr-4 py-2 text-clrOrangePeel flex items-center gap-2'>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                    <p className='font-semibold'>back</p>
                </div>
            </header>
            <main className='px-10'>
                <div className='mb-5'>
                    <h1 className='text-2xl font-semibold mb-2'>{cartDetail?.name}</h1>
                    <div className='flex font-semibold gap-2 items-center text-xs text-clrSliverSand'>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <p>{customDateFormat(cartDetail?.createdAt)}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    {/* <div>
                        <h4 className='text-lg font-semibold mb-2'>Cookies</h4>
                        <div className='flex items-center flex-wrap gap-3'>
                            <div className='flex flex-wrap w-fit max-w-[11rem] gap-3 items-center px-3 py-4 bg-white rounded-xl  shadow-custom font-semibold  '>
                                <p className='text-xs '>Cookies Chocolate</p>
                                <p className='text-[10px] font-bold min-w-[30px] text-clrOrangePeel'>3 pcs</p>
                            </div>
                            <div className='flex  w-fit max-w-[14rem] gap-3 items-center px-3 py-4 bg-white  rounded-xl  shadow-custom font-semibold  '>
                                <p className='text-xs '>Cookies Cookies </p>
                                <p className='text-[10px] font-bold min-w-[30px] text-clrOrangePeel'>3 pcs</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='flex items-center flex-wrap gap-3'>
                        {cartDetail?.items.map((item, idx) => (
                            <div key={idx} className='flex flex-wrap w-fit max-w-[11rem] gap-3 items-center px-3 py-4 bg-white rounded-xl  shadow-custom font-semibold  '>
                                <p className='text-xs '>{item?.product}</p>
                                <p className='text-[10px] font-bold min-w-[30px] text-clrOrangePeel'>{item?.quantity} pcs</p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </main>
        </section>
    )
}

export default HistoryDetail
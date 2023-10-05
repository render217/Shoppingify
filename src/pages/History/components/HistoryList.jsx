import {
    faAngleRight,
    faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCartHistory } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';

export const HistoryList = ({ cartHistory }) => {
    // console.log(cartHistory);

    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    {cartHistory.map((cartHistoryItem, id) => (
                        <div key={id}>
                            <p className="text-xs mb-3">{cartHistoryItem.month}</p>
                            <div className="flex flex-col gap-6">
                                {cartHistoryItem.items.map((item,idx) => (
                                    <div key={idx} className="bg-white flex  py-3 px-2  shadow-custom ">

                                        <Link to={`/history/${item._id}`} className="font-semibold">{item.name}</Link>
                                        <div className="ml-auto flex gap-4 items-center text-xs text-clrSliverSand">
                                            <div className="flex font-semibold gap-2 items-center">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                <p>
                                                    {new Date(item.createdAt).toLocaleString('en', {
                                                        weekday: 'short',
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                            <p className=" rounded-xl font-semibold  px-2 py-1 text-clrMalibu border border-clrMalibu">
                                                {item.status}
                                            </p>
                                            <FontAwesomeIcon
                                                className="text-clrOrangePeel"
                                                icon={faAngleRight}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faChartColumn,
  faListUl,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip'
import { NavLink } from 'react-router-dom';
export const Navigation = ({ toggleCart }) => {

  const activeNav = 'border-l-4 border-l-clrOrangePeel transition-all delay-100 px-4'
  const nonActiveNav = 'border-l-4 border-l-transparent hover:border-l-4 hover:border-l-clrOrangePeel transition-all  px-4'


  return (

    <nav>
      <div className="h-screen pt-5 flex flex-col justify-center ">
        <div className="px-2">
          <img src="./logo.svg" alt="" />
        </div>

        <div className=" flex-1 ">
          <div className="h-full flex flex-col justify-center  gap-10 text-xl">
            <NavLink data-tooltip-id='item-tooltip' data-tooltip-place='left' to='/' className={({ isActive }) => isActive ? activeNav : nonActiveNav}>
              <FontAwesomeIcon icon={faListUl} />
              <Tooltip id='item-tooltip'>
                <p className='text-xs'>items</p>
              </Tooltip>
            </NavLink>
            <NavLink to='history' data-tooltip-id='history-tooltip' data-tooltip-place='left' className={({ isActive }) => isActive ? activeNav : nonActiveNav}>
              <FontAwesomeIcon icon={faRotateRight} />
              <Tooltip id='history-tooltip'>
                <p className='text-xs'>History</p>
              </Tooltip>
            </NavLink>
            <NavLink to='statistics' data-tooltip-id='statistics-tooltip' data-tooltip-place='left' className={({ isActive }) => isActive ? activeNav : nonActiveNav}>
              <FontAwesomeIcon icon={faChartColumn} />
              <Tooltip id='statistics-tooltip'>
                <p className='text-xs'>Statistics</p>
              </Tooltip>
            </NavLink>
          </div>
        </div>

        <div className=" text-md relative pb-3">
          <div onClick={toggleCart} className=" cursor-pointer rounded-full py-4 mx-2 my-2 bg-clrOrangePeel grid place-items-center">
            <div className="absolute bg-red-800 text-white rounded-full text-xs px-1 top-3 right-4">
              3
            </div>
            <FontAwesomeIcon icon={faCartShopping} color="white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
export const CartItem = () => {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <div className="flex justify-between items-center py-2 my-2 mx-3">
        <h3
          onClick={() => setShow(!show)}
          className="cursor-pointer text-base text-ellipsis overflow-hidden max-w-[100px]"
        >
          Chicken Egg
        </h3>
        {show ? (
          <div  className="flex justify-between items-center bg-white rounded-xl">
            <div className="py-2 px-2 mr-2 cursor-pointer bg-clrOrangePeel  rounded-xl  ">
              <FontAwesomeIcon icon={faTrash} className="text-white" />
            </div>
            <span className="py-2 px-1 cursor-pointer">
              <FontAwesomeIcon icon={faPlus} className="text-clrOrangePeel " />
            </span>
            <p     onClick={() => setShow(false)} className="px-2 py-1 cursor-pointer text-sm  border-2    border-clrOrangePeel  rounded-2xl bg-transparent">
              1000 pcs
            </p>
            <span className="py-2 px-1  cursor-pointer">
              <FontAwesomeIcon
                icon={faMinus}
                className="text-clrOrangePeel  "
              />
            </span>
          </div>
        ) : (
          <div className='flex justify-between items-center'>
            <div className=" py-2  rounded-xl w-0">
              <FontAwesomeIcon icon={faTrash} className="text-transparent" />
            </div>
            <p  onClick={() => setShow(!show)} className=" px-2 py-1 cursor-pointer text-sm border-2  border-clrOrangePeel rounded-2xl bg-transparent">
              1000 pcs
            </p>
          </div>
        )}
      </div>
    </>
  );
};

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { cartActions } from '../../../store/features/cartSlice';
import { useDispatch } from 'react-redux';
export const CartItem = ({ product }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(product))
  }
  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart(product))
  }
  const handleDeleteFromCart = () => {
    dispatch(cartActions.clearProductFromCart(product))
  }
  return (
    <>
      <div className="flex justify-between items-center py-2 my-2 mx-3 select-none">
        <h3
          onClick={() => setShow(!show)}
          className="cursor-pointer text-base font-normal text-ellipsis overflow-hidden max-w-[150px]"
        >
          {product.name}
        </h3>
        {show ? (
          <div className="flex justify-between items-center bg-white rounded-xl">
            <div onClick={handleDeleteFromCart} className="py-2 px-2 mr-2 cursor-pointer bg-clrOrangePeel  rounded-xl  ">
              <FontAwesomeIcon icon={faTrash} className="text-white" />
            </div>
            <span onClick={handleAddToCart} className="py-2 px-1 cursor-pointer">
              <FontAwesomeIcon icon={faPlus} className="text-clrOrangePeel " />
            </span>
            <p onClick={() => setShow(false)} className="px-2 py-1 cursor-pointer text-sm  border-2    border-clrOrangePeel  rounded-2xl bg-transparent">
              {product.quantity} pcs
            </p>
            <span onClick={handleRemoveFromCart} className="py-2 px-1  cursor-pointer">
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
            <p onClick={() => setShow(!show)} className=" px-2 py-1 cursor-pointer text-sm border-2  border-clrOrangePeel rounded-2xl bg-transparent">
              {product.quantity} pcs
            </p>
          </div>
        )}
      </div>
    </>
  );
};

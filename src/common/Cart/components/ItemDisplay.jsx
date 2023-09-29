import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedProductPreview,
  uiActions,
} from '../../../store/features/uiSlice';
import axios from 'axios';
import { cartActions } from '../../../store/features/cartSlice';
const DEFAULT_IMAGE =
  'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&uid=R114161513&ga=GA1.1.2088252675.1693028454&semt=ais';
export const ItemDisplay = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProductPreview);

  const [image, setImage] = useState(product.image);

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(product))
    dispatch(uiActions.setShowCartList())
  }
  useEffect(() => {
    const checkImageExist = async () => {
      try {
        const { data } = await axios.get(product.image);
        setImage(product.image)
      } catch (error) {
        setImage(DEFAULT_IMAGE)
      }
    }
    checkImageExist()
  }, [product]);

  const onBack = () => {
    dispatch(uiActions.setShowCartList());
  };

  return (
    <div className="mx-3 flex flex-col h-screen mb-1  overflow-y-auto">
      <div onClick={onBack} className=" flex items-center gap-2 cursor-pointer">
        <FontAwesomeIcon icon={faLeftLong} className="text-clrOrangePeel " />
        <p className="text-clrOrangePeel">Back</p>
      </div>
      <div className="flex-1 flex flex-col gap-5 pt-6">
        <div className="rounded-xl overflow-hidden h-[190px]">
          <img className="object-cover h-full w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="mb-2 text-sm" htmlFor="name">
            Name
          </p>
          <p className="text-base font-semibold">{product.name}</p>
        </div>
        {/* <div className="flex flex-col">
          <p className="mb-2 text-sm" htmlFor="name">
            ID
          </p>
          <p className="text-base font-semibold">{product?._id || 'No id'}</p>
        </div> */}
        <div className="flex flex-col">
          <p className="mb-2 text-sm" htmlFor="name">
            Category
          </p>
          <p className="text-sm font-semibold">{product.category}</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-2 text-sm" htmlFor="note">
            Description{' '}
          </p>
          <p className="text-sm font-semibold customScollbarCartList h-48 overflow-y-scroll">
            {product.description || '-'}
          </p>
          {/* <p className='text-base font-semibold customScollbarCartList max-h-52 overflow-y-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni voluptates accusantium ipsum quae necessitatibus aliquam nemo vel unde, blanditiis, corporis veniam quia eos, nesciunt illo debitis repellat harum incidunt placeat reprehenderit alias? Hic, dignissimos! Delectus culpa blanditiis tempore ullam sint, consequatur incidunt. Labore modi pariatur odio adipisci quisquam possimus.</p> */}
        </div>
        <div className=" flex justify-center gap-5">
          {/* only show the delete if it is the creator */}
          {/* <button className='py-3 w-28 border-2 rounded-2xl'>Delete</button> */}
          <button onClick={handleAddToCart} className="py-3  w-28 border-2 text-white bg-clrOrangePeel rounded-2xl">
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

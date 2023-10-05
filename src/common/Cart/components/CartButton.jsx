import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartActions,
  createCart,
  getCartHistory,
  selectCartListName,
  selectCartProducts,
} from '../../../store/features/cartSlice';
import { toast } from 'react-toastify';
import {
  selectIsCartEdit,
  selectIsCartTobeSubmit,
  uiActions,
} from '../../../store/features/uiSlice';


export const CartButton = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);
  const tobeUpdatedCartListName = useSelector(selectCartListName);

  const [cartListName, setCartListName] = useState('');
  const [updatedCartListName, setUpdatedCartListName] = useState(
    tobeUpdatedCartListName,
  );

  const isCartEdit = useSelector(selectIsCartEdit);
  const isCartToBeSubmit = useSelector(selectIsCartTobeSubmit);

  const cartNameInputChange = (e) => {
    if (cartProducts.length === 0) {
      setCartListName('');
    } else {
      setCartListName(e.target.value);

    }
  };

  const handleUpdateCartListName = (e) => {
    if (!updatedCartListName) {
      toast.error('please provide a name for your shopping');
      return;
    }
    dispatch(cartActions.setCartListName(updatedCartListName));
    dispatch(uiActions.setCartIsEdit(false));
    dispatch(uiActions.setIsCarttobeSubmit(true));

  };

  const handleCartSubmit = (e) => {
    e.preventDefault();
    if (!cartListName) {
      toast.error('Please provide a name for your shopping');
      return;
    }
    dispatch(cartActions.setCartListName(cartListName));
    dispatch(uiActions.setCartIsEdit(false));
    dispatch(uiActions.setIsCarttobeSubmit(true));

  };

  const handleCancelCart = () => {
    dispatch(cartActions.resetCart())
    dispatch(uiActions.setShowCartList())
    dispatch(uiActions.setCartIsEdit(false))
    dispatch(uiActions.setIsCarttobeSubmit(false))
    setCartListName('')
  }


  const handleSubmitCart = async () => {
    console.log(cartProducts)
    console.log('cartName', tobeUpdatedCartListName)
    console.log('cartList', cartProducts);

    try {
      let cartItemList = []
      let preparedCartProductList = cartProducts.forEach(category => {
        category.products.forEach(product => {
          let mappedProduct = { product: product._id, quantity: product.quantity };
          cartItemList.push(mappedProduct)
        })
      })


      const payloadData = { cartName: tobeUpdatedCartListName, products: cartItemList, status: 'completed' }
      console.log(payloadData)
      const { data } = await dispatch(createCart(payloadData)).unwrap();
      dispatch(cartActions.resetCart())
      dispatch(uiActions.setShowCartList())
      dispatch(uiActions.setCartIsEdit(false))
      dispatch(uiActions.setIsCarttobeSubmit(false))
      const { data: res } = await dispatch(getCartHistory()).unwrap();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="bg-white py-8">
        {!isCartToBeSubmit &&
          (isCartEdit ? (
            <form onSubmit={handleUpdateCartListName}>
              <div
                className={`${cartProducts.length === 0
                  ? 'border-gray-200'
                  : 'border-clrOrangePeel'
                  } bg-white flex mx-5 rounded-xl overflow-hidden border-2 `}
              >
                <input
                  value={updatedCartListName}
                  onChange={(e) => setUpdatedCartListName(e.target.value)}
                  className="outline-none border-0 w-full py-3 pl-5 text-lg pr-3"
                  type="text"
                  placeholder="Enter new name"
                />
                <button
                  disabled={cartProducts.length === 0}
                  className={`${cartProducts.length === 0
                    ? 'bg-gray-300'
                    : 'bg-clrOrangePeel'
                    } w-32 text-white  rounded-l-xl`}
                >
                  Update
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div
                className={`${cartProducts.length === 0
                  ? 'border-gray-200'
                  : 'border-clrOrangePeel'
                  } bg-white flex mx-5 rounded-xl overflow-hidden border-2 `}
              >
                <input
                  value={cartListName}
                  onChange={(e) => cartNameInputChange(e)}
                  className="outline-none border-0 w-full py-3 pl-5 text-lg pr-3"
                  type="text"
                  placeholder="Enter a name"
                />
                <button
                  onClick={handleCartSubmit}
                  disabled={cartProducts.length === 0}
                  className={`${cartProducts.length === 0
                    ? 'bg-gray-300'
                    : 'bg-clrOrangePeel'
                    } w-32 text-white  rounded-l-xl`}
                >
                  Save
                </button>
              </div>
            </form>
          ))}

        {!isCartEdit && isCartToBeSubmit && (
          <div className="mt-auto flex justify-center gap-5">
            <button onClick={handleCancelCart} className="py-3 w-24 border-2 rounded-2xl">Cancel</button>
            <button onClick={handleSubmitCart} className="py-3 w-24 border-2 text-white bg-clrMalibu rounded-2xl">
              Complete
            </button>
          </div>
        )}
      </div>
    </>
  );
};

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/addcartSlice';

function Cart() {
    const dispatch = useDispatch();
    const productCart = useSelector(state => state.cart.cart);

    const removeCart = (id) => {
        console.log("removing is working", id)
        dispatch(remove(id));//dispatching removing action 
    }

    return (
        <div>
            <div className='flex items-center justify-center text-blue-400 mt-8'>
                My Cart
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-full grid grid-cols-2 place-items-center place-content-center gap-2'>
                    {
                        productCart.length > 0 ? productCart.map((item, index) => (
                            <div className="product-box px-4 py-2 w-56 flex flex-col justify-center items-center gap-1" key={item.id}>
                                <div className="img-box h-52 w-52">
                                    <img src={item.thumbnail} alt={item.title} className='h-full w-full object-cover' />
                                </div>
                                <p className="title">{item.title}</p>
                                <p className="price">${item.price}</p>
                                <p className="rating">Rating: {item.rating}</p>
                                <div className='h-10 w-32 bg-black flex justify-center items-center'>
                                    <button className='text-white cursor-pointer rounded-md mt-1'>Buy Now</button>
                                </div>
                                <div className='h-10 w-32 bg-blue-600 flex justify-center items-center'>
                                    <button className='text-black cursor-pointer rounded-md mt-1' onClick={() => removeCart(item.id)}>Remove Item</button>
                                </div>
                            </div>
                        )) : <p>No products in the cart</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;

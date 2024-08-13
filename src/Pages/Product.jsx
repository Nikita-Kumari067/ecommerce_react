import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { add} from '../store/addcartSlice';
import { addwl } from '../store/addcartSlice';


function Product() {
    const dispatch = useDispatch()
   
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
           
        };

        fetchProducts();
    }, []);

    const addToCart = (item) => {
        dispatch(add(item))
    }
    const wishlist=(item)=>{
        dispatch(addwl(item))
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full grid grid-cols-2 place-items-center place-content-center gap-2'>
                {
                    products.length > 0 ? products.map((item, index) => (
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
                                <button className='text-black cursor-pointer rounded-md mt-1' onClick={() => addToCart(item)}>Add to Cart</button>


                            </div>
                            <button onClick={()=>wishlist(item)}><CiHeart />
                           </button>
                        </div>
                    )) : <p>Loading products...</p>
                }
            </div>
        </div>
    );
}

export default Product;

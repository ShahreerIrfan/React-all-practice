/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Shop = () => {
    const[products,setProducts] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()

    }

    const [cart,setCart] = useState([])
    const handleAddToCart = (product) =>{
        const newCart= [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = []
        // Step-01 Get ID
        for(const id in storedCart){
            //Step-02 Get the product from loacal storage by using ID
            const addedProduct = products.find(product=> product.id===id)
            const quantity = storedCart[id]
            if(addedProduct){
                // Step-3 add quantity
                addedProduct.quantity = quantity
                // console.log(addedProduct)
                // Step 4 add the 'added product' in saved cart
                savedCart.push(addedProduct)
            }
        }
        // The a saved cart in state
        setCart(savedCart)
    },[products])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Products
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Products>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                handleClearCart = {handleClearCart}
                
                ><Link to="/orders"><button className='btn-proceed'>Review Order</button></Link></Cart>
            </div>

        </div>
    );
};

export default Shop;
import React  from 'react'
import { useStateValue } from '../StateProvider';
import './Checkoutpage.css';
import Header from '../layout/Header';
import CheckoutProduct from '../CheckoutProduct';
import { getBasketTotal } from '../reducer';
 
function Checkoutpage () {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout__wrapper">
                   <Header />
                   <h2 className="checkout__title">Mycart</h2>
                   {basket.length === 0 ? (
                        <div className="checkout__emptyMessage">
                        <p>Your have no items in your cart. To add one or more products. Click  <strong>"Add to cart"</strong> next to the item. </p>
                        </div>
                     ) : (
                         <>
                        <div>
                        {basket?.map((item) => ( 
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                        </div>
                        <div className="checkout__subTotal">
                            <h3>Your Order</h3>
                            <>
                        <p> Subtotal ({basket?.length} items): <strong>$ {getBasketTotal(basket)}</strong></p>
                        <p><input type="checkbox"/> This item includes a gift</p>
                        <button className="checkout__subtotalCheckoutButton">Checkout</button>
                            </>
                        </div>
                        </>
                     )}         
       </div>
    );
}

export default Checkoutpage;

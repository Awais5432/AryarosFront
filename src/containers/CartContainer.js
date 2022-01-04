import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartPage from '../components/common/headers/common/cart-header'
import { removeFromCart } from '../actions'
import { getCartTotal, getLocale } from '../services'
 
const CartContainer = ({ cartList, total, symbol, removeFromCart,locale }) => (
    <li className="onhover-div mobile-cart" style={{ paddingTop: '20px', paddingBottom: '20px' }}><div className="cart-qty-cls">{cartList.length}</div>
        <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`} className="img-fluid" alt="" />
            <i className="fa fa-shopping-cart"></i></Link>
        <ul className="show-div shopping-cart">
            {cartList.map((item, index) => (
                <CartPage key={index} item={item} total={total} symbol={symbol} locale={locale} removeFromCart={() => removeFromCart(item)} />
            ))}
            {(cartList.length > 0) ?
                <div>
                    <li>
                        <div className="total">
                            <h5>subtotal : <span>{symbol}{total}</span></h5>
                        </div>
                    </li>
                    <li>
                        <div className="buttons text-center">
                            {/* <Link to={`${process.env.PUBLIC_URL}/cart`} className="view-cart">view cart</Link> */}
                            <button className='btn' style={{ borderRadius: '5px', color: 'white', background: '#d4b196' }}><Link to={`${process.env.PUBLIC_URL}/checkout`} className="checkout" style={{ color: 'white' }}>checkout</Link>
                            </button>
                        </div>
                    </li></div>
                :
                <li><h5>Your cart is currently empty.</h5></li>}
        </ul>

    </li>
)


function mapStateToProps(state) {
    return {
        cartList: state.cartList.cart,
        total: getCartTotal(state.cartList.cart),
        symbol: state.data.symbol,
        locale: getLocale()
    }
}

export default connect(mapStateToProps, { removeFromCart })(CartContainer);

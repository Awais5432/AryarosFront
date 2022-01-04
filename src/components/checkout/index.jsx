import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';
import { withTranslate } from 'react-redux-multilingual'
import Breadcrumb from "../common/breadcrumb";
import { removeFromWishlist } from '../../actions'
import { getCartTotal } from "../../services";
import CheckoutDetails from './checkoutdetails';
import axios from 'axios'
import { removeFromCart, incrementQty, decrementQty } from '../../actions'


class checkOut extends Component {

    constructor(props) {
        super(props)

        this.state = {
            payment: 'stripe',
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            country: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            create_account: '',
            pradd: "",
            secadd: "",
            delhours: "",
            deldate: "",
            pricon: "",
            seccon: "",
            delins: "",
            delleave: "",
            deltip: "",
            useremail: "",
            gateway: "",
            allItems: [],
            isButtonDisabled: true,
            names: [],
            product_id: [],
            username: '',
            locale: ''
        }
        this.validator = new SimpleReactValidator();
    }
    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

    }

    setStateFromCheckbox = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);

        if (!this.validator.fieldValid(event.target.name)) {
            this.validator.showMessages();
        }
    }

    checkhandle(value) {
        this.setState({
            payment: value
        })
    }

    StripeClick = () => {

        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');

            var handler = (window).StripeCheckout.configure({
                key: 'pk_test_glxk17KhP7poKIawsaSgKtsL',
                locale: 'auto',
                token: (token: any) => {
                    console.log(token)
                    this.props.history.push({
                        pathname: '/order-success',
                        state: { payment: token, items: this.props.cartItems, orderTotal: this.props.total, symbol: this.props.symbol }
                    })
                }
            });
            handler.open({
                name: 'Multikart',
                description: 'Online Fashion Store',
                amount: this.amount * 100
            })
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }
    handleGateway = (e) => {
        console.log(e.target.value);
        this.setState({
            gateway: e.target.value,
            isButtonDisabled: false
        })

    }

    componentDidMount() {
        var serializedState = localStorage.getItem('state');
        var datas = JSON.parse(serializedState);
        var primaryaddress = localStorage.getItem("primaryaddress");
        var secondaryaddress = localStorage.getItem("secondaryaddress");
        var deliveryhours = localStorage.getItem("deliveryhours");
        var deliverydate = localStorage.getItem("deliverydate");
        var primarycontact = localStorage.getItem("primarycontact");
        var secondarycontact = localStorage.getItem("secondarycontact");
        var deliveryinstructions = localStorage.getItem("deliveryinstructions");
        var leaveitdelivery = localStorage.getItem("leaveitdelivery");
        var deliverytip = localStorage.getItem("deliverytip");
        var useremail = localStorage.getItem("useremail");
        var username = localStorage.getItem("username");
        this.setState({
            pradd: primaryaddress,
            secadd: secondaryaddress,
            delhours: deliveryhours,
            deldate: deliverydate,
            pricon: primarycontact,
            seccon: secondarycontact,
            delins: deliveryinstructions,
            delleave: leaveitdelivery,
            deltip: deliverytip,
            useremail: useremail,
            username: username,
            locale: datas.Intl.locale
        })
    }
    render() {
        const { cartItems, symbol, total } = this.props;
        var prod_id = [];
        var prod_name = [];
        var prod_price = [];
        var prod_qty = [];
        var prod_subtotal = [];
        var prod_discount = [];
        cartItems.map((item, index) => {
            var sum = item.price * item.qty;
            prod_id.push(item.id);
            prod_name.push(item.name);
            prod_price.push(item.price);
            prod_qty.push(item.qty);
            prod_subtotal.push(sum);
            prod_discount.push(item.discount);
        })
        console.log(prod_subtotal);
        const handleCheckout = () => {

            let data = new FormData();
            data.append('username', this.state.username);
            data.append('user_email', this.state.useremail);
            data.append('order_Subtotal', total);
            data.append('order_total', total);
            data.append('home_address', this.state.pradd);
            data.append('office_address', this.state.secadd);
            data.append('delivery_date', this.state.deldate);
            data.append('deliver_time', this.state.delhours);
            data.append('primary_phone', this.state.pricon);
            data.append('secondary_phone', this.state.seccon);
            data.append('delivery_note', this.state.delins);
            data.append('delivery_tips', this.state.deltip);
            data.append('payment_method', this.state.gateway);
            data.append('product_id[]', prod_id);
            data.append('product_name[]', prod_name);
            data.append('product_price[]', prod_price);
            data.append('product_qty[]', prod_qty);
            data.append('product_subtotal[]', prod_subtotal);
            data.append('product_discount[]', prod_discount);
            axios.post('https://store.squarepakistan.com/public/api/create_order', data,
                {
                    headers: {
                        'crossDomain': true,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PATCH, PUT',
                    }
                }
            ).then((response) => {
                console.log(response.data);
                if (this.state.gateway == 'cod') {
                    this.props.history.push({
                        pathname: '/order-success',
                        state: {
                            items: cartItems, orderTotal: total, symbol: symbol,
                            shipping: this.state.pradd,
                            billing: this.state.secadd,
                            bookingdate: this.state.deldate,
                            bookingtime: this.state.delhours,
                            primarycontact: this.state.pricon,
                            secondarycontact: this.state.seccon,
                            useremail: this.state.useremail,
                            sum: prod_subtotal
                        }
                    })
                }
                else {
                    window.location = response.data.InvoiceURL;
                }
            })


        }
        // Paypal Integration
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.history.push({
                pathname: '/order-success',
                state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
            })

        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        const client = {
            sandbox: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
            production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        }


        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>Aryarose | CheckOut Page</title>
                    <meta name="description" content="Aryarose" />
                </Helmet>
                {/*SEO Support End */}

                {/* <Breadcrumb  title={'Checkout'}/> */}

                <section className="section-b-space">
                    <div className="container">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                {/* <form> */}
                                <div className="checkout row">
                                    <CheckoutDetails />
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                        <div className="checkout-details" style={{
                                            border: 'none',
                                            borderRadius: '4px',
                                        }}>
                                            {cartItems.map((item, index) => {
                                                return (
                                                    <div className="card p-3 mb-3" key={index}>
                                                        <div className="d-flex">
                                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                                <img src={item.images}
                                                                    // {item.variants?
                                                                    //           item.variants[0].images
                                                                    //           :item.pictures[0]} 
                                                                    alt="" className='img-fluid' style={{ maxWidth: '80px', borderRadius: '6px' }} />
                                                            </Link>
                                                            <div className="d-flex justify-content-between checkout_cart">

                                                                <div className="d-flex flex-column justify-content-between">
                                                                    <Link className='pl-3 text-muted' to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                                        {(() => {
                                                                            if (this.state.locale == 'en') {
                                                                                return <h6>{item.name}</h6>
                                                                            }
                                                                            else
                                                                                return <h6>{item.name_arabic}</h6>
                                                                        })()}
                                                                    </Link>
                                                                    <p className="pl-3 mb-0 font-weight-bold">{symbol}{item.price - (item.price * item.discount / 100)}</p>
                                                                </div>
                                                                <div className="d-flex flex-column justify-content-between align-items-end">
                                                                    <a style={{ cursor: 'pointer', color: "#c6c6c6" }} className="icon" onClick={() => this.props.removeFromCart(item)}>
                                                                        <i className="icon-trash"></i>
                                                                    </a>
                                                                    <div className="qty-box" style={{ width: '65%' }}>
                                                                        <div className="input-group flex-nowrap" style={{ height: '30px' }}>
                                                                            <span className="input-group-prepend ">
                                                                                <button type="button" className="btn quantity-left-minus" onClick={() => this.props.decrementQty(item.id)} data-type="minus" data-field="">
                                                                                    -
                                                                                </button>
                                                                            </span>
                                                                            <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number" style={{ height: '30px' }} />
                                                                            <span className="input-group-prepend mr-0">
                                                                                <button className="btn quantity-right-plus" onClick={() => this.props.incrementQty(item, 1)} data-type="plus" disabled={(item.qty >= item.stock) ? true : false}>
                                                                                    +
                                                                                </button>
                                                                            </span>
                                                                        </div>
                                                                    </div>{(item.qty >= item.stock) ? 'out of Stock' : ''}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            }
                                            <h3>Have a Discount Code?</h3>
                                            <div className="input-group flex-nowrap" style={{ background: 'white', borderRadius: '3px' }}>
                                                <span className="input-group-append p-2" style={{ border: '1px solid #f6f6f6', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                                                    <img style={{ width: '30px' }} src="https://cdn.zeplin.io/5f180e07111b776cefe98a2f/assets/71F22978-B792-4C0F-9C9B-171A9A142B95.svg" alt="" />
                                                </span>
                                                <input className='discount_inp' placeholder='Enter a discount code' type="text" style={{ border: 'none' }} />
                                                <span className="input-group-prepend p-2">
                                                    <button className='btn' style={{ borderRadius: '5px', color: 'white', background: '#d4b196' }}>
                                                        Apply
                                                    </button>
                                                </span>
                                            </div>
                                            <h3 className='mt-3'>Summary</h3>
                                            <div className="d-flex justify-content-between p-3">
                                                <h4>Subtotal</h4>
                                                <p><b>{symbol}</b> {total}</p>
                                            </div>
                                            <div className="d-flex justify-content-between p-3">
                                                <h4>Delivery Charges</h4>
                                                <p><b>{symbol}</b> 0</p>
                                            </div>
                                            <div className="d-flex justify-content-between p-3">
                                                <h4>VAT(%)</h4>
                                                <p><b>{symbol}</b> 0</p>
                                            </div>
                                            <div className="d-flex justify-content-between p-3">
                                                <h4>Total</h4>
                                                <p><b>{symbol}</b> {total}</p>
                                            </div>

                                            {/* <div className="order-box">
                                                <div className="title-box">
                                                    <div>Product <span> Total</span></div>
                                                </div>
                                                <ul className="qty">
                                                    {cartItems.map((item, index) => {
                                                        return <li key={index}>{item.name} × {item.qty} <span>{symbol}{(item.qty * item.price)}</span></li>
                                                    })
                                                    }
                                                </ul>
                                                <ul className="sub-total">
                                                    <li>Subtotal <span className="count">{symbol}{total}</span></li>
                                                </ul>

                                                <ul className="total">
                                                    <li>Total <span className="count">{symbol}{total}</span></li>
                                                </ul>
                                            </div> */}

                                            {/* <div className="payment-box">
                                                <div className="upper-box">
                                                    <div className="payment-options">
                                                        <ul className="d-flex">
                                                            <li className="pr-4">
                                                                <div className="radio-option stripe">
                                                                    <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />
                                                                    <label htmlFor="payment-2">Stripe</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="radio-option paypal">
                                                                    <input type="radio" name="payment-group" id="payment-1" onClick={() => this.checkhandle('paypal')} />
                                                                    <label htmlFor="payment-1">PayPal</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="text-center"><span className="image img-fluid" ><img style={{ maxWidth: '155px' }} src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt="" /></span></div>
                                                    </div>
                                                </div>
                                                {(total !== 0) ?
                                                    <div className="text-center">
                                                        {(this.state.payment === 'stripe') ? <button type="button" className="btn-solid btn" onClick={() => this.StripeClick()} >Place Order</button> :
                                                            <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''}
                                            </div> */}
                                            <div className="text-center">
                                                <div onChange={this.handleGateway}>
                                                    <label>Cash on Delivery
                                                        <input type="radio" name="paymentmethod" className='mx-2' value="cod" />
                                                    </label>
                                                    <label>Fatoorah
                                                        <input type="radio" name="paymentmethod" className='mx-2' value="fatoorah" />
                                                    </label>
                                                </div>
                                                <button type="button" disabled={this.state.isButtonDisabled} className="btn-solid btn" style={{ borderRadius: '4px' }} onClick={() => handleCheckout()} >Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row section-t-space">
                                        <div className="col-lg-6">
                                            <div className="stripe-section">
                                                <h5>stripe js example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4242424242424242</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>2/2020</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>2222</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 m-sm-t-2">
                                            <div className="stripe-section">
                                                <h5>paypal example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4152521541244</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>11/18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>521</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    { removeFromWishlist, removeFromCart, incrementQty, decrementQty }
)(checkOut)
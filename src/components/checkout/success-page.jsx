import React, { Component } from 'react';
import { withTranslate } from 'react-redux-multilingual'


class orderSuccess extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        const { items, symbol, orderTotal, shipping, billing, bookingdate,
            bookingtime, primarycontact, secondarycontact,
            useremail, sum
        } = this.props.location.state;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var current = new Date();
        var next5days = new Date(Date.now() + 5 * 86400000);
        let CheckDate = current.toLocaleDateString("en-US", options).toString()
        let deliveryDate = next5days.toLocaleDateString("en-US", options).toString()

        return (
            // (payment)?
            <div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-text">
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    <h2>Thank you</h2>
                                    <p>Order Has Been Received and Placed Successfully</p>
                                    {/* <p>Transaction ID: */}
                                    {/* {(payment.paymentID)?payment.paymentID:payment.id} */}
                                    {/* </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-order">
                                    <h2 className='text-center'>your order details</h2>
                                    {items.map((item, index) => {
                                        return <div className="row product-order-detail" key={index}>
                                            <div className="col-3">
                                                <img
                                                    src={item.images}
                                                    // {item.variants ?
                                                    //     item.variants[0].images
                                                    //     : item.pictures[0]} 
                                                    alt="" className="img-fluid" />
                                            </div>
                                            <div className="col-3 order_detail">
                                                <div>
                                                    <h4>Name</h4>
                                                    <h5>{item.name}</h5>
                                                </div>
                                            </div>
                                            <div className="col-3 order_detail">
                                                <div>
                                                    <h4>Quantity</h4>
                                                    <h5>{item.qty}</h5>
                                                </div>
                                            </div>
                                            <div className="col-3 order_detail">
                                                <div>
                                                    <h4>Price</h4>
                                                    <h5>{symbol}{(item.qty * item.price)}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>subtotal <span>{symbol}{orderTotal}</span></li>
                                            <li>shipping <span>$0</span></li>
                                            <li>tax(GST) <span>$0</span></li>
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total <span>{symbol}{orderTotal}</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row order-success-sec">
                                    {/* <div className="col-sm-6">
                                        <h4>summery</h4>
                                        <ul className="order-detail">
                                            {(payment.paymentID)?
                                                <div>
                                            <li>payer ID: {payment.payerID}</li>
                                            <li>payment ID: {payment.paymentID}</li>
                                            <li>payment Token: {payment.paymentToken}</li></div>
                                                :
                                            <li>Order ID: {payment.id}</li> }

                                            <li>Order Date: {CheckDate}</li>
                                            <li>Order Total: {symbol}{orderTotal}</li>
                                        </ul>
                                    </div> */}
                                    <div className="col-sm-12">
                                        <h2 className='text-center'>shipping address</h2>
                                        <ul className="order-detail">
                                            {/* <li>gerg harvell</li>
                                            <li>568, suite ave.</li>
                                            <li>Austrlia, 235153</li>
                                            <li>Contact No. 987456321</li> */}
                                            <li>{shipping}</li>
                                            <li>Contact No. {primarycontact}</li>
                                            <li>Email. {useremail}</li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-12 payment-mode">
                                        <h4>Payment method</h4>
                                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                            banking acceptance subject to device availability.</p>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="delivery-sec">
                                            <h3>expected date of delivery</h3>
                                            <h2>{deliveryDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            //     :
            // <section className="p-0">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-sm-12">
            //                 <div className="error-section">
            //                     <h1>404</h1>
            //                     <h2>page not found</h2>
            //                     <a href="index.html" className="btn btn-solid">back to home</a>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        )
    }
}

export default orderSuccess
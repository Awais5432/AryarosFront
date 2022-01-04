import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
import LogoImage from "./logo";
import { connect } from "react-redux";
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../../store';


class TopBar extends Component {
    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))

        var serializedState = localStorage.getItem('state');
        var datas = JSON.parse(serializedState);
        if (lang == 'en' || datas.Intl.locale === 'en') {
            document.body.classList.add('ltr');
        }
        else if (lang == 'ar' || datas.Intl.locale === 'ar') {
            document.body.classList.add('rtl');
        }
        console.log(lang);
        console.log(datas.Intl.locale);

    }
    onClickHandleAr = () => {
        var serializedState = localStorage.getItem('state');
        var datas = JSON.parse(serializedState);
        if (datas.Intl.locale === 'ar') {
            document.body.classList.add('rtl');
        }
        else {
            document.body.classList.add('ltr');
        }
    }
    render() {
        const { translate } = this.props;
        return (
            <div className="top-header" style={{ backgroundColor: '#f7f7f7', maxHeight: '82px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <img src={require('./logo.png')} alt="logo" className="brand-logo" style={{ width: '130px' }} />
                                        </Link>
                                    </li>
                                    {/* <li><i className="fa fa-phone" aria-hidden="true"></i>{translate('call_us')}:  123 - 456 - 7890</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown" style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                height: '100%'
                            }}>
                                {/* <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{translate('compare')}</Link></li> */}
                                {/* <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>{translate('wishlist')}</Link></li> */}
                                {/* <li className="onhover-dropdown mobile-account"> */}
                                {/* <i className="fa fa-user" aria-hidden="true"></i> {translate('my_account')} */}
                                {/* <ul className="onhover-show-div"> */}
                                <li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>
                                <li><a href={null} onClick={() => this.changeLanguage('ar')}>العربية</a></li>

                                {/* </ul> */}
                                {/* </li> */}
                                <li className=" mobile-account" style={{ paddingLeft: '0' }}>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                    {/* <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
                                        </li>
                                    </ul> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(TopBar);
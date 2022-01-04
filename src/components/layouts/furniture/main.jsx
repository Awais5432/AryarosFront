import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';

// Import custom components
import SpecialProducts from "./special-products"
import BlogSection from "../common/blogsection"
import HeaderThree from "../../common/headers/header-three"
import HeaderOne from "../../common/headers/header-one"
import ThemeSettings from "../../common/theme-settings"
import FooterOne from "../../common/footers/footer-one";
import { withTranslate } from 'react-redux-multilingual'
import axios from 'axios'
import {
    generatePath,
    useHistory,
    Link
} from "react-router-dom";


class Furniture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_data: [],
            subcat_data: [],
            subcat_data_sec: [],
            subcat_data_th: [],
            subcat_data_fh: [],
            id: '',
            locale: ''
        }
    }
    componentDidMount() {
        var serializedState = localStorage.getItem('state');
        var datas = JSON.parse(serializedState);
        this.setState({
            locale: datas.Intl.locale
        })
        axios.get('https://store.squarepakistan.com/public/api/Categories', { crossdomain: true })
            .then(function (response) {
                const cat_data = response.data.data;
                this.setState({
                    cat_data: cat_data,
                });
                // console.log(cat_data);
            }.bind(this));

        axios.get('https://store.squarepakistan.com/public/api/10/getSubCategoryById', { crossdomain: true })
            .then(function (response) {
                const subcat_data = response.data.data;
                this.setState({
                    subcat_data: subcat_data,
                });
                // console.log(cat_data);
            }.bind(this));
        axios.get('https://store.squarepakistan.com/public/api/16/getSubCategoryById', { crossdomain: true })
            .then(function (response) {
                const subcat_data_sec = response.data.data;
                this.setState({
                    subcat_data_sec: subcat_data_sec,
                });
                // console.log(cat_data);
            }.bind(this));
        axios.get('https://store.squarepakistan.com/public/api/15/getSubCategoryById', { crossdomain: true })
            .then(function (response) {
                const subcat_data_th = response.data.data;
                this.setState({
                    subcat_data_th: subcat_data_th,
                });
                // console.log(cat_data);
            }.bind(this));
        axios.get('https://store.squarepakistan.com/public/api/14/getSubCategoryById', { crossdomain: true })
            .then(function (response) {
                const subcat_data_fh = response.data.data;
                this.setState({
                    subcat_data_fh: subcat_data_fh,
                });
                // console.log(cat_data);
            }.bind(this));
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color5.css`);
    }
    handleCategory(id) {
        // var history = useHistory();
        this.setState({ id: id });
        id && this.props.history.push("/category/" + id);
    }

    handleSubCategory(id) {
        // var history = useHistory();
        this.setState({ id: id });
        id && this.props.history.push("/subcategory/" + id);
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <HeaderOne logoName={'logo/2.png'} />
                <Helmet>
                    <title>Aryarose | Gift Store</title>
                    <meta name="description" content="Aryarose – Gift Store" />
                </Helmet>
                <section className="pt-0 small-slider">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-12 category_block">
                                <div className="row">
                                    <div className="col-md-4  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./chirstmas.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('new_year')}</span>
                                    </div>
                                    <div className="col-md-4  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./balloon.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('birthday')}</span>
                                    </div>
                                    <div className="col-md-4 col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./anniversary (2).png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('anniversary')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12 category_block">
                                <div className="row">
                                    <div className="col-md-4  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./flowers.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('flowers')}</span>
                                    </div>
                                    <div className="col-md-4 col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./cake.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('cake')}</span>
                                    </div>
                                    <div className="col-md-4  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./gift.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2"> {translate('gifts')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-12 category_block">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./chocolate.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('chocolates')}</span>
                                    </div>
                                    <div className="col-md-4 col-sm-6  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./hamper.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('gift_hampers')}</span>
                                    </div>
                                    <div className="col-md-4 col-sm-6  col-4 d-flex flex-column text-center">
                                        <div className="cat_circular p-4">
                                            <img src={require('./gift-bag.png')} alt="logo" className="img-fluid m-auto" />
                                        </div>
                                        <span className="pt-2">{translate('corporate')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-0 small-slider">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home12 text-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>New Year Specials</h4>
                                                    <h1>Bloom into the Year</h1>
                                                    <a href="#" className="btn btn-solid" style={{ borderRadius: '3px' }}>shop
                                                        now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home13 text-right">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain" style={{ justifyContent: 'flex-end' }}>
                                                <div>
                                                    <h4>Gifting Season</h4>
                                                    <h1>Aryarose Specials</h1><a href="#" className="btn btn-solid" style={{ borderRadius: '3px' }}>shop
                                                        now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*Collection Banner section*/}
                <section className="banner-furniture ratio_45">
                    <div className="container-fluid">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/cake-uae.webp`} alt=""
                                                className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        {/* <div className="contain-banner banner-3">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>sofa</h2>
                                            </div>
                                        </div> */}
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/flower-uae.webp`} alt=""
                                                className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        {/* <div className="contain-banner banner-3">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>new arrival</h2>
                                            </div>
                                        </div> */}
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/same_Delivery__4_may_Desk.webp`} alt=""
                                                className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        {/* <div className="contain-banner banner-3">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>chair</h2>
                                            </div>
                                        </div> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Collection Banner section end*/}
                <section>
                    <div className="title1 section-t-space">
                        {/* <h4>exclusive products</h4> */}
                        <h2 className="title-inner1">{translate('shop_by_bestseller_categories')}</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.state.cat_data.map((myData, i) => {
                                return (
                                    <div className="col-md-3 pb-5" key={i} style={{ cursor: 'pointer' }} onClick={() => this.handleCategory(myData.id)}>
                                        <div className="card" style={{
                                            border: 'none',
                                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                                        }}>
                                            <img className="card-img-top" src={myData.image} alt="Card image cap" style={{ maxHeight: '250px' }} />
                                            <div className="card-body font-weight-bold text-center">
                                                {(() => {
                                                    if (this.state.locale == 'en') {
                                                        return <p className="card-text">{myData.name}</p>
                                                    }
                                                    else
                                                        return <p className="card-text">{myData.name_arabic}</p>
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                            {/* <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Desk.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('chirstmas')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Anniversary.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('anniversary')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Flowers.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('flowers')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Cakes.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('cake')}</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="row pt-5">
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/DeskGiftHampers1.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('gift_hampers')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Chocolates.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('chocolates')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Personalised.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('personalised')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Plants.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('plants')}</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                {/*Special Products Start*/}
                <SpecialProducts type={'furniture'} />
                {/*Special Products End*/}

                {/*Parallax banner*/}
                <section className="p-0">
                    <div className="full-banner parallax parallax-banner3  text-center p-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                        <h2>Best</h2>
                                        <h3 style={{ color: 'white' }}>New Year Box</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="title1 section-t-space">
                        {/* <h4>exclusive products</h4> */}
                        <h2 className="title-inner1">Trending Now</h2>
                    </div>
                    <div className="container pt-5 pb-5 mb-5" style={{
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '10px'
                    }}>
                        <div className="row">
                            {this.state.cat_data.map((myData, i) => {
                                return (
                                    <div className="col-md-3 pb-5" key={i} style={{ cursor: 'pointer' }} onClick={() => this.handleCategory(myData.id)}>
                                        <div className="card" style={{
                                            border: 'none',
                                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                                        }}>
                                            <img className="card-img-top" src={myData.image} alt="Card image cap" style={{ maxHeight: '250px' }} />
                                            <div className="card-body font-weight-bold text-center">
                                                {(() => {
                                                    if (this.state.locale == 'en') {
                                                        return <p className="card-text">{myData.name}</p>
                                                    }
                                                    else
                                                        return <p className="card-text">{myData.name_arabic}</p>
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                            {/* <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Desk.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('chirstmas')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Anniversary.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('anniversary')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Flowers.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('flowers')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/Cakes.webp`} alt="Card image cap" />
                                    <div className="card-body font-weight-bold text-center">
                                        <p className="card-text">{translate('cake')}</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </section>
                <section>
                    <div className="title1 section-t-space">
                        {/* <h4>exclusive products</h4> */}
                        <h2 className="title-inner1">{translate('cake')}</h2>
                    </div>
                    <div className="container pt-5 pb-5 mb-5" style={{
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '10px'
                    }}>
                        <div className="row">
                            {/* <div className="col-md-3"> */}
                            {this.state.subcat_data.map((myData, i) => {
                                return (
                                    <div className="col-md-3 pb-5" key={i} style={{ cursor: 'pointer' }} onClick={() => this.handleSubCategory(myData.id)}>

                                        <img className="card-img-top rounded-circle img-thumbnail" src={myData.image} alt="Card image cap" />
                                        <div className="card-body font-weight-bold text-center">
                                            {(() => {
                                                if (this.state.locale == 'en') {
                                                    return <p className="card-text">{myData.name}</p>
                                                }
                                                else
                                                    return <p className="card-text">{myData.name_arabic}</p>
                                            })()}
                                        </div>
                                    </div>
                                )
                            })
                            }
                            {/* </div> */}
                            {/* <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/two-layer-lucky-bamboo-in-merry-christmas-vase_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('anniversary')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/xmas-tree-cushion-combo_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('flowers')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/festive-christmas-candle-celebrations-chocolates_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('cake')}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </section>
                <section>
                    <div className="title1 section-t-space">
                        {/* <h4>exclusive products</h4> */}
                        <h2 className="title-inner1">{translate('flowers')}</h2>
                    </div>
                    <div className="container pt-5 pb-5 mb-5" style={{
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '10px'
                    }}>
                        <div className="row">
                            {/* <div className="col-md-3"> */}
                            {this.state.subcat_data_sec.map((myData, i) => {
                                return (
                                    <div className="col-md-3 pb-5" key={i} style={{ cursor: 'pointer' }} onClick={() => this.handleSubCategory(myData.id)}>

                                        <img className="card-img-top rounded-circle img-thumbnail" src={myData.image} alt="Card image cap" style={{ height: "40vh" }} />
                                        <div className="card-body font-weight-bold text-center">
                                            {(() => {
                                                if (this.state.locale == 'en') {
                                                    return <p className="card-text">{myData.name}</p>
                                                }
                                                else
                                                    return <p className="card-text">{myData.name_arabic}</p>
                                            })()}
                                        </div>
                                    </div>
                                )
                            })
                            }
                            {/* </div> */}
                            {/* <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/two-layer-lucky-bamboo-in-merry-christmas-vase_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('anniversary')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/xmas-tree-cushion-combo_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('flowers')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/festive-christmas-candle-celebrations-chocolates_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('cake')}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </section>
                <section>
                    <div className="title1 section-t-space">
                        {/* <h4>exclusive products</h4> */}
                        <h2 className="title-inner1">{translate('chocolates')}</h2>
                    </div>
                    <div className="container pt-5 pb-5 mb-5" style={{
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '10px'
                    }}>
                        <div className="row">
                            {/* <div className="col-md-3"> */}
                            {this.state.subcat_data_th.map((myData, i) => {
                                return (
                                    <div className="col-md-3 pb-5" key={i} style={{ cursor: 'pointer' }} onClick={() => this.handleSubCategory(myData.id)}>

                                        <img className="card-img-top rounded-circle img-thumbnail" src={myData.image} alt="Card image cap" />
                                        <div className="card-body font-weight-bold text-center">
                                            {(() => {
                                                if (this.state.locale == 'en') {
                                                    return <p className="card-text">{myData.name}</p>
                                                }
                                                else
                                                    return <p className="card-text">{myData.name_arabic}</p>
                                            })()}
                                        </div>
                                    </div>
                                )
                            })
                            }
                            {/* </div> */}
                            {/* <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/two-layer-lucky-bamboo-in-merry-christmas-vase_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('anniversary')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/xmas-tree-cushion-combo_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('flowers')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/festive-christmas-candle-celebrations-chocolates_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('cake')}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </section>
                <section>
                    <div className="title1 section-t-space">
                        {/* <h4>exclusive products</h4> */}
                        <h2 className="title-inner1">{translate('gift_hampers')}</h2>
                    </div>
                    <div className="container pt-5 pb-5 mb-5" style={{
                        border: 'none',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '10px'
                    }}>
                        <div className="row">
                            {/* <div className="col-md-3"> */}
                            {this.state.subcat_data_fh.map((myData, i) => {
                                return (
                                    <div className="col-md-3 pb-5" key={i} style={{ cursor: 'pointer' }} onClick={() => this.handleSubCategory(myData.id)}>

                                        <img className="card-img-top rounded-circle img-thumbnail" src={myData.image} alt="Card image cap" />
                                        <div className="card-body font-weight-bold text-center">
                                            {(() => {
                                                if (this.state.locale == 'en') {
                                                    return <p className="card-text">{myData.name}</p>
                                                }
                                                else
                                                    return <p className="card-text">{myData.name_arabic}</p>
                                            })()}
                                        </div>
                                    </div>
                                )
                            })
                            }
                            {/* </div> */}
                            {/* <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/two-layer-lucky-bamboo-in-merry-christmas-vase_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('anniversary')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/xmas-tree-cushion-combo_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('flowers')}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="card-img-top rounded-circle img-thumbnail" src={`${process.env.PUBLIC_URL}/assets/images/festive-christmas-candle-celebrations-chocolates_1.jpg`} alt="Card image cap" />
                                <div className="card-body font-weight-bold text-center">
                                    <p className="card-text">{translate('cake')}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </section>
                {/*Parallax banner end*/}


                {/* Blog Section Section*/}
                {/* <section className="blog blog-2 section-b-space ratio3_2">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <div className="title1">
                                    <h4>Recent Story</h4>
                                    <h2 className="title-inner1">from the blog</h2>
                                    <hr role="tournament6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSection />
                </section> */}
                {/* Blog Section End*/}

                <ThemeSettings />

                <FooterOne logoName={'logo/1.png'} />
            </div>
        )
    }
}


export default withTranslate(Furniture);
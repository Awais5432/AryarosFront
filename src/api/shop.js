/**
 * Mocking client-server processing
 */
import _products from './data.json';
import axios from 'axios';
import { useState, useEffect } from 'react';

// let products;
// useEffect(() => {
//     const Demo = () => {
//         axios.get('https://store.squarepakistan.com/public/api/Products', { crossdomain: true })
//             .then(function(response) {
//                 products = response.data.data;
//                 // console.log(products);
//                 return products;
//             })
//     }
// })

// console.log(Demo);


const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => {
        // setTimeout(() => cb(_products), timeout || TIMEOUT)
        axios.get('https://store.squarepakistan.com/public/api/Product', { crossdomain: true })
            .then(function(response) {
                const products = response.data.data;
                // console.log(products);
                cb(products);
            })
    },
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
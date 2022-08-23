import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/home/index'
import Category from "../components/Category/index"
import ProductList from '../components/products/ProductList'

test (' render of category', () => {
const category= render (<Category />);
    expect(category.container).toBeInTheDocument();
})

test (' render of home', () => {
    const home= render (<Home />);
        expect(home.container).toBeInTheDocument();
    })
    

    test (' render of ProducList', () => {
        const productlist= render (<ProductList/>);
            expect(productlist.container).toBeInTheDocument();
        })
        
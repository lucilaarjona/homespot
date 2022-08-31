import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import Product from '../components/products/Product'


let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Product />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
})

test('render of Product', () => {
    const productComponent = render(
        <BrowserRouter>
            <Product />
        </BrowserRouter>
    )
    expect(productComponent.container).toBeInTheDocument();
});

test('Render of  img', () => {
    const img = screen.findByRole("img", { name: /imgProduct/ });

    expect(img).toBeTruthy();
});

test('Render of  button ver mas', () => {
    const img = screen.findByRole("button", { name: /imgProduct/ });

    expect(img).toBeTruthy();
});

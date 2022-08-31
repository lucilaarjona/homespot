import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/home/index'
import { BrowserRouter, } from 'react-router-dom'

let component = null;
beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Home /> 
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
})
test('render of HOME', () => {
   const home = render(<Home/>);
   expect(home).toBeInTheDocument();
});


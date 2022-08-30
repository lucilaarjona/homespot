import Footer from "../components/Footer/index"
import { render } from "@testing-library/react";
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import React from "react";
import "@testing-library/jest-dom"

let component = null;
import {create} from"react-test-renderer"

beforeEach(() => {
    component = render (
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
})

test('render the footer', () => {
    const component = render(<Footer />);
    expect(component.container).toBeInTheDocument();
});

test('render icons', () => {
    expect(component.icon);
})

test('render copyrights', () => {
    expect(component.copyrights).toBeInTheDocument;
})

test('Snasphot of Footer', () => {
   const snfooter = create(
     <BrowserRouter>
             <Footer />
         </BrowserRouter>
    ).toJSON();
    expect(snfooter).toMatchSnapshot(); 
});

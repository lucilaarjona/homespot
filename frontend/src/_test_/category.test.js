import Category from "../components/Category/index"
import { render } from "@testing-library/react";
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import React from "react";
import "@testing-library/jest-dom"


let component = null;
beforeEach(() => {
    component = render (
        <BrowserRouter>
            <Category />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
})


test('render of Category', () => {
    const componentCategoria = render (
        <BrowserRouter>
            <Category />
        </BrowserRouter>
    )
    expect(componentCategoria.container).toBeInTheDocument();
});


test('render of  title', () => {
    // expect(component.container.querySelector('input[title]'))
})



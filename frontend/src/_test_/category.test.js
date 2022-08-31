import Category from "../components/Category/index"
import { render } from "@testing-library/react";
import { BrowserRouter} from 'react-router-dom'
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
    const componentCategory = render (
        <BrowserRouter>
            <Category />
        </BrowserRouter>
    )
    expect(componentCategory.container).toMatchObject();
});
import Footer from "../components/Footer/index"
import {render,screen,unmountComponentAtNode,act,fireEvent,getTestById} from "@testing-library/react";
import {BrowserRouter}  from 'react-router-dom'
import React from "react";
import "@testing-library/jest-dom"
let component = null;

beforeEach(() => {
    component = render(
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


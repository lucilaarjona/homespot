import Header from "../components/Header/index";
import Register from "../pages/Register/index"
import "@testing-library/jest-dom"
import { fireEvent, screen, act, render, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import React from "react"
let component2 = null;

beforeEach(() => {

    component2 = render(
        < BrowserRouter>
            < Header />
        </BrowserRouter>
    )
    expect(component2.container).toBeInTheDocument();

});

test('Render  slogan', () => {
    expect(screen.findAllByAltText("Feels like home"));
});

test('Render logo2', () => {
    expect(screen.findAllByAltText("HS"));
});

test('Render button creat cuenta', async () => {
    waitFor(() => expect(screen.findByRole("link", { name: /Crear cuenta/ })).toBeInTheDocument());

    const buttonCrearCuenta = screen.getByRole("link", { name: /Crear cuenta/ });

    act(() => {
       fireEvent.click(buttonCrearCuenta);
    })
 
    expect(buttonCrearCuenta).not.visible;
});



/*test('Snapshot of header', () => {
    const tree = create(
        <BrowserRouter>
            <Header />
            <Register/>
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});*/

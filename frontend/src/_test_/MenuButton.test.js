import { render ,fireEvent} from "@testing-library/react";
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import React from "react";
import "@testing-library/jest-dom"
import MenuButton from "../components/MenuButton/MenuButton"
let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <MenuButton/> 
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
})
test(' render of /Menu Button/', () => {
   const home = render(<MenuButton/>);
 expect(home).toBeTruthy();
})

test('Render button exit', async () => {

    const buttonCrearCuenta = document.querySelectorAll('img');

    expect(buttonCrearCuenta);
});
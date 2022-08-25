import LogIn from '../pages/LogIn/index'
import Register from "../pages/Register/index";
import "@testing-library/jest-dom"
import { fireEvent, screen, act, render } from "@testing-library/react"
import { BrowserRouter, Router, Routes, link } from "react-router-dom";
import React from "react"
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";

let component = null;
beforeEach(() => {
    component = render(
        <BrowserRouter>
            < LogIn />
        </BrowserRouter>

    )
    expect(component.container).toBeInTheDocument();

});


test('Labels ', () => {
    expect(component.getByText('Email')).toBeInTheDocument();
    expect(component.getByText('Password')).toBeInTheDocument();
});


test(' the inmput Email Accepts text ', async () => {

    const inputEmail = component.container.querySelector('input[type="email"]');

    fireEvent.change(inputEmail, {
        target: { value: 'Hello@hot' }
    });


    expect(inputEmail.value).toMatch('Hello@hot');
});



test(' the inmput Password Accepts text ', async () => {

    const inputPassword = component.container.querySelector('input[type="password"]');


    fireEvent.change(inputPassword, {
        target: { value: 'Hello' }
    });

    expect(inputPassword.value).toMatch("Hello");
});


test('button register', () => {
    const buttonRegister = screen.getByRole("button", { name: /Ingresar/ });

    expect(buttonRegister.value).toEqual("");
});


test('error  email whiout @', async () => {

    const inputEmail = component.container.querySelector('input[type="email"]');

    fireEvent.change(inputEmail, {
        target: { value: 'Hellohot' }
    });

    expect(component.container.querySelector('div[type="error"]'));

});

test ("Reacts to url changes when touching the button", async () => {
    
    const button = await screen.findByRole("link", {name: "Registrar"});
    
    userEvent.click(button);

    expect(button.value)

  });


  test('Simulation writing info', async () => {
    const emailInput = component.container.querySelector('input[name="email"]');
    const passwordInput = component.container.querySelector('input[type="password"]');
    const button = component.container.querySelector('button[name="ingresar"]');

    act(() => {
        fireEvent.change(emailInput, { target: { value: 'HELLO@mail.com' } })
        fireEvent.change(passwordInput, { target: { value: '1231543' } })
        userEvent.click(button)
    });
    await userEvent.click(button)
    expect(button).not.toBeInTheDocument();
});


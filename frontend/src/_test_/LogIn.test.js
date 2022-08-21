import LogIn from '../pages/LogIn/index'
import "@testing-library/jest-dom"
import { fireEvent, screen, act, render } from "@testing-library/react"
import { BrowserRouter, Router, Routes, link } from "react-router-dom";
import React from "react"
import userEvent from "@testing-library/user-event";


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

    //*const inputPassword = screen.getByRole("textbox", { type: "password" });

    fireEvent.change(inputPassword, {
        target: { value: 'Hello' }
    });

    expect(inputPassword.value).toMatch("Hello");
});


test('button register', () => {
    const buttonRegister = screen.getByRole("button", { name: /Ingresar/ });

    expect(buttonRegister.value).toEqual("");
});


test ('Redirect to register', () => {



    
})
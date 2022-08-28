import LogIn from '../pages/LogIn/index'
import "@testing-library/jest-dom"
import { fireEvent, screen, act, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
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

    fireEvent.change(inputPassword, {
        target: { value: 'Hello' }
    });

    expect(inputPassword.value).toMatch("Hello");
});

test('Simulation writing info', async () => {
    const emailInput = component.container.querySelector('input[type="email"]');
    const passwordInput = component.container.querySelector('input[type="password"]');
    const button = component.getByRole('button');
    act(() => {
        fireEvent.change(emailInput, { target: { value: 'mbrthy@hotmail.com' } })
        fireEvent.change(passwordInput, { target: { value: '1231543' } })
        fireEvent.click(button)
    });
    expect(button).not.toBeInTheDocument();
});

test('button register', () => {
    const buttonRegister = screen.getByRole("button", { name: /Ingresar/ });

    expect(buttonRegister.value).toEqual("");
});


test('error  email without @', async () => {

    const inputEmail = component.container.querySelector('input[type="email"]');

    fireEvent.change(inputEmail, {
        target: { value: 'Hellohot' }
    });

    expect(component.container.querySelector('div[type="error"]'));

});

test ("Reacts to url changes when touching the button", async () => {
    
    const button =  screen.findByRole("link", {name: "Registrar"});
    
    userEvent.click(button);

    expect(button.value)

  });

test("should throw error when try to send empty imput",  async () => {

    const button = component.getByRole('button');
    
    act(() => {
        userEvent.click(button);
    });

    expect(component.container.getElementsByTextContent('Por favor vuelva a intentarlo, sus credenciales son invalidas').toBeInTheDocument());

});
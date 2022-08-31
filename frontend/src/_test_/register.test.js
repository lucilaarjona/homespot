import "@testing-library/jest-dom"
import { render, screen, fireEvent, act } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Register from "../pages/Register/index"
import userEvent from "@testing-library/user-event";
import React from "react"

let component = null;

beforeEach(() => {

    component = render(

        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    expect(component.container).toBeInTheDocument();

});


test('render of title Crear Cuenta', () => {

    expect(component.container.querySelector('div[ class="title"]'))

});

test(' imput name is empty and alowws to write ', () => {

    const inputName = component.container.querySelector('input[name="name"]');

    fireEvent.change(inputName, {
        target: { value: 'mai' }
    });

    expect(inputName.value).toMatch('mai');

});


test(' imput surname is empty and alowws to write ', () => {

    const inputSurName = component.container.querySelector('input[name="surname"]');

    fireEvent.change(inputSurName, {
        target: { value: ' lalala' }
    });

    expect(inputSurName.value).toMatch('lalala');

});

test(' imput Email is empty and alowws to write ', () => {

    const inputEmail = component.container.querySelector('input[name="email"]');

    fireEvent.change(inputEmail, {
        target: { value: ' dontknow@hot.co' }
    });

    expect(inputEmail.value).toMatch('dontknow@hot.co');

});

test(' imput Password is empty and alowws to write ', () => {

    const inputPassword = component.container.querySelector('input[name="password"]');

    fireEvent.change(inputPassword, {
        target: { value: ' allgood' }
    });

    expect(inputPassword.value).toMatch('allgood');

});

test(' imput ConfirmPassword is empty and alowws to write ', () => {

    const inputConfirmPassword = component.container.querySelector('input[name="confirmPassword"]');

    fireEvent.change(inputConfirmPassword, {
        target: { value: ' allgood' }
    });

    expect(inputConfirmPassword.value).toMatch('allgood');

});



test(' simulation of aggregation and sending of data ', async () => {

    const inputName = component.container.querySelector('input[name="name"]');
    const inputSurName = component.container.querySelector('input[name="surname"]');
    const inputEmail = component.container.querySelector('input[name="email"]');
    const inputPassword = component.container.querySelector('input[name="password"]');
    const inputConfirmPassword = component.container.querySelector('input[name="confirmPassword"]');

    const button = component.container.querySelector('button[type="submit"]');

    act(() => {
        fireEvent.change(inputName, { target: { value: 'mai' } })
        fireEvent.change(inputSurName, { target: { value: 'lalala' } })
        fireEvent.change(inputEmail, { target: { value: 'dontknow@hot.co' } })
        fireEvent.change(inputPassword, { target: { value: 'allgood' } })
        fireEvent.change(inputConfirmPassword, { target: { value: 'allgod' } })

        userEvent.click(button);
    });

    expect(component.container.getElementsByClassName('error').length).not.toBe(5);
});


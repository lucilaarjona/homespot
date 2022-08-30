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

test("renders component", () => {

    const user = {
        email: "b@.com",
        password: "password"
      };
    const { container } = render(
      <form user={user} handleSubmit={() => {}} handleChange={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  test("should disable the button when one of user data is missing", () => {
    const button = component.getByRole('button');
    expect(button).toThrowError();
  });

//test("Reacts to url changes when touching the button", async () => {

 //   const button = screen.findByRole("link", { name: "Registrar" });

 //   userEvent.click(button);

 //   expect(button.value)

//});

//test("should throw error when try to send empty imput", async () => {

 //   const button = component.getByRole('button');

  //  act(() => {
 //       userEvent.click(button);
 //   });

 //   expect(component.container.getElementsByTextContent('Por favor vuelva a intentarlo, sus credenciales son invalidas').toBeInTheDocument());

//});

//test('Simulation writing info', async () => {
//    const emailInput = component.container.querySelector('input[type="email"]');
 //   const passwordInput = component.container.querySelector('input[type="password"]');
//    const inputSubmit = component.container.querySelector("button")
   // const button = component.getByRole('button');
///    act(() => {
 //       fireEvent.change(emailInput, { target: { value: 'mbrthy@hotmail.com' } })
  //      fireEvent.change(passwordInput, { target: { value: '1231543' } })
  //      fireEvent.click(inputSubmit)
 //   });
 //   expect(inputSubmit).not.toBeInTheDocument();
//});


//*test(' button submit on the form is working', () => {
//    const testData = { email: 'mbrthy@hotmail.com', password: '1231543' }

 //   const mockFn = jest.fn();

 //   render(<logIn createTask={mockFn} />)

 //   const emailInput = component.container.querySelector('input[type="email"]');
  //  const passwordInput = component.container.querySelector('input[type="password"]');
  //  const inputSubmit = component.container.querySelector("button")



  //  userEvent.clear(emailInput)
 //   userEvent.type(emailInput, testData.email);

//    userEvent.clear(passwordInput)
  //  userEvent.type(passwordInput, testData.password);

  //  userEvent.click(inputSubmit)

 //   const returnData = mockFn.mock.calls[0][0];
 //   expect(returnData).toMatchObject(testData);

//* */})
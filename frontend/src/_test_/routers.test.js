import Routers from '../Routes/Routers';
import { render } from "@testing-library/react";
import React from "react";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {Register} from "../pages/Register";
import {LogIn} from "../pages/LogIn";
import {Home }from "../pages/home";
import { act } from 'react-dom/test-utils';
import "@testing-library/jest-dom/extend-expect";

jest.mock( '../pages/Register');
jest.mock( '../pages/LogIn');
jest.mock( '../pages/home')

test('should render page Register', function() {

(Register as jest.Mock).mockImplementation( () =>  <div>RegisterMock</div>)
 
 render (  
    <Routers/>  
 );

 expect (creen.getByText("RegisterMock")).toBeInTheDocument();

});



//let component = null;
//beforeEach(() => {
  //  component = render(
 //    <BrowserRouter>
  //          <Routers /> 
       // </BrowserRouter>
  //  )
  ///  expect(component.container).toBeInTheDocument();
// beforeEach })

//test('render the Router', () => {
 //   const component = render(<Routers />);
 //   expect(component.container).toBeInTheDocument();
//});


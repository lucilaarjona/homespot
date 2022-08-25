import Routers from '../Routes/Routers';
import { render } from "@testing-library/react";
import React from "react";
import {BrowserRouter} from "react-router-dom";
let component = null;
beforeEach(() => {
    component = render(
 //       <BrowserRouter>
            <Routers /> 
 //       </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
})

test('render the Router', () => {
    const component = render(<Routers />);
    expect(component.container).toBeInTheDocument();
});


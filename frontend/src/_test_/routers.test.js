import Routers from '../Routes/Routers';
import { render } from "@testing-library/react";
import React from "react";

let component = null;

beforeEach(() => {
    component = render(<Routers />)
});

test('Renderizado del router', () => {
    expect(component.container).toBeInTheDocument();
});
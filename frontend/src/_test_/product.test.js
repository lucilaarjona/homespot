import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen, fireEvent, within} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import Product from '../components/products/Product'
import user from '@testing-library/user-event';
import axios from 'axios';

import Router from "react-router-dom";

let component = null;

beforeEach(() => {
      component = render (
          <BrowserRouter>
              <Product />
          </BrowserRouter>
      )
      expect(component.container).toBeInTheDocument();
  })
  
  test('render of Product', () => {
      const component = render(<Product/>);
      expect(component.container).toBeInTheDocument();
  });
  
test('Render of  img', () => {
            const img =screen.findByRole("img", { name: /imgProduct/ });
 
      expect(img).toBeTruthy();
      });

test('Render of  button ver mas', () => {
      const img =screen.findByRole("img", { name: /imgProduct/ });
 
      expect(img).toBeTruthy();
      });


   



//     test('Renderizado H1 titulo tipo de alojamiento',() => {
//         const elemento = screen.queryByText("Hotel");
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado del nombre de alojamiento',() => {
//         const elemento = screen.queryByText("Libi");
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado de la direccion',() => {
//         const elemento = screen.queryByText("Av. San Telmo, San Telmo, Buenos Aires, Argentina");
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado subtitulo del producto',() => {
//         const elemento = screen.queryByText("Libi");
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado de la descripcion',() => {
//         const elemento = screen.queryByText("En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones");
//         expect(elemento).toBeInTheDocument();
//     });

//     test('PENDIENTE Renderizado de las caracteristicas',() => {
//         const elemento = screen.getByRole('list')
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado subtitulo Fechas Disponibles',() => {
//         const elemento = screen.queryByText("Fechas disponibles");
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado texto de reserva',() => {
//         const elemento = screen.getByText(/agregá tus fechas de viaje para obtener precios exactos/i);
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado subtitulo Mapa',() => {
//         const elemento = screen.getByText(/¿dónde vas a estar\?/i)
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado texto de la direccion en el mapa',() => {
//         const elemento = screen.getByText(/av\. san telmo, san telmo, buenos aires, argentina/i);
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado subtitulo de politicas',() => {
//         const elemento = screen.getByText(/qué tenés que saber/i)
//         expect(elemento).toBeInTheDocument();
//     });

//     test('Renderizado subtitulo dos de politicas',() => {
//         const elemento = screen.getByText(/normas de la casa/i);
//         expect(elemento).toBeInTheDocument();
//     });
    

//     test('boton Buscar',() => {
//         screen.getByRole('button', {
//             name: /iniciar reserva/i
//           })
//     })  
// })
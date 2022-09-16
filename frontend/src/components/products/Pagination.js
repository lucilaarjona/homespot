import React from 'react';
import {Pag} from "./StylesPagination"



const Pagination = ({ cardsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <Pag>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => paginate(number)}  className='page-link'>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </Pag>
    );
  };
  
  export default Pagination;
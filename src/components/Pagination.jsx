
import React from 'react';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, fetchPaginated }) => {

    const pageCount = Math.ceil(itemsCount / pageSize);    
    const pages = _.range(1, pageCount+1);

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                
                {
                    pages.map( page => (
                        <li key={page} className="page-item" onClick={() => fetchPaginated(page, pageSize )}>
                            <a className="page-link" href="#"> { page } </a>
                        </li>
                    ) )
                }
                
                
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    );
};

export default Pagination;
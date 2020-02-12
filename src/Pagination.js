import React from 'react';

import './Pagination.css';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className="pagination">
            {gotoPrevPage && <button className="btn btn-prev" onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button className="btn btn-next" onClick={gotoNextPage}>Next</button>}
        </div>
    )
}

export default Pagination;

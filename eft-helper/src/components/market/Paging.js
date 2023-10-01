import React from 'react';
import Pagination from 'react-js-pagination';
const Paging = ({ totalCount, dataPerPage, pageRangeDisplayed, handlePageChange, page }) => {
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={dataPerPage}
            totalItemsCount={totalCount ? totalCount : 0}
            pageRangeDisplayed={pageRangeDisplayed}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={handlePageChange}
        />
    );
};
export default Paging;

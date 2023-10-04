import React from 'react'
import './pagination.css'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const nextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav aria-label="Page navigation" role='pagination' className='pagination'>
            <ul className="pagination-list">
                <li className="page-item prev" onClick={prevPage}>
                    <a className="page-link" href="#" >Previous</a>
                </li>

                {pageNumbers.map(pageNum => {
                    return (
                        <li
                            key={pageNum}
                            className={`page-item ${currentPage == pageNum ? 'active' : ''} pageNum`}
                            onClick={() => setCurrentPage(pageNum)}
                        >
                            <a
                                className="page-link" 
                                href="#"
                            >
                                {pageNum}
                            </a>
                        </li>
                    )
                })}

                <li className="page-item next" onClick={nextPage}>
                    <a className="page-link" href="#" >Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
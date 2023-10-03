import React from 'react'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    return (
        <nav aria-label="Page navigation example" className='pagination'>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={prevPage}>Previous</a>
                </li>

                {pageNumbers.map(pageNum => {
                    return (
                        <li 
                            key={pageNum} 
                            className={`page-item ${currentPage == pageNum ? 'active' : ''} pageNum`} 
                        >
                            <a onClick={() => setCurrentPage(pageNum)}
                            className="page-link" 
                            href="#">
                                {pageNum}
                            </a>
                        </li>
                    )
                })}

                <li className="page-item">
                    <a className="page-link" href="#" onClick={nextPage}>Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
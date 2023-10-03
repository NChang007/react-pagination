import { useState } from 'react'

import Pagination from './pagination/Pagination'

function App() {
  let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


  // User is currently on this page
	const [currentPage, setCurrentPage] = useState(1);
	// No of Records to be displayed on each page   
	const [recordsPerPage] = useState(10);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	// Records to be displayed on the current page
	const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <div>
      <div className='card-cont'>
        {currentRecords.map((item,idx) => (
          <div>
            {item}
          </div>
        ))}
      </div>

      <Pagination
				nPages = { nPages }
				currentPage = { currentPage } 
				setCurrentPage = { setCurrentPage }
			/>
    </div>
  )
}

export default App

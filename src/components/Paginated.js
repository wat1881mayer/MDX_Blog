import React from 'react'
import MuiPagination from '@mui/material/Pagination'
import {withStyles} from '@mui/styles'
import Stack from '@mui/material/Stack'
import { navigate } from 'gatsby'

const Paginated = ({ pageContext }) => {
  const { currentPage, numPages } = pageContext
  /*
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  */
  
  const Pagination = withStyles({
    root: {
      
      marginBottom:'10px',
    },
  })(MuiPagination);

  const nextPageNavigate = (page) => {
    if (page === 1){
      navigate("/")
    }else{
      navigate(`/${page}`)
    }
  }

  return (
    <>
      <Stack spacing={2}>
        <div style={{textAlign:"center"}}>
        <Pagination
          count={numPages}
          page={currentPage}
          onChange={(e,offset) => nextPageNavigate(offset)}
          size="large"
        />
        </div>
      </Stack>
    </>
  )
}

export default Paginated

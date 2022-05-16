import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function Search() {
    const [searchValue, changeSearchValue] = useState("")
    const handleChange = (e) => changeSearchValue(e.target.value)
    console.log(searchValue);

  return (
    <>
    <Form.Control type='input' placeholder='Search' onChange={ handleChange } value={searchValue}/>
    </>
  )
}

export default Search
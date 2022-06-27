import React from 'react'
import { useGlobalContext } from '../context/context'

const EditField = () => {
  const { editData, handleEditInput, handleEditInputSubmit } =
    useGlobalContext()
  return (
    <form>
      <label htmlFor='edit'>edit</label>
      <input
        type='text'
        name='edit'
        id='edit'
        value={editData}
        onChange={handleEditInput}
      />
      <button type='submit' onClick={handleEditInputSubmit}>
        edit
      </button>
    </form>
  )
}

export default EditField

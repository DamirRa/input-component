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
        value={editData.editKlijent}
        onChange={handleEditInput}
      />
      <button type='submit' onClick={handleEditInputSubmit}>
        edit
      </button>
    </form>
  )
}
export const EditFieldBroj = () => {
  const { editData, handleEditInput, handleEditInputSubmit } =
    useGlobalContext()
  return (
    <form>
      <label htmlFor='broj'>edit</label>
      <input
        type='text'
        name='broj'
        id='broj'
        value={editData.editBroj}
        onChange={handleEditInput}
      />
      <button type='submit' onClick={handleEditInputSubmit}>
        edit
      </button>
    </form>
  )
}

export default EditField

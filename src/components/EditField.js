import React from 'react'
import { useGlobalContext } from '../context/context'

const EditField = () => {
  const { editData, handleEditInput, handleEditInputSubmit, editing } =
    useGlobalContext()
  return (
    <form className={`${editing.klijent ? 'edit-inputs' : 'hide-input'}`}>
      <label htmlFor='klijent'>klijent</label>
      <input
        type='text'
        name='klijent'
        id='klijent'
        value={editData.klijent}
        onChange={handleEditInput}
      />
      <button type='submit' onClick={handleEditInputSubmit}>
        edit
      </button>
    </form>
  )
}
export const EditFieldBroj = () => {
  const { editData, handleEditInput, handleEditInputSubmit, editing } =
    useGlobalContext()
  return (
    <form className={`${editing.broj ? 'edit-inputs' : 'hide-input'}`}>
      <label htmlFor='broj'>broj</label>
      <input
        type='text'
        name='broj'
        id='broj'
        value={editData.broj}
        onChange={handleEditInput}
      />
      <button type='submit' onClick={handleEditInputSubmit}>
        edit
      </button>
    </form>
  )
}

export default EditField

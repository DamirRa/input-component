import React from 'react'
import { useGlobalContext } from '../context/context'

const EditFieldKlijent = () => {
  const { editData, handleEditInput, handleEditInputSubmit, editing } =
    useGlobalContext()
  return (
    <form
      className={`${editing.klijent ? 'edit-inputs' : 'hide-input'} edit-field`}
    >
      <label htmlFor='klijent'>klijent</label>
      <textarea
        cols='60'
        rows='4'
        type='text'
        name='klijent'
        id='klijent'
        value={editData.klijent}
        onChange={handleEditInput}
      />
      <button className='btn' type='submit' onClick={handleEditInputSubmit}>
        Izmijeni
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
      <textarea
        cols='60'
        rows='4'
        type='text'
        name='broj'
        id='broj'
        value={editData.broj}
        onChange={handleEditInput}
      />
      <button className='btn' type='submit' onClick={handleEditInputSubmit}>
        Izmijeni
      </button>
    </form>
  )
}
export const EditFieldDatum = () => {
  const { editData, handleEditInput, handleEditInputSubmit, editing } =
    useGlobalContext()
  return (
    <form className={`${editing.datum ? 'edit-inputs' : 'hide-input'}`}>
      <label htmlFor='broj'>datum</label>
      <textarea
        cols='60'
        rows='4'
        type='text'
        name='datum'
        id='datum'
        value={editData.datum}
        onChange={handleEditInput}
      />
      <button className='btn' type='submit' onClick={handleEditInputSubmit}>
        Izmijeni
      </button>
    </form>
  )
}

export default EditFieldKlijent

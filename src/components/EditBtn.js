import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const EditBtn = ({ id }) => {
  const { handleEdit, setEditing } = useGlobalContext()

  return (
    <div>
      <button
        className='edit-btn btn'
        type='button'
        onClick={() => {
          handleEdit(id)

          setEditing((prev) => ({
            ...!prev,
            klijent: true,
          }))
        }}
      >
        <FaRegEdit />
      </button>
    </div>
  )
}
export const EditBtnBroj = ({ id }) => {
  const { handleEdit, setEditing } = useGlobalContext()

  return (
    <div>
      <button
        className='edit-btn btn'
        type='button'
        onClick={() => {
          handleEdit(id)

          setEditing((prev) => ({
            ...!prev,
            broj: true,
          }))
        }}
      >
        <FaRegEdit />
      </button>
    </div>
  )
}
export const EditBtnDatum = ({ id }) => {
  const { handleEdit, setEditing } = useGlobalContext()

  return (
    <div>
      <button
        type='button'
        className='edit-btn btn'
        onClick={() => {
          handleEdit(id)

          setEditing((prev) => ({
            ...!prev,
            datum: true,
          }))
        }}
      >
        <FaRegEdit />
      </button>
    </div>
  )
}

export default EditBtn

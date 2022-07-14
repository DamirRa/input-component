import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const EditBtn = ({ id }) => {
  const { handleEdit, setEditing, setEditing2 } = useGlobalContext()

  return (
    <div>
      <button
        type='button'
        onClick={() => {
          handleEdit(id)
          setEditing(true)
          setEditing2(false)
        }}
      >
        <FaRegEdit />
      </button>
    </div>
  )
}
export const EditBtn2 = ({ id }) => {
  const { handleEdit, setEditing2, setEditing } = useGlobalContext()

  return (
    <div>
      <button
        type='button'
        onClick={() => {
          handleEdit(id)
          setEditing2(true)
          setEditing(false)
        }}
      >
        <FaRegEdit />
      </button>
    </div>
  )
}

export default EditBtn

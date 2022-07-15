import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const EditBtn = ({ id }) => {
  const { handleEdit, setEditing } = useGlobalContext()

  return (
    <div>
      <button
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
export const EditBtn2 = ({ id }) => {
  const { handleEdit, setEditing } = useGlobalContext()

  return (
    <div>
      <button
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

export default EditBtn

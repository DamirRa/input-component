import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const EditBtn = ({ id }) => {
  const { handleEdit } = useGlobalContext()

  return (
    <div>
      <button type='button' onClick={() => handleEdit(id)}>
        <FaRegEdit />
      </button>
    </div>
  )
}

export default EditBtn

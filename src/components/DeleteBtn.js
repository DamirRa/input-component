import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const DeleteBtn = ({ id }) => {
  const { handleDelete } = useGlobalContext()
  return (
    <div>
      <button type='button' onClick={() => handleDelete(id)}>
        <FaTrashAlt />
      </button>
    </div>
  )
}

export default DeleteBtn

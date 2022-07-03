import React from 'react'
import { useGlobalContext } from '../context/context'
import EditBtn from './EditBtn'
import EditField from './EditField'

const List = () => {
  const { list, editId, edit } = useGlobalContext()

  return (
    <div>
      {list.map((item) => {
        const { id, klijent, broj } = item
        return (
          <div key={id} className='list-container'>
            <h5>{klijent}</h5>
            <EditBtn id={id} />
            {id === editId && edit ? <EditField /> : null}
            <h5>{broj}</h5>
            <EditBtn id={id} />
            {id === editId && edit ? <EditField /> : null}
          </div>
        )
      })}
    </div>
  )
}

export default List

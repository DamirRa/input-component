import React from 'react'
import { useGlobalContext } from '../context/context'
import DeleteBtn from './DeleteBtn'
import EditBtnKlijent, { EditBtnBroj, EditBtnDatum } from './EditBtn'
import EditFieldKlijent, { EditFieldDatum } from './EditField'
import { EditFieldBroj } from './EditField'

const List = () => {
  const { list, editId, edit } = useGlobalContext()

  return (
    <div>
      {list.map((item) => {
        const { id, klijent, broj, datum } = item
        return (
          <div key={id} className='list-container'>
            <h5>{klijent}</h5>
            <EditBtnKlijent id={id} />
            {id === editId && edit ? <EditFieldKlijent /> : null}
            <h5>{broj}</h5>
            <EditBtnBroj id={id} />
            {id === editId && edit ? <EditFieldBroj /> : null}
            <h5>{datum}</h5>
            <EditBtnDatum id={id} />
            {id === editId && edit ? <EditFieldDatum /> : null}
            <DeleteBtn id={id} />
          </div>
        )
      })}
    </div>
  )
}

export default List

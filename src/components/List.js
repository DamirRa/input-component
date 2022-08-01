import React from 'react'
import { useGlobalContext } from '../context/context'
import DeleteBtn from './DeleteBtn'
import EditBtnKlijent, { EditBtnBroj, EditBtnDatum } from './EditBtn'
import EditFieldKlijent, { EditFieldDatum } from './EditField'
import { EditFieldBroj } from './EditField'

const List = () => {
  const { list, editId, edit } = useGlobalContext()

  return (
    <div className='list'>
      {list.length > 0 && (
        <header className='header'>
          <h4>klijent</h4>
          <h4>broj</h4>
          <h4>datum</h4>
        </header>
      )}
      {list.map((item) => {
        const { id, klijent, broj, datum } = item
        return (
          <div key={id} className='list-container'>
            <div className='list-item'>
              <section>
                <h5>{klijent}</h5>
                <EditBtnKlijent id={id} />
              </section>
            </div>
            <div className='list-item'>
              <section>
                <h5>{broj}</h5>
                <EditBtnBroj id={id} />
              </section>
            </div>
            <div className='list-item'>
              <section>
                <h5>{datum}</h5>
                <EditBtnDatum id={id} />
              </section>
            </div>
            <DeleteBtn id={id} />
            <article className='edit-field'>
              {id === editId && edit ? <EditFieldKlijent /> : null}
              {id === editId && edit ? <EditFieldBroj /> : null}
              {id === editId && edit ? <EditFieldDatum /> : null}
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default List

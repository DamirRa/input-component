import React from 'react'
import { useGlobalContext } from '../context/context'

const Warning = ({ toggle }) => {
  const { setList } = useGlobalContext()
  return (
    <section className='modal-container'>
      <div className='show-modal'>
        <article className='modal-control'>
          <h5>Da li ste sigurni da želite da obrišete?</h5>
          <div className='btn-control'>
            <button type='button' onClick={toggle}>
              NE
            </button>
            <button type='button' onClick={() => setList([])}>
              Obriši sve
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Warning

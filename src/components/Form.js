import React from 'react'
import { useGlobalContext } from '../context/context'
import ClearAllBtn from './ClearAllBtn'
import List from './List'

const Form = () => {
  const { handleSubmit, data, handleInput, list } = useGlobalContext()

  return (
    <section className='form-control'>
      <form className='form-container'>
        <div className='container'>
          <article className='input-container'>
            <label htmlFor='klijent'>klijent</label>
            <textarea
              rows='4'
              type='text'
              name='klijent'
              id='klijent'
              value={data.klijent}
              onChange={handleInput}
            />
          </article>
          <article className='input-container'>
            <label htmlFor='broj'>broj</label>
            <textarea
              rows='4'
              type='text'
              name='broj'
              id='broj'
              value={data.broj}
              onChange={handleInput}
            />
          </article>
          <article className='input-container'>
            <label htmlFor='broj'>datum</label>
            <textarea
              rows='4'
              type='text'
              name='datum'
              id='datum'
              value={data.datum}
              onChange={handleInput}
            />
          </article>
        </div>
        <button className='btn' type='submit' onClick={handleSubmit}>
          unesi
        </button>
      </form>
      <div className={`${list.length > 0 ? 'main-list' : null}`}>
        <List />
        {list.length > 0 && <ClearAllBtn />}
      </div>
    </section>
  )
}

export default Form

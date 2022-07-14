import React from 'react'
import { useGlobalContext } from '../context/context'
import List from './List'

const Form = () => {
  const { handleSubmit, data, handleInput } = useGlobalContext()

  return (
    <section className='form-control'>
      <form className='container'>
        <label htmlFor='klijent'>klijent</label>
        <input
          type='text'
          name='klijent'
          id='klijent'
          value={data.klijent}
          onChange={handleInput}
        />
        <label htmlFor='broj'>broj</label>
        <input
          type='text'
          name='broj'
          id='broj'
          value={data.broj}
          onChange={handleInput}
        />
        <button type='submit' onClick={handleSubmit}>
          unesi
        </button>
      </form>
      <List />
    </section>
  )
}

export default Form

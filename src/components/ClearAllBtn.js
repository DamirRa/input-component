import React, { useState } from 'react'
import Warning from '../pages/Warning'

const ClearAllBtn = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }
  return (
    <div className='clear-btn-container'>
      <button type='button' className='btn clear-btn' onClick={toggle}>
        obriši sve
      </button>
      {modal && <Warning toggle={toggle} />}
    </div>
  )
}

// onClick={() => setList([])}
export default ClearAllBtn

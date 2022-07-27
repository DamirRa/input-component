import React, { useState } from 'react'
import Warning from '../pages/Warning'

const ClearAllBtn = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }
  return (
    <div>
      <button type='button' onClick={toggle}>
        clear all
      </button>
      {modal && <Warning toggle={toggle} />}
    </div>
  )
}

// onClick={() => setList([])}
export default ClearAllBtn

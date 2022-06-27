import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState({ klijent: '' })
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({ editKlijent: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = { ...data, id: new Date().getTime().toString() }

    setList([...list, newData])
    setData({ klijent: '' })
    setEdit(false)
  }

  const handleInput = (e) => {
    const value = e.target.value
    const name = e.target.name

    setData({ ...data, [name]: value })
  }

  const handleEditInput = (e) => {
    setEditData(e.target.value)
  }

  const handleEditInputSubmit = (e) => {
    e.preventDefault()
    setList(
      list.map((item) => {
        console.log(item)
        if (item.id === editId) {
          return { ...item, klijent: editData }
        }
        return item
      })
    )
    setEdit(false)
  }

  const handleEdit = (id) => {
    const editItem = list.find((item) => item.id === id)
    setEdit(true)
    setEditId(editItem.id)
    setEditData(editItem.klijent)
  }

  return (
    <AppContext.Provider
      value={{
        setData,
        handleSubmit,
        data,
        list,
        handleInput,
        handleEdit,
        handleEditInput,
        edit,
        editData,
        editId,
        handleEditInputSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

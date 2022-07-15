import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState({ klijent: '', broj: '' })
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState('')
  const [editing, setEditing] = useState({ broj: false, klijent: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = { ...data, id: new Date().getTime().toString() }

    setList([...list, newData])
    setData({ klijent: '', broj: '' })
    setEdit(false)
  }

  const handleInput = (e) => {
    const value = e.target.value
    const name = e.target.name

    setData({ ...data, [name]: value })
  }

  const handleEditInput = (e) => {
    const value = e.target.value
    const name = e.target.name

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEditInputSubmit = (e) => {
    e.preventDefault()
    setList(
      list.map((item) => {
        if (item.id === editId) {
          return {
            ...item,

            klijent: editData.klijent,
            broj: editData.broj,
          }
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
    setEditData(editItem)
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
        setEditing,
        editing,
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

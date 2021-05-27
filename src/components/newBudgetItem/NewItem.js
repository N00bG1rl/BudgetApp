import { useState } from 'react'
import Form from './Form'

import '../../theme/NewItem.css'

const NewItem = (props) => {
  const [formOpen, setFormOpen] = useState(false)
  const handleDataSave = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onBudgetAdd(data)
  }
  const openForm = () => {
    setFormOpen(true)
  }
  const closeForm = () => {
    setFormOpen(false)
  }

  return (
    <div className='new-item'>
      {formOpen === false ? (
        <button onClick={ openForm }>Add item</button>
      ) : (
        <Form
          onDataSave={ handleDataSave }
          onCancel={ closeForm }
        />
      )}  
    </div>
  )
}

export default NewItem
import { useState } from 'react'

import '../../theme/Form.css'

const Form = (props) => {
  const [formTitle, setFormTitle] = useState('')
  const [formCost, setFormCost] = useState('')
  const [formDate, setFormDate] = useState('')

  const handleTitle = (event) => {
    setFormTitle(event.target.value)
  }
  const handleCost = (event) => {
    setFormCost(event.target.value)
  }
  const handleDate = (event) => {
    setFormDate(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      title: formTitle,
      cost: formCost,
      date: new Date(formDate)
    }

    props.onDataSave(data)
    
    setFormTitle('')
    setFormCost('')
    setFormDate('')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className='form'>
        <div className='form-item'>
          <label>Title</label>
          <input type='text' value={ formTitle } onChange={ handleTitle } />
        </div>
        <div className='form-item'>
          <label>Cost</label>
          <input type='number' value={ formCost } min='0,01' step='0.01' onChange={ handleCost } />
        </div>
        <div className='form-item'>
          <label>Date</label>
          <input type='date' value={ formDate } min='2021-01-01' max='2024-01-01' onChange={ handleDate } />
        </div>
      </div>
      <div className='form-actions'>
        <button type='submit'>Add expence</button>
      </div>
    </form>
  )
}

export default Form
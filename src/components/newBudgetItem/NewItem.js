import Form from './Form'


import '../../theme/NewItem.css'

const NewItem = (props) => {
  const handleDataSave = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onBudgetAdd(data)
  }

  return (
    <div className='new-item'>
      <Form onDataSave={ handleDataSave } />
    </div>
  )
}

export default NewItem
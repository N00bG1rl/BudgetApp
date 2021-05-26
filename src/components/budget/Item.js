import { useState } from 'react'

import ItemDate from './ItemDate'
import Card from '../layout/Card'
import '../../theme/Item.css'

const ListItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const handleClick = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
    <Card className='list-item'>
      <ItemDate date={ props.date } />
      <div className='list-item-desc'>
        <h2>{ title }</h2>
        <div className='list-item-cost'>${ props.cost }</div>
      </div>
      <button onClick={ handleClick }>Change title</button>
    </Card>
  )
}

export default ListItem
import ItemDate from './ItemDate'
import Card from '../layout/Card'
import '../../theme/Item.css'

const Item = (props) => {
  return (
    <li>
      <Card className='list-item'>
        <ItemDate date={ props.date } />
        <div className='list-item-desc'>
          <h2>{ props.title }</h2>
          <div className='list-item-cost'>${ props.cost }</div>
        </div>
      </Card>
    </li>
  )
}

export default Item
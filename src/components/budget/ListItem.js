import ItemDate from './ItemDate'
import Card from '../layout/Card'
import '../../theme/ListItem.css'

const ListItem = (props) => {
  return (
    <Card className='list-item'>
      <ItemDate date={ props.date } />
      <div className='list-item-desc'>
        <h2>{ props.title }</h2>
        <div className='list-item-cost'>${ props.cost }</div>
      </div>
    </Card>
  )
}

export default ListItem
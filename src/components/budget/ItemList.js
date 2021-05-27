import Item from './Item'

import '../../theme/ItemList.css'

const ItemList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='budget-list-fallback'>No items found.</h2>
  }

  return (
    <ul className='budget-list'>
      {props.items.map(item => (
        <Item
          key={item.id}
          title={item.title}
          cost={item.cost}
          date={item.date}
        />
      ))}
    </ul>
  )
}

export default ItemList
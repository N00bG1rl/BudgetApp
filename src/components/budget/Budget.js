import Item from './Item'
import Card from '../layout/Card'
import '../../theme/Budget.css'

const Budget = (props) => {
  return (
    
    <Card className="budget">
      <Item
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
      <Item
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
      <Item
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
      <Item
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
    </Card>
  )
}

export default Budget
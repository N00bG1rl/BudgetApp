import ListItem from './ListItem'
import Card from '../layout/Card'
import '../../theme/Budget.css'

const Budget = (props) => {
  return (
    <Card className="budget">
      <ListItem
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
      <ListItem
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
      <ListItem
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
      <ListItem
        title={props.items[0].title}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />
    </Card>
  )
}

export default Budget
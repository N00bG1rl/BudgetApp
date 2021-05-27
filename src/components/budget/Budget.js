import { useState } from 'react'

import Item from './Item'
import Card from '../layout/Card'
import FilterDate from '../budget/FilterDate'

import '../../theme/Budget.css'

const Budget = (props) => {
  const [selectedYear, setFilteredYear] = useState('2020')
  const handleChange = selectedYear => {
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }
  return (
    <div>
      <Card className="budget">
        <FilterDate selected={ selectedYear } onChange={ handleChange } />

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
    </div>
  )
}

export default Budget
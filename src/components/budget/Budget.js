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
        {props.items.map(item => (
          <Item
            title={item.title}
            cost={item.cost}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Budget
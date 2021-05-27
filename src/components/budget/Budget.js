import { useState } from 'react'

import Item from './Item'
import Card from '../layout/Card'
import FilterDate from '../budget/FilterDate'

import '../../theme/Budget.css'

const Budget = (props) => {
  const [selectedYear, setFilteredYear] = useState('2020')
  const handleChange = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const yearFilter = props.items.filter(result => {
    return result.date.getFullYear().toString() === selectedYear
  })
  return (
    <div>
      <Card className="budget">
        <FilterDate selected={ selectedYear } onChange={ handleChange } />
        {yearFilter.map(item => (
          <Item
            key={item.id}
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
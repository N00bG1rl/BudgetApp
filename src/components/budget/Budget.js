import { useState } from 'react'

import Card from '../layout/Card'
import FilterDate from '../budget/FilterDate'
import ItemList from './ItemList'
import BudgetChart from './BudgetChart'

import '../../theme/Budget.css'

const Budget = (props) => {
  const [selectedYear, setFilteredYear] = useState('2021')
  const handleChange = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const filterItems = props.items.filter(result => {
    return result.date.getFullYear().toString() === selectedYear
  })
  return (
    <div>
      <Card className="budget">
        <FilterDate selected={ selectedYear } onChange={ handleChange } />
        <BudgetChart budget={ filterItems } />
        <ItemList items={ filterItems } />
      </Card>
    </div>
  )
}

export default Budget
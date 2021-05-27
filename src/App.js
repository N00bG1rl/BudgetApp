import { useState } from 'react'

import NewItem from './components/newBudgetItem/NewItem'
import Budget from './components/budget/Budget'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    cost: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', cost: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    cost: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    cost: 450,
    date: new Date(2021, 5, 12),
  },
]

const App = () => {
  const [budget, setBudgetItems] = useState(DUMMY_DATA)

  const handleAdd = budget => {
    setBudgetItems(prevItems => {
      return [budget, ...prevItems]
    })
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewItem onBudgetAdd={ handleAdd } />
      <Budget items={ budget } />
    </div>
  )
}

export default App
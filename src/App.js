import Budget from './components/budget/Budget'
import NewItem from './components/newBudgetItem/NewItem'

const App = () => {
  const budget = [
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

  const addBudgetHandler = budget => {
    console.log('In App.js')
    console.log(budget)
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewItem onBudgetAdd={ addBudgetHandler } />
      <Budget items={ budget } />
    </div>
  )
}

export default App
import '../../theme/FilterDate.css'

const FilterDate = (props) => {
  const handleDropDown = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className='budget-filter'>
      <div className='budget-filter-control'>
        <label>Filter by year</label>
        <select value={ props.selected } onChange={ handleDropDown }>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default FilterDate
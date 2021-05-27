
import ChartBar from './ChartBar'
import '../../theme/Chart.css'

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMax = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoints => (
        <ChartBar
          key={ dataPoints.label }
          value={ dataPoints.value }
          maxValue={ totalMax }
          label={ dataPoints.label }
        />
      ))}
    </div>
  )
}

export default Chart
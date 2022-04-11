import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend,
  Tooltip
} from 'recharts';

// components
import CustomTooltip from './CustomTooltip';

// data
import dataQOL_YQ from '../../data/quality_of_life_groupby_YearQuestion.json' 

export default function AreaRecharts ({question}) {
  return (
    <AreaChart
      width={800}
      height={500}
      data={dataQOL_YQ}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis label={{ value: 'Data Value', angle: -90, position: 'Center' }}/>
      <Tooltip content={<CustomTooltip questionSelected={question}/>}/>
      <Legend />
      <Area 
        type="monotone" 
        dataKey={question+".Data_Value"} 
        name={question} 
        stroke="#8884d8" 
      />
    </AreaChart>
  )
}
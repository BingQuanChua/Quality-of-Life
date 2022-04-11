import { 
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function ScatterRecharts ({data, cusWidth}) {
  return (
    <>
      <ScatterChart
        width={cusWidth}
        height={400}
        margin={{
          top: 10,
          right: 30,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="Mean_days_of_activity_limitation.Data_Value" name="Health Data Value" unit="" 
               label={{ value: 'Average Days', angle: 0, position: 'insideBottom' }}/>
        <YAxis type="number" dataKey="Mean_days_of_activity_limitation.Rate" name="Infectious Rate" unit="" 
               label={{ value: 'Infectious Rate', angle: -90, position: 'Center' }}/>
        <ZAxis type="number" dataKey="Mean_days_of_activity_limitation.Sample_Size" range={[60, 400]} name="Sample Size" unit="" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Male" data={data['Male']} fill="#8884d8" shape="star" />
        <Scatter name="Female" data={data['Female']} fill="#82ca9d" shape="triangle" />
      </ScatterChart>
    </>
  )
}
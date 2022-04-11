import { 
  PieChart, 
  Pie, 
  Cell
} from 'recharts';

import data_QOL_YQB from '../../data/quality_of_life_groupby_YearQuestionBOCatBreakout';

// color age Hue
const color_age = ['#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c']

// Blue and pink
const color_gender = ['#2196f3', '#e91e63']

// Customized Label
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text style={{ fontSize: 12 }} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function PieRecharts ({year, question}) {

  return (
    <div>
      <PieChart width={200} height={200} margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
        <Pie
          dataKey="Data_Value"
          isAnimationActive={false}
          startAngle={180}
          endAngle={0}
          data={data_QOL_YQB[year][question]['Age_Group']}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={90}
          fill="#8884d8"
        >
          {data_QOL_YQB[year][question]['Age_Group'].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color_age[index]} />
          ))}
        </Pie>
        <Pie
          dataKey="Data_Value"
          isAnimationActive={false}
          startAngle={180}
          endAngle={360}
          data={data_QOL_YQB[year][question]['Gender']}
          labelLine={false}
          label={renderCustomizedLabel}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#0084d8"
        >
          {data_QOL_YQB[year][question]['Gender'].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color_gender[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )

}
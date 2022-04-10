import PieRecharts from './PieRecharts'; 

export default function CustomTooltip ({ active, payload, label }) {
  
  if (active && payload && payload.length) {
    // console.log(payload.length)
    // console.log(data_QOL_YQB[label][payload[0].name])
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <PieRecharts year={label} question={payload[0].name}/>
      </div>
    );
  }

  return null;
};
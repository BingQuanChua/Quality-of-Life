import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid
} from 'recharts';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// data
import dataIDCalifornia from '../../data/infectious_disease_California.json' 

const CustomizedDot = (props) => {
  const { cx, cy, payload, gender, color } = props;

  if (payload[gender]["Count"] > 20) {
    return (
      <svg x={cx - 10} y={cy - 10} width={10} height={10} fill={color} viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return null
};

export default function InfectiousDisease() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}> 
        {
          Object.keys(dataIDCalifornia).map((disease)=>{
            return (
              <Grid item xs={6} sm={4}>
                {disease}
                <LineChart
                  width={300}
                  height={200}
                  data={dataIDCalifornia[disease]}
                  isAnimationActive={false}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Year" />
                  <YAxis />
                  <Line 
                    type="monotone" 
                    dataKey="Female.Rate" 
                    stroke="#e91e63" 
                    dot={<CustomizedDot gender="Female" color="#e91e63"/>} />
                  <Line 
                    type="monotone" 
                    dataKey="Male.Rate" 
                    stroke="#3f51b5" 
                    dot={<CustomizedDot gender="Male" color="#3f51b5"/>}/>
                </LineChart>
              </Grid>
            )
          })
        } 
      </Grid>
    </Box>
  )
}
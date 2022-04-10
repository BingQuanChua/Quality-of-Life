import { useState } from "react";

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend,
  Tooltip
} from 'recharts';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// components
import CustomTooltip from './CustomTooltip';

// data
import dataQOL_YQ from '../../data/quality_of_life_groupby_YearQuestion.json' 

export default function QualityOfLife() {

  const [ questionSelected, setQuestionSelected] = useState("Mean_days_of_activity_limitation")

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>      
          <AreaChart
            width={800}
            height={500}
            data={dataQOL_YQ}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis label={{ value: 'Data Value', angle: -90, position: 'Center' }}/>
            <Tooltip content={<CustomTooltip questionSelected={questionSelected}/>}/>
            <Legend />
            <Area 
              type="monotone" 
              dataKey={questionSelected+".Data_Value"} 
              name="Mean_days_of_activity_limitation" 
              stroke="#8884d8" 
            />
            {/* <Line 
              type="monotone" 
              dataKey="Mean_mentally_unhealthy_days.Data_Value"
              name="Mean_mentally_unhealthy_days" 
              stroke="#ffa4d8" 
            />
            <Line 
              type="monotone" 
              dataKey="Mean_physically_or_mentally_unhealthy_days.Data_Value" 
              name="Mean_physically_or_mentally_unhealthy_days"
              stroke="#0084d8" 
            />
            <Line 
              type="monotone" 
              dataKey="Mean_physically_unhealthy_days.Data_Value" 
              name="Mean_physically_unhealthy_days"
              stroke="#8800aa" 
            /> */}
          </AreaChart>
        </Grid>

        <Grid item xs={2}>
          Button for questionSelect
          Legend for pie chart
        </Grid>
      </Grid>
    </Box>
  );
}
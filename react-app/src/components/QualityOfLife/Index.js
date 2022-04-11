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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import CustomTooltip from './CustomTooltip';

// data
import dataQOL_YQ from '../../data/quality_of_life_groupby_YearQuestion.json' 

export default function QualityOfLife() {

  const [ question, setQuestion] = useState("Mean_days_of_activity_limitation")

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h1 style={{marginTop: 5}}>
            Health Related Quality Of Life Over Years
          </h1>
        </Grid>
        <Grid item xs={12} md={8}>     
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
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ 
            width: 200, 
            mt: 5,
            mr: 5,
          }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Question</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={question}
                label="Question"
                onChange={handleChange}
              >
                <MenuItem value={"Mean_days_of_activity_limitation"}>Mean_days_of_activity_limitation</MenuItem>
                <MenuItem value={"Mean_mentally_unhealthy_days"}>Mean_mentally_unhealthy_days</MenuItem>
                <MenuItem value={"Mean_physically_or_mentally_unhealthy_days"}>Mean_physically_or_mentally_unhealthy_days</MenuItem>
                <MenuItem value={"Mean_physically_unhealthy_days"}>Mean_physically_unhealthy_days</MenuItem>
                <MenuItem value={"Percentage_with_14_or_more_activity_limitation_days"}>Percentage_with_14_or_more_activity_limitation_days</MenuItem>
                <MenuItem value={"Percentage_with_14_or_more_mentally_unhealthy_days_"}>Percentage_with_14_or_more_mentally_unhealthy_days_</MenuItem>
                <MenuItem value={"Percentage_with_14_or_more_physically_unhealthy_days"}>Percentage_with_14_or_more_physically_unhealthy_days</MenuItem>
                <MenuItem value={"Percentage_with_fair_or_poor_self-rated_health"}>Percentage_with_fair_or_poor_self-rated_health</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
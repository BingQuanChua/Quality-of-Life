import { useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import PieRechartsLegend from './PieRechartsLegend';
import AreaRecharts from './AreaRecharts';

export default function QualityOfLife() {

  const [ question, setQuestion] = useState("Mean_days_of_activity_limitation")

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h1 style={{marginTop: 5, marginLeft: 5}}>
            Health Related Quality Of Life Over Years
          </h1>
        </Grid>
        <Grid item xs={12} md={8}>     
          <AreaRecharts question={question} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ 
            width: 300, 
            mt: 5,
            ml: 5,
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
                <MenuItem value={"Mean_days_of_activity_limitation"}>Mean days of activity limitation</MenuItem>
                <MenuItem value={"Mean_mentally_unhealthy_days"}>Mean mentally unhealthy days</MenuItem>
                <MenuItem value={"Mean_physically_or_mentally_unhealthy_days"}>Mean physically or mentally unhealthy days</MenuItem>
                <MenuItem value={"Mean_physically_unhealthy_days"}>Mean physically unhealthy days</MenuItem>
                <MenuItem value={"Percentage_with_14_or_more_activity_limitation_days"}>Percentage with 14 or more activity limitation days</MenuItem>
                <MenuItem value={"Percentage_with_14_or_more_mentally_unhealthy_days_(Frequent_Mental_Distress)"}>Percentage with 14 or more mentally unhealthy days</MenuItem>
                <MenuItem value={"Percentage_with_14_or_more_physically_unhealthy_days"}>Percentage with 14 or more physically unhealthy days</MenuItem>
                <MenuItem value={"Percentage_with_fair_or_poor_self-rated_health"}>Percentage with fair or poor self-rated health</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ 
            width: 250, 
            mt: 5,
            ml: 5,
            mb: 10,
          }}>
            <PieRechartsLegend />
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
}
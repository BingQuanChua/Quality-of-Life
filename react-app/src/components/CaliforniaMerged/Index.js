import { useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ScatterRecharts from './ScatterRecharts';

// data
import dataCalifornia_SY from '../../data/california_groupby_SexYear.json' 
import dataCalifornia_SY_No_CAL from '../../data/california_groupby_SexYear_No_Chlamydia.json'
import dataCalifornia_SY_Only_CAL from '../../data/california_groupby_SexYear_Only_Chlamydia.json'

export default function QualityOfLife() {

  const [ questionSelected, setQuestionSelected] = useState("Mean_days_of_activity_limitation")

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12}>
          <h1 style={{marginLeft:5, marginTop: 5}}>
            Rate of Infectious Diseases Against Quality Of Life
          </h1>
        </Grid>
        <Grid item xs={12}>      
          <ScatterRecharts 
            cusWidth={800}
            data={dataCalifornia_SY}
          />
        </Grid>

        <Grid item xs={12} style={{backgroundColor: "#eee", marginTop: 10}}>
          <h3 style={{marginLeft:15}}>However</h3>
          <div style={{marginLeft:15}}>
            Don't let imbalanced data deceives you
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={{marginLeft:15}}>Data Without Chlamydia</h3>
          <ScatterRecharts 
            cusWidth={500}
            data={dataCalifornia_SY_No_CAL}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <h3>Data With Only Chlamydia</h3>
          <ScatterRecharts 
            cusWidth={500}
            data={dataCalifornia_SY_Only_CAL}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <br></br>    
        <br></br>    
      </Grid>
    </Box>
  );
}
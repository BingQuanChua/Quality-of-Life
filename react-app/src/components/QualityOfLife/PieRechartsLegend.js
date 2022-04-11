import Item from '@mui/material/Paper';
import Stack from '@mui/material/Stack'

// color age Hue
const color_age = ['#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c']

// Blue and pink
const color_gender = ['#2196f3', '#e91e63']


export default function PieRechartsLegend() {
  return (
    <Stack spacing={0.5}>
      <Item sx={{backgroundColor: color_age[0], pl:2}}>18-24_years_old</Item>
      <Item sx={{backgroundColor: color_age[1], pl:2}}>25-34_years_old</Item>
      <Item sx={{backgroundColor: color_age[2], pl:2}}>35-44_years_old</Item>
      <Item sx={{backgroundColor: color_age[3], pl:2}}>45-54_years_old</Item>
      <Item sx={{backgroundColor: color_age[4], pl:2}}>55-64_years_old</Item>
      <Item sx={{backgroundColor: color_age[5], pl:2}}>65-74_years_old</Item>
      <Item sx={{backgroundColor: color_age[6], pl:2}}>75+</Item>
      <Item sx={{backgroundColor: color_gender[0], pl:2}}>Male</Item>
      <Item sx={{backgroundColor: color_gender[1], pl:2}}>Female</Item>
    </Stack>
  )
}
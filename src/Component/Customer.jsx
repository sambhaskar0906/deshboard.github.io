import React from 'react'
import Deskboard from './Deskboard'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GeoChart from '../Charts/GeoChart';
import PieChart from '../Charts/PieChart';
import HbarChart from '../Charts/HbarChart';
import CountUp from 'react-countup';


function Customer() {
  return (
    
    <>
    <div style={{ marginBottom:'50px'}}>
    <Box sx={{ display: 'flex' }}>
       <Deskboard />
       <Box component="main" sx={{flexGrow:1, pt:3 , marginTop:"55px"}}>
       <Grid container spacing={2} sx={{display:{xs:'grid', md:'flex'}}}>
       <Grid item xs={6} rowGap={2} >
         <Stack columnGap={2} direction={'row'} sx={{display:{xs:'grid', md:'flex'}}} rowGap={2} marginBottom={'20px'}>
         <Card sx={{ width:{xs:'280px'}, minWidth: 49 + "%", height: 140, background:'rgb(40, 34, 70)', cursor:'pointer'}}>
      <CardContent>
      <div style={{color:'#fff'}}>
      <CreditCardIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
        <CountUp delay={0.4} end={22000} duration={0.7}/>
        </Typography>
        <Typography gutterBottom variant="boay2" component="div" sx={{color:'#ccd1d1'}}>
          Total Earning
        </Typography>
        
      </CardContent>
    </Card>
    <Card sx={{ width:{xs:'280px'}, minWidth: 49 + "%", height: 140, background:'rgb(53, 138, 148)', cursor:'pointer' }}>
      <CardContent>
      <div style={{color:'#fff'}}>
      <ShoppingBagIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
        <CountUp delay={0.4} end={3667} duration={0.7}/>
        </Typography>
        <Typography gutterBottom variant="boay2" component="div" sx={{color:'#ccd1d1'}}>
          Total Orders
        </Typography>
        
      </CardContent>
    </Card>
    </Stack>
       
    <Stack columnGap={2} direction={'row'} sx={{display:{xs:'grid', md:'flex'}}} rowGap={2}>
         <Card sx={{ width:{xs:'280px'}, minWidth: 49 + "%", height: 140, background:'rgb(40, 34, 70)', cursor:'pointer'}}>
      <CardContent>
      <div style={{color:'#fff'}}>
      <CreditCardIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
        <CountUp delay={0.4} end={9779} duration={0.7}/>
        </Typography>
        <Typography gutterBottom variant="boay2" component="div" sx={{color:'#ccd1d1'}}>
          Total Earning
        </Typography>
        
      </CardContent>
    </Card>
    <Card sx={{ width:{xs:'280px'}, minWidth: 49 + "%", height: 140, background:'rgb(53, 138, 148)', cursor:'pointer' }}>
      <CardContent>
      <div style={{color:'#fff'}}>
      <ShoppingBagIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
        <CountUp delay={0.4} end={24630} duration={0.7}/>
        </Typography>
        <Typography gutterBottom variant="boay2" component="div" sx={{color:'#ccd1d1'}}>
          Total Orders
        </Typography>
        
      </CardContent>
    </Card>
    </Stack>
         </Grid>
         <Grid item xs={6}>
         <Card sx={{minWidth:{xs:'280px'}, maxWidth: 600}}>
      <CardContent>
        <HbarChart  />
      </CardContent>
    </Card>
    </Grid>  
         </Grid>


         <Grid container spacing={2} marginTop={'20px'} sx={{display:{xs:'grid', md:'flex'}}} rowGap={2}>
         <Grid item xs={8}>
         <Card sx={{minWidth:{xs:'280px'}, maxWidth: 900}}>
      <CardContent>
       <GeoChart/>
      </CardContent>
    </Card>
    </Grid> 

    <Grid item xs={4}>
         <Card sx={{minWidth:{xs:'280px'}, maxWidth: 390}}>
      <CardContent>
      <PieChart/>
      </CardContent>
    </Card>
    </Grid>
    </Grid> 

       </Box>

    </Box>
    </div>
       
    </>
  )
}

export default Customer
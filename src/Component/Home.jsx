import React from 'react'
import Deskboard from './Deskboard'
import AccordionDesh from './AccordionDesh';
import BarChart from '../Charts/BarChart';
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CountUp from 'react-countup';

function Home() {
  return (
    <>
    <div style={{ marginBottom:'50px'}}>
    <Box sx={{ display: 'flex' }}>
       <Deskboard />
       <Box component="main" sx={{flexGrow: 1, marginTop:"70px"}}>
       <Grid container spacing={2} sx={{display:{xs:'grid', md:'flex'}}}>
         <Grid item xs={8} rowGap={2} >
         <Stack columnGap={2} direction={'row'} sx={{display:{xs:'grid', md:'flex'}}} rowGap={2}>
         <Card sx={{ width:{xs:'280px', md:'400px'}, height: 140, background:'rgb(40, 34, 70)', cursor:'pointer'}}>
      <CardContent>
      <div style={{color:'#fff'}}>
      <CreditCardIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
          $<CountUp delay={0.4} end={500.00} duration={0.7}/>
        </Typography>
        <Typography gutterBottom variant="boay2" component="div" sx={{color:'#ccd1d1'}}>
          Total Earning
        </Typography>
        
      </CardContent>
    </Card>
    <Card sx={{ width:{xs:'280px', md:'400px'},  height: 140, background:'rgb(53, 138, 148)', cursor:'pointer' }}>
      <CardContent>
      <div style={{color:'#fff'}}>
      <ShoppingBagIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
         $<CountUp delay={0.4} end={900.00} duration={0.7}/>
        </Typography>
        <Typography gutterBottom variant="boay2" component="div" sx={{color:'#ccd1d1'}}>
          Total Orders
        </Typography>
        
      </CardContent>
    </Card>
    </Stack>
         </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} >
        <Card sx={{ minWidth:{xs:'280px'},  maxWidth: 345, height: 60, background:'rgb(53, 138, 148)', cursor:'pointer' }}>
      <CardContent>
      <Stack spacing={2} direction={'row'} >
      <div style={{color:'#fff'}}>
        <StorefrontIcon/>
        </div>
        <div>
        <span style={{fontWeight:'600'}}>$203k</span>
        <span>Total Income</span>
        </div>
        </Stack>
      </CardContent>
    </Card>
    <Card sx={{ minWidth:{xs:'280px'}, maxWidth: 345,  height: 60, cursor:'pointer' }}>
      <CardContent>
      <Stack spacing={2} direction={'row'}>
        <StorefrontIcon/>
        <div>
        <span style={{fontWeight:'600'}}>$203k</span>
        <span>Total Income</span>
        </div>
        </Stack>
      </CardContent>
    </Card>
        </Stack>
         </Grid>
</Grid>
        <Grid container spacing={2} marginTop={'20px'} sx={{display:{xs:'grid', md:'flex'}}}>
         <Grid item xs={8}>
         <Card sx={{minWidth:{xs:'280px'}, minHeight: 60 + "vh" }}>
      <CardContent>
          <BarChart /> 
      </CardContent>
    </Card>
         </Grid>
        <Grid item xs={4}>
        <Card sx={{ minWidth:{xs:'280px'}, maxWidth:  345, minHeight: 67 + "vh" }}>
      <CardContent>
      <div>
        <span style={{fontWeight:'600'}}>Populor Product</span>
        <AccordionDesh />
        </div>
      
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

export default Home
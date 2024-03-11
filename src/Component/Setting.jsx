import React from 'react'
import Deskboard from './Deskboard'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Setting() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
       <Deskboard />
       <Box component="main" sx={{flexGrow:1, p:3, marginTop:"55px"}}>
           <Typography variant='h4'>Welcome to Setting Page</Typography>
       </Box>

    </Box>
       
    </>
  )
}

export default Setting
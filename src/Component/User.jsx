import React from 'react'
import Deskboard from './Deskboard'
import Box from '@mui/material/Box';
import UserList from './UserList';

function User() {
  return (
    <>
    <div style={{ marginBottom:'50px'}}>
    <Box sx={{ display: 'flex' }}>
       <Deskboard />
       <Box component="main" sx={{flexGrow:1, p:3, marginTop:"55px"}}>
           <UserList/>
       </Box>

    </Box>
    </div>
       
    </>
  )
}

export default User
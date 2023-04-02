import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { LinkedIn, GitHub, Email } from "@mui/icons-material";


const WazFoot = () => {
  return (
    <AppBar position="fixed" color="primary" style={{top: 'auto', bottom: 0, justifyContent: 'center', width: "100%", maxHeight: "30px"}}>
      <Toolbar style={{maxHeight: "30px"}}>
        <Typography variant="body1" color="inherit">
          Wazman94's Blog App &copy; 2023
        </Typography>
        <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1}}>
          <IconButton href="https://www.linkedin.com/shawazi">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://www.github.com/shawazi">
            <GitHub />
          </IconButton>
          <IconButton href="https://www.gmail.com/">
            <Email />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default WazFoot
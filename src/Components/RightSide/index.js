import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/system';

function RightSide() {
    return (
        <Box sx={{bgcolor:'RGB(250, 249, 248)',width:'620px'}}>
            <Typography mt={2} ml={2}>
                Lorem Ipsum
            </Typography>

            <Box mt={1.5} ml={1} sx={{bgcolor:'RGB(255, 255, 255)',width:'590px',height:'425px'}} >
                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Profile Picture" src='/static/images/avatar/1.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary='Lorem Ipsum' secondary='<no_reply@loremipsum.com>' />
                    </ListItem>

                    <Box mt={2} ml={8} width={429} height={185} bgcolor="RGB(57, 173, 209)">
                        <Stack textAlign= "center" >
                        <Typography pt={6} fontSize={50} sx={{color:"white"}}> Hi. </Typography>
                        </Stack>
                        
                    </Box>
                    <Typography mt={2}  ml={8}  sx={{color:"RGB(96, 94, 92)",fontSize:"13px"}}>
                    Jeremy,
                    </Typography>
                    <Typography  mt={2} ml={12} sx={{color:"RGB(96, 94, 92)", fontSize:"13px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi ut aliquip
                       ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                       in voluptate velit esse cillum dolore
                    </Typography>
            </Box>
        </Box>
    )
}

export default RightSide

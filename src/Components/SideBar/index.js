import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import NoteIcon from '@mui/icons-material/Note';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import NearMeIcon from '@mui/icons-material/NearMe';
import ModeIcon from '@mui/icons-material/Mode';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function SimpleAccordion() {
  return (
    <Box  width={250}>
      <Accordion sx={{backgroundColor:'RGB(243, 242, 241)'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography>Favourites</Typography>
        </AccordionSummary>
        
      </Accordion>
      


      <Accordion  sx={{backgroundColor:'RGB(243, 242, 241)'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Folders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box marginBottom={1.5}>
            <Stack direction="row">
                <InboxIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                    Inbox
                </Typography>
            </Stack>
          </Box>

          <Box marginBottom={1.5} >
            <Stack direction="row">
                <NotInterestedIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                    Junk Email
                </Typography>
            </Stack>
          </Box>

          <Box marginBottom={1.5}>
            <Stack direction="row">
                <ModeIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                    Drafts
                </Typography>
            </Stack>
          </Box>

          <Box marginBottom={1.5}>
            <Stack direction="row">
                <NearMeIcon sx={{color:'RGB(96, 94, 92,.4)'}}/> 
                <Typography marginLeft={2}>
                    Sent Items
                </Typography>
            </Stack>
          </Box>

          <Box marginBottom={1.5}>
            <Stack direction="row">
                <ScheduleIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                    Schedualed
                </Typography>
            </Stack>
          </Box>

          <Box marginBottom={1.5}>
            <Stack direction="row">
                <DeleteOutlineIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                    Deleted Items
                </Typography>
            </Stack>
          </Box>

          <Box marginBottom={1.5} >
            <Stack direction="row">
                <InventoryIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                   Archives
                </Typography>
            </Stack>
          </Box>

          <Box >
            <Stack direction="row">
                <NoteIcon sx={{color:'RGB(96, 94, 92,.4)'}}/>
                <Typography marginLeft={2}>
                    Notes
                </Typography>
            </Stack>
          </Box>

          


        </AccordionDetails>
      </Accordion>
<Box >
<Stack  direction="row" >
                <MailOutlineIcon  sx={{color:'RGB(0, 90, 158,.4)',ml:"20px"}}/>
                <CalendarMonthIcon sx={{color:'RGB(96, 94, 92,.4)' ,ml:"37px"}}/>
                <GroupIcon sx={{color:'RGB(96, 94, 92,.4)',ml:"37px"}}/>
                <MoreHorizIcon sx={{color:'RGB(96, 94, 92,.4)' ,ml:"37px"}}/>
                
       </Stack>

</Box>
      


      
      
    </Box>
  );
}
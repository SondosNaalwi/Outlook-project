import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import InventoryIcon from '@mui/icons-material/Inventory';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import UndoIcon from '@mui/icons-material/Undo';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function ButtonAppBar() {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{ backgroundColor: 'RGB(243, 242, 241)', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button sx={{ textTransform: "none" }} variant='contained' >

                        New message
                    </Button>
                    


                     <IconButton sx={{ ml: '55px' }} size="large" color="primary">

                        <DeleteOutlineIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Delete
                    </Typography> 


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <InventoryIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Archive
                    </Typography> 


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <NotInterestedIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Junk
                    </Typography>

                    <IconButton  size="large" color="primary">

                          <KeyboardArrowDownIcon />

                    </IconButton>


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <CleaningServicesIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Sweep
                    </Typography>


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <DriveFileMoveIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Moveto
                    </Typography>


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <LabelIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >

                        categorize
                    </Typography>


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <ScheduleIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Snooze
                    </Typography>


                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <UndoIcon />

                    </IconButton>
                    <Typography variant="p" color="primary" >
                        Undo
                    </Typography>

                    <IconButton sx={{ ml: '9px' }} size="large" color="primary">

                        <MoreHorizIcon />

                    </IconButton>

                </Toolbar>





            </AppBar>
        </Box>
    );
}
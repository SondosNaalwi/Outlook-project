import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';



const messages = [
  {
    id: 1,
    primary: 'Lorem Ipsum',
    secondary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Lorem Ipsum',
    secondary: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Lorem Ipsum',
    secondary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Lorem Ipsum',
    secondary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Lorem Ipsum",
    secondary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Lorem Ipsum',
    secondary: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Lorem Ipsum',
    secondary: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…`,
    person: '/static/images/avatar/1.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <Box width={352} 
    height="480px" 
    style={{
      overflow: "hidden",
      overflowY: "scroll"
      }} 

      >

        <React.Fragment >
            <CssBaseline />
            <Paper square sx={{ pb: '50px'  }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                Inbox
                </Typography>
                <List  sx={{ mb: 2 }}>
                {messages.map(({ id, primary, secondary, person }) => (
                    <React.Fragment key={id}>
                    {id === 4 && (
                        <ListSubheader sx={{ bgcolor: 'RGB(250, 249, 248) ' }}>
                        April
                        </ListSubheader>
                    )}

                    {id === 6 && (
                        <ListSubheader sx={{ bgcolor: 'RGB(250, 249, 248)' }}>
                        Older
                        </ListSubheader>
                    )}

                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <ListItemText primary={primary} secondary={secondary} />
                    </ListItem>
                    </React.Fragment>
                ))}
                </List>
            </Paper>
            
            </React.Fragment>
    </Box>
    
  );

  
}

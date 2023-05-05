import './App.css';
import PrimarySearchAppBar from './Components/Header';
import ButtonAppBar from './Components/NavBar';
import BottomAppBar from './Components/Center';
import SimpleAccordion from './Components/SideBar';
import { Box, Stack } from '@mui/system';
import RightSide from './Components/RightSide';

function App() {
  return (
    <>
    <PrimarySearchAppBar />
    <ButtonAppBar />
    <Box >
      <Stack direction="row">
        <SimpleAccordion />
        <BottomAppBar />
        <RightSide />
      </Stack>
      
    </Box>
    
    </>
    
  );
}

export default App;

import { ChakraProvider, Button, Box ,useColorModeValue} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';

function App() {
  
 return (

   <ChakraProvider>

 <Box minH={"100vh"} bg ={useColorModeValue("gray.100", "gray.900")}>
   <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/create" element={<CreatePage/>} />
     </Routes>
           <div style={{ padding: '20px' }}>
        {/* <Button colorSche me="teal">Hello Chakra UI</Button> */}
      </div>
   </Box>


    </ChakraProvider>
 );
}
export default App;
// import React from 'react';
import { ChakraProvider, Button, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';

function App() {
 return (
  // <Box minH={"100vh"}>
  //   {/* <Navbar/> */}
  //   <Routes>
  //     <Routes path="/" element={<HomePage/>} />
  //     <Routes path="/create" element={<CreatePage/>} />
  //   </Routes>
  // </Box>

   <ChakraProvider>

 <Box minH={"100vh"}>
   <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/create" element={<CreatePage/>} />
     </Routes>
           <div style={{ padding: '20px' }}>
        <Button colorSche me="teal">Hello Chakra UI</Button>
      </div>
   </Box>


    </ChakraProvider>
 );
}
export default App;
import {Box } from '@mui/material'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Resume from './Components/Resume';
import HomePage from "./Pages/HomePage.jsx";
import Contact from './Components/Contact.jsx';
// import Navbar from './Components/Navbar.jsx';


function App() {
  return (

    <Router>
      {/* <Navbar/> */}
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
         
          
        </Routes>
      </Box>
    </Router>
    
   
    
  );
}

export default App;

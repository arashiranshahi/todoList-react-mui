import { Box } from '@mui/system';
import React from 'react';
import InputContainer from '../InputContainer';

import './App.style.scss'

const App = () => {
    const mainStyle = {
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#3518FE',
    }
    return ( 
        <Box sx={mainStyle}>
            <InputContainer />
        </Box>
     );
}
 
export default App;
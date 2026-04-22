import React from 'react'
import { Box } from '@mui/material';

function Rightbar() {
    return (
        <Box sx={{ bgcolor: 'lightcoral' , flex: 2 , padding: 2 , display: { xs: 'none', sm: "block" }}}
        >
            Rightbar
        </Box>
    )
}

export default Rightbar

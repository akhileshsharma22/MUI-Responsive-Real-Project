import React from 'react'
import { Box } from '@mui/material';

function Sidebar() {
    return (
        <Box sx={{ bgcolor: 'skyblue', flex: 2 , padding: 2 , display: { xs: 'none', sm: "block" } }}>
            Sidebar
        </Box>
    )
}

export default Sidebar

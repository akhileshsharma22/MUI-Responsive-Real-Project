import React from 'react';
import { AppBar, Toolbar, styled , Typography, Box} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
}))

const Icons = styled(Box)(({theme}) =>({
    backgroundColor: "white",
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
                <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
                <Search>Search...</Search>
                <Icons>Icons</Icons>
            </StyledToolbar>
        </AppBar>
  );
};

export default Navbar;


import React from "react";
import {Link, Outlet} from "react-router-dom";
import {
    Container,
    Typography,
    Button,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    ThemeProvider,
    createTheme, CssBaseline
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import muiTheme from "./muiTheme";



const MuiPage = () => {
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
};

export default MuiPage;

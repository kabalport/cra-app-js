import React, { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Collapse,
    Container,
    CssBaseline,
    Drawer,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    ThemeProvider,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import muiTheme from "./muiTheme";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { NavLink } from 'react-router-dom';

const MuiPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");

    const handleSubMenuClick = (event) => {
        event.stopPropagation();  // 이벤트 전파를 중단합니다.
        setOpenSubMenu(!openSubMenu);
    };
    const [tabAnchorEl, setTabAnchorEl] = useState(null);

    const handleTabMenuOpen = (event) => {
        setTabAnchorEl(event.currentTarget);
    };

    const handleTabMenuClose = () => {
        setTabAnchorEl(null);
    };

    const handleLoginToggle = () => {
        setLoggedIn(!loggedIn);
    };

    // Simulate loading
    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    { text: "Main", path: "/" },
                    { text: "About", path: "/about" },
                    { text: "Chat", path: "/chat" },
                ].map((item, index) => (
                    <ListItem button key={item.text} component={Link} to={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                <ListItemButton onClick={handleSubMenuClick}>
                    <ListItemText primary="More" />
                    {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button sx={{ pl: 4 }} component={Link} to="/sub1">
                            <ListItemText primary="Sub Item 1" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} component={Link} to="/sub2">
                            <ListItemText primary="Sub Item 2" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <AppBar position="static"
                        elevation={0} // 그림자를 제거합니다.
                        sx={{ backgroundColor: muiTheme.palette.secondary.main, color: "#000000" }}>
                    <Toolbar>
                        {/* 왼쪽 영역 */}
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            PaperProps={{
                                sx: {
                                    backgroundColor: "#f8f8f8", // Light Gray
                                    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)"
                                }
                            }}
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}>
                            {list()}
                        </Drawer>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                            임시로고
                        </Typography>
                        </Box>


                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                            <NavLink to="/mui" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
                                <Button color="inherit">mui</Button>
                            </NavLink>
                            <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
                                <Button color="inherit">About</Button>
                            </NavLink>
                            <NavLink to="/chat" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
                                <Button color="inherit">Chat</Button>
                            </NavLink>
                        </Box>


                        {/* 오른쪽 영역 */}
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                            {/* 검색 아이콘 추가 */}
                            <IconButton color="inherit" sx={{ "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }}>

                            <SearchIcon />
                            </IconButton>
                        <Menu
                            anchorEl={tabAnchorEl}
                            open={Boolean(tabAnchorEl)}
                            onClose={handleTabMenuClose}
                        >
                            <MenuItem onClick={handleTabMenuClose} component={Link} to="/sub1">Sub Item 1</MenuItem>
                            <MenuItem onClick={handleTabMenuClose} component={Link} to="/sub2">Sub Item 2</MenuItem>
                        </Menu>

                        <IconButton color="inherit" onClick={handleNotificationClick}>
                            <NotificationsIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleNotificationClose}
                        >
                            <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
                            <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
                        </Menu>
                        <IconButton color="inherit" onClick={handleProfileClick}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            anchorEl={profileAnchorEl}
                            open={Boolean(profileAnchorEl)}
                            onClose={handleProfileClose}
                        >
                            <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                            <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
                        </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
                {/* Main content */}
                <Box sx={{ flexGrow: 1, p: 3 }}>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                      <>


                      </>
                    )}
                </Box>
                {/* Footer */}
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        backgroundColor: muiTheme.palette.primary.main,
                        color: "#ffffff"
                    }}
                >
                    <Container maxWidth={isMobile ? "sm" : "md"}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            © 2023 Your Company. All rights reserved.
                        </Typography>
                        <Box mt={2} display="flex" justifyContent="center" >
                            <Button size="small" component={Link} to="/sitemap"
                                    sx={{ color: "#000000" }} // 여기에 색상
                            >
                                Site Map
                            </Button>
                            <Button size="small" component={Link} to="/privacy"
                                    sx={{ color: "#000000" }}
                                 >
                                Privacy Policy
                            </Button>
                            <Button size="small" component={Link} to="/terms"
                                    sx={{ color: "#000000" }}
                            >
                                Terms & Conditions
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default MuiPage;
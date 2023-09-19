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
                <AppBar position="static">
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
                        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                            {list()}
                        </Drawer>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                            News
                        </Typography>
                        </Box>

                        {/* 가운데 영역 */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            {/* 모바일이 아닐 때만 Tab 컴포넌트를 보여줌 */}
                            {!isMobile && (
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="tabs"
                                    variant={isMobile ? "scrollable" : "standard"}
                                    scrollButtons="auto"
                                    style={{
                                        padding: 0,
                                        margin: 0
                                    }}
                                    sx={{
                                        "& .Mui-selected": {
                                            color: "black",  // 활성화된 탭의 글자 색을 검은색으로 설정
                                            borderBottom: "2px solid black"
                                        },
                                        "& .MuiTab-root": {  // 모든 탭에 적용될 스타일
                                            '&:hover': {  // 마우스가 위에 있을 때
                                                textDecoration: "underline",  // 밑줄 표시
                                                fontWeight: "bold"  // 볼드 처리
                                            }
                                        }
                                    }}
                                >
                                    <Tab label="Main" component={Link} to="/" />
                                    <Tab label="About" component={Link} to="/about" />
                                    <Tab label="Chat" component={Link} to="/chat" />
                                    <Tab label="More" onClick={handleTabMenuOpen} />
                                </Tabs>

                            )}
                        </Box>

                        {/* 오른쪽 영역 */}
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                            {/* 검색 아이콘 추가 */}
                            <IconButton color="inherit">
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
                    sx={{ py: 3, backgroundColor: "#f4f4f4", width: "100%" }}
                >
                    <Container maxWidth={isMobile ? "sm" : "md"}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            © 2023 Your Company. All rights reserved.
                        </Typography>
                        <Box mt={2} display="flex" justifyContent="center">
                            <Button size="small" component={Link} to="/sitemap">
                                Site Map
                            </Button>
                            <Button size="small" component={Link} to="/privacy">
                                Privacy Policy
                            </Button>
                            <Button size="small" component={Link} to="/terms">
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
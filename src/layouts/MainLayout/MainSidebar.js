import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const MainSidebar = () => {
    return (
        <Drawer variant="permanent" open>
            <List>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default MainSidebar;

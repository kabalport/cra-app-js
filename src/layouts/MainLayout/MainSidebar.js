import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';
import { allRoutes } from '../../routes'; // allRoutes를 import

const MainSidebar = () => {
    return (
        <Drawer variant="permanent" open>
            <List>
                {allRoutes.map((route, index) => (
                    <div key={index}>
                        {/* 부모 라우트만 표시하는 조건 */}
                        {!(route.children && route.children.some(child => child.path === '')) && (
                            <ListItem button component={Link} to={route.path}>
                                <ListItemText primary={route.label || route.path} />
                            </ListItem>
                        )}
                        {/* 첫 번째 자식 라우트의 path가 빈 문자열인 경우 부모 라우트를 표시 */}
                        {route.children && route.children.some(child => child.path === '') && (
                            <ListItem button component={Link} to={route.path}>
                                <ListItemText primary={route.label || route.path} />
                            </ListItem>
                        )}
                        {route.children && (
                            <List disablePadding>
                                {route.children.map((childRoute, childIndex) => (
                                    childRoute.path !== '' && (
                                        <ListItem button key={childIndex} component={Link} to={`${route.path}${childRoute.path}`}>
                                            <ListItemText primary={childRoute.label || childRoute.path}  />
                                        </ListItem>
                                    )
                                ))}
                            </List>
                        )}
                    </div>
                ))}
            </List>
        </Drawer>
    );
};

export default MainSidebar;

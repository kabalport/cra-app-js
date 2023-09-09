import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import MainFooter from './MainFooter';
import { Container } from '@mui/material';

const MainLayout = () => {
    return (
        <div>
            <MainHeader />
            <div style={{ display: 'flex' }}>
                <MainSidebar />
                <Container>
                    <Outlet />  {/* 자식 라우트 컴포넌트가 렌더링되는 위치 */}
                </Container>
            </div>
            <MainFooter />
        </div>
    );
};

export default MainLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const EmptyLayout = () => {
    return (
                <Container>
                    <Outlet />  {/* 자식 라우트 컴포넌트가 렌더링되는 위치 */}
                </Container>
    );
};

export default EmptyLayout;

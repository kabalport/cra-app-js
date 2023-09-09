import React from 'react';
import { Outlet } from 'react-router-dom';
import BasicHeader from './BasicHeader';
import BasicSidebar from './BasicSidebar';
import BasicFooter from './BasicFooter';

const BasicLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <BasicHeader />
            <div className="flex-grow flex">
                <BasicSidebar />
                <main className="flex-grow p-4">
                    <Outlet />  {/* 자식 라우트 컴포넌트가 렌더링되는 위치 */}
                </main>
            </div>
            <BasicFooter />

        </div>
    );
};

export default BasicLayout;

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import MainLayout from './layouts/MainLayout/MainLayout';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import CustomLoading from './components/Mui/atom/CustomLoading';
import { HOME, MEMO, mainRoutes, memoRoutes, errorRoutes } from './routes';



function App() {
    return (
        <Container>
            <Router>
                <Suspense fallback={<CustomLoading />}>
                    <Routes>
                        <Route path={HOME} element={<MainLayout />}>
                            {mainRoutes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                        </Route>
                        <Route path={MEMO} element={<BasicLayout />}>
                            {memoRoutes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                        </Route>
                        {errorRoutes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Suspense>
            </Router>
        </Container>
    );
}
export default App;

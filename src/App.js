import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLoading from './components/Mui/atom/CustomLoading';
import { allRoutes, errorRoutes } from './routes';  // 두 가지 라우트 배열을 import

function App() {
    return (

            <Router>
                <Suspense fallback={<CustomLoading />}>
                    <Routes>
                        {allRoutes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element}>
                                {route.children && route.children.map((subRoute, subIndex) => (
                                    <Route key={subIndex} path={subRoute.path} element={subRoute.element} />
                                ))}
                            </Route>
                        ))}

                        {errorRoutes.map((route, index) => (  // errorRoutes를 따로 매핑
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Suspense>
            </Router>

    );
}

export default App;

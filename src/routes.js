// routes.js
import { lazy } from "react";

const IntroPage = lazy(() => import('./pages/MainPage/IntroPage'));
const AboutPage = lazy(() => import('./pages/MainPage/AboutPage'));
const MemoPage = lazy(() => import('./pages/MemoPage/MemoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const UnauthorizedPage = lazy(() => import('./pages/UnauthorizedPage/UnauthorizedPage'));
const InternalServerErrorPage = lazy(() => import('./pages/InternalServerErrorPage/InternalServerErrorPage'));

export const HOME = "/";
export const ABOUT = "/about";
export const MEMO = "/memo";
export const NOT_FOUND = "*";
export const UNAUTHORIZED = "/401";
export const INTERNAL_SERVER_ERROR = "/500";

export const mainRoutes = [
    {
        path: HOME,
        element: <IntroPage />,
        // children: [
        //     { path: 'about', element: <AboutPage /> }
        // ]
    },
    { path: ABOUT, element: <AboutPage /> },
];

export const memoRoutes = [
    { path: MEMO, element: <MemoPage /> },
];

export const errorRoutes = [
    { path: NOT_FOUND, element: <NotFoundPage /> },
    { path: UNAUTHORIZED, element: <UnauthorizedPage /> },
    { path: INTERNAL_SERVER_ERROR, element: <InternalServerErrorPage /> },
];


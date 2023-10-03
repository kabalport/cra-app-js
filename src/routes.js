// routes.js
import { lazy } from "react";
import CounterPage from "./pages/CounterPage/CounterPage";
import MainLayout from './layouts/MainLayout/MainLayout';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import ChatPage from "./pages/ChatPage/ChatPage";
import Finetune from "./pages/ChatPage/Finetune";
import TailwindPage from "./pages/TailwindPage/TailwindPage";
import MuiPage from "./pages/MuiPage/MuiPage/MuiPage";
import SignIn from "./pages/MuiPage/SignIn";
import FortuneTeller from "./pages/FoutuneTellerPage/FortuneTeller";
import ChatUI from "./pages/FoutuneTellerPage/ChatUI";
import Dashboard from "./pages/MuiPage/Dashboard/Dashboard";
import SignInSide from "./pages/MuiPage/SignInSide";
import SignUp from "./pages/MuiPage/SignUp";
import StickyFooter from "./pages/MuiPage/StickyFooter";
import Pricing from "./pages/MuiPage/Pricing";
import Album from "./pages/MuiPage/Album";
import Checkout from "./pages/MuiPage/Checkout/Checkout";
import Blog from "./pages/MuiPage/Blog/Blog";
import CounterApp from "./pages/PracticePage/CounterApp";
import GptTest from "./pages/PracticePage/GptTest";

const IntroPage = lazy(() => import('./pages/MainPage/IntroPage'));
const AboutPage = lazy(() => import('./pages/MainPage/AboutPage'));
const MemoPage = lazy(() => import('./pages/MemoPage/MemoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const UnauthorizedPage = lazy(() => import('./pages/UnauthorizedPage/UnauthorizedPage'));
const InternalServerErrorPage = lazy(() => import('./pages/InternalServerErrorPage/InternalServerErrorPage'));

export const HOME = "/";
export const ABOUT = "/about";
export const MEMO = "/memo";
export const COUNTER = "/counter"
export const NOT_FOUND = "*";
export const UNAUTHORIZED = "/401";
export const INTERNAL_SERVER_ERROR = "/500";

// routes.js
export const mainRoutes = [
    {
        path: HOME,
        label: "Home",  // 추가
        element: <MainLayout />,
        children: [
            { path: '', element: <IntroPage />, label: "Intro" },  // 추가
            { path: 'about', element: <AboutPage />, label: "About" }  // 추가
        ]
    },
];

export const errorRoutePaths = [UNAUTHORIZED, INTERNAL_SERVER_ERROR];

export const memoRoutes = [
    { path: MEMO, label: "Memo", element: <MainLayout />, children: [{ path: '', element: <MemoPage /> }] },
];

export const tailwindRoutes = [
    { path: "/tailwind", label: "Tailwind",  children: [{ path: '', element: <TailwindPage /> }] },
];

// routes.js
export const practiceRoutes = [
    {
        path: HOME,
        label: "Practice",  // 추가
        children: [
            { path: 'practice/counter', element: <CounterApp />, label: "Counter" },  // 추가
            { path: 'practice/gptTest', element: <GptTest />, label: "GptTest" },  // 추가
        ]
    },
];


export const muiRoutes = [
    { path: "/mui/", label: "MUI",
        children:
            [
                { path: '', element: <MuiPage />},
                { path: 'mui-signin', element: <SignIn />},
                { path: 'mui-dashboard', element: <Dashboard />},
                { path: 'signin', element: <SignInSide />},
                { path: 'signup', element: <SignUp />},
                { path: 'stickyfooter', element: <StickyFooter />},
                { path: 'pricing', element: <Pricing />},
                { path: 'album', element: <Album />},
                { path: 'checkout', element: <Checkout />},
                { path: 'blog', element: <Blog />},

            ]
    },
];

export const counterRoutes= [
    { path: COUNTER, label: "Counter", element: <MainLayout />, children: [{ path: '', element: <CounterPage /> }] }
];

export const chatgptRoutes= [
    { path: "/chat", label: "Chat", element: <MainLayout />, children: [{ path: '', element: <ChatPage /> }] },
    { path: "/chat2", label: "Chat2", element: <MainLayout />, children: [{ path: '', element: <Finetune /> }] },
    { path: "/chat3", label: "Chat2", element: <MainLayout />, children: [{ path: '', element: <FortuneTeller /> }] },
    { path: "/chat4", label: "Chat2", element: <MainLayout />, children: [{ path: '', element: <ChatUI /> }] },
];



export const errorRoutes = [
    { path: NOT_FOUND, element: <NotFoundPage /> },
    { path: UNAUTHORIZED, element: <UnauthorizedPage /> },
    { path: INTERNAL_SERVER_ERROR, element: <InternalServerErrorPage /> },
];

export const allRoutes = [
    ...mainRoutes,
    ...memoRoutes,
    ...counterRoutes,
    ...chatgptRoutes,
    ...muiRoutes,
    ...tailwindRoutes,
    ...practiceRoutes
];

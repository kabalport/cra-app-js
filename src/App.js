import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import MemoPage from "./pages/MemoPage";
import IntroPage from "./pages/IntroPage"; // IntroPage 컴포넌트를 임포트합니다.

function App() {
    return (
        <Container>
            <Router>
                <Routes>
                    <Route path="/" element={<IntroPage />} />  {/* 기본 경로에 IntroPage를 렌더링합니다. */}
                    <Route path="/memo" element={<MemoPage />} />  {/* /memo 경로에 MemoPage를 렌더링합니다. */}
                </Routes>
            </Router>
        </Container>
    );
}

export default App;

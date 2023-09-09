// pages/IntroPage.js
import React from "react";
import {Link, Outlet} from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const IntroPage = () => {
    return (
        <Container>
            <Typography variant="h1">My Project</Typography>
            <Box mt={4}>
                <Button variant="contained" color="primary" component={Link} to="/memo">
                    Go to Memo Page
                </Button>
            </Box>
            <Outlet />  {/* 하위 라우트가 여기에 렌더링됩니다. */}

        </Container>
    );
};

export default IntroPage;

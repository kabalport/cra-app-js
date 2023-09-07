// pages/IntroPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const IntroPage = () => {
    return (
        <Container>
            <Typography variant="h1">My Projects</Typography>
            <Box mt={4}>
                <Button variant="contained" color="primary" component={Link} to="/memo">
                    Go to Memo Page
                </Button>
            </Box>
        </Container>
    );
};

export default IntroPage;

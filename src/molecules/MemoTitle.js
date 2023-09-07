import React from 'react';
import { Typography } from '@mui/material';


const MemoTitle = ({ title }) => {
    return (
        <Typography variant="h1" component="h4" gutterBottom style={{textAlign: "center"}}>
            {title}
        </Typography>
    );
};



export default MemoTitle;

import React from 'react';
import { Typography } from '@mui/material';


const MemoTitle = ({ title }) => {
    return (
        <Typography variant="h3" component="h4" gutterBottom style={{textAlign: "center", marginTop: "50px"}}>
            {title}
        </Typography>
    );
};



export default MemoTitle;

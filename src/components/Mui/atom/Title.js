import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Title = ({ children, variant, ...props }) => {
    return (
        <Typography variant={variant} {...props}>
            {children}
        </Typography>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'button', 'overline']),
};

Text.defaultProps = {
    variant: 'body1',
};

export default Title;

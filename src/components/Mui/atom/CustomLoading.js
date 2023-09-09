// CustomLoading.js
import CircularProgress from '@mui/material/CircularProgress';

const CustomLoading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </div>
    );
};

export default CustomLoading;

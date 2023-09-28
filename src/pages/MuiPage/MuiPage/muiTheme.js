import {createTheme} from "@mui/material";

const muiTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff" // 예: 진한 파란색
        },
        secondary: {
            main: "#FFC107" // 예: 강렬한 노란색
        },
        error: {
            main: "#DA1E28"
        }
    },
    typography: {
        fontFamily: [
            "Montserrat",
            "Arial",
            "sans-serif"
        ].join(","),
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    display: 'none'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0
                },
                html: {
                    height: "100%",
                    width: "100%"
                },
                body: {
                    height: "100%",
                    width: "100%"
                },
                a: {
                    textDecoration: "none",
                    color: "inherit"
                },
                "#root": {
                    height: "100%",
                    width: "100%"
                }
            }
        }
    }
});

export default muiTheme;
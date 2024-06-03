import { createTheme } from "@mui/material";
export const theme = () => {
    return createTheme({
        typography: {
            fontFamily: ['Cairo', "sans-serif"].join(',')
        },
        palette: {
            primary: {
                main: "#3b6ae0",
            },
            secondary: {
                main: "hsl(262deg, 53%, 34%)",
            },
        },
    });
}
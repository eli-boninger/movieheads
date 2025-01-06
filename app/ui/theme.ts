'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-nunito-sans)',
    },
    palette: {
        primary: {
            light: '#e0f5fe',
            main: '#48c4f5',
            dark: '#00589c'
        },
        secondary: {
            light: '#dafdf5',
            main: '#48f5d0',
            dark: '#00854e'
        },
        error: {
            main: '#ea5e24'
        }

    }
});

export default theme;

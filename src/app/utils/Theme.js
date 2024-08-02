"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function Theme() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
        },
      });
  return theme
  
}

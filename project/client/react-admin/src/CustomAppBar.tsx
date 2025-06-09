import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

const CustomAppBar = (props: any): ReactNode => (
  <AppBar position="static" elevation={4} {...props} sx={{
    background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
    boxShadow: '0 6px 24px 0 rgba(33, 150, 243, 0.15)',
    transition: 'box-shadow 0.3s',
    minHeight: 80,
    display: 'flex',
    justifyContent: 'center',
  }}>
    <Toolbar sx={{ minHeight: 80 }}>
      <span style={{ fontSize: 48, marginRight: 24, marginLeft: 8 }}>🏔️</span>
      <Typography variant="h4" color="inherit" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 2, fontFamily: 'Montserrat, Arial, sans-serif' }}>
        Elbrus Plaza Admin
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h6" color="inherit" sx={{ fontWeight: 500, fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Добро пожаловать!
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar; 
import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (

    <Container maxWidth="md"> 
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'center', 
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          About the Application
        </Typography>

        <Typography variant="body1" color="text.secondary">
          This application allows you to browse a list of users and view detailed information for each one. It is built with React, TypeScript, and Material-UI, demonstrating best practices like custom hooks for data fetching and clean, reusable components.
        </Typography>
      </Box>
    </Container>
  );
}
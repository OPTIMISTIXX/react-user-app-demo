import { Container, Typography, Box } from '@mui/material';

export default function NotFound() {
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
          Page not found!
        </Typography>
      </Box>
    </Container>
  );
}
import { Container, Typography, CircularProgress, Alert, Box } from '@mui/material';

import UserCard from '../components/UserCard';
import { User } from '../types/User';
import { useFetch } from '../hooks/useFetch';

const Users = () => {
   const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>
          <Typography>{error}</Typography>
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ mt: 4, mb: 4 }}>
        Our Users
      </Typography>
      
      <div>
        {users && users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Container>
  );
};

export default Users;
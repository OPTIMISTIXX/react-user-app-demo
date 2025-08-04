import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import { User } from "../types/User";
import { useFetch } from "../hooks/useFetch";
// 1. Імпортуємо нашу нову функцію-генератор
import { generateUserDetailsList } from "../utils/userDetails.generator";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: user,
  } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user) {
    return null;
  }

  const userDetails = generateUserDetailsList(user);

  return (
    <Container maxWidth="md">
      <Button 
        variant="outlined" 
        onClick={() => navigate(-1)}
        sx={{ mt: 4 }}
      >
        Back to Users
      </Button>
      
      <Paper elevation={3} sx={{ mt: 2, p: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {user.name}{" "}
          <Typography variant="h5" component="span" color="text.secondary">
            (@{user.username})
          </Typography>
        </Typography>

        {userDetails.map((detail, index) => (
          <Typography
            key={detail.label}
            variant="body1"
            sx={{ mb: index === userDetails.length - 1 ? 0 : 1 }}
          >
            <strong>{detail.label}:</strong> {detail.value}
          </Typography>
        ))}
      </Paper>
    </Container>
  );
};

export default UserDetails;
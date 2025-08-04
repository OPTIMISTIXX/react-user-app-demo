import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material"; // Імпортуємо компоненти MUI
import { Link } from "react-router-dom";
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        sx={{
          minWidth: 275,
          marginBottom: 2,
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            transform: "scale(1.02)",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {user.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold", mr: 1 }}
            >
              Email:
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold", mr: 1 }}
            >
              Company:
            </Typography>
            <Typography variant="body2">{user.company.name}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default UserCard;

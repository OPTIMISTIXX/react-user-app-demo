import React from 'react';
import { Link } from '@mui/material';
import { User } from '../types/User';

type UserDetailItem = {
  label: string;
  value: React.ReactNode; 
};

export const generateUserDetailsList = (user: User): UserDetailItem[] => {
  return [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Phone",
      value: user.phone,
    },
    {
      label: "Website",
      value: (
        <Link href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
          {user.website}
        </Link>
      ),
    },
    {
      label: "Company",
      value: user.company.name,
    },
    {
      label: "Address",
      value: `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
    },
  ];
};
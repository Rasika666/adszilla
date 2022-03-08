import { TableRow } from '@mui/material';
import React from 'react';

interface ProfileOverviewItemProps {
  value: String,
  description: String
}

const ProfileOverviewItem = ({ value, description: description }: ProfileOverviewItemProps) => {
  return (
    <div className="overview-item"><strong>{value}</strong><span>{description}</span></div>
  );
};

export default ProfileOverviewItem;
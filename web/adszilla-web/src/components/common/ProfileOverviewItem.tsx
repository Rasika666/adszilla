import { TableRow } from '@mui/material';
import React from 'react';

interface ProfileOverviewItemProps {
  value: String,
  discription: String
}

const ProfileOverviewItem = ({ value, discription }: ProfileOverviewItemProps) => {
  return (
    <div className="overview-item"><strong>{value}</strong><span>{discription}</span></div>
  );
};

export default ProfileOverviewItem;
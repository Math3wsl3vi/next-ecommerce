import React from 'react';
import { ClipLoader } from 'react-spinners';

interface SpinnerProps {
  size?: number;
  color?: string;
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50, color = '#3498db', isLoading }) => {
  return <ClipLoader size={size} color={color} loading={isLoading} />;
};

export default Spinner;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AlertExample = () => {
  const showAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'This is a success message.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };
  
  return <button onClick={showAlert}>Show Alert</button>;
};
const IconExample = () => {
  return <FontAwesomeIcon icon={faCarSide} />;
};


import React, { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContextType';

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { accessToken } = useContext(AuthContext);
  
  return (
    <div>
      <span>API URL: {apiUrl}</span>
      <h1>Welcome to my Next.js App</h1>
      <IconExample />
      <AlertExample />
    </div>
  );
}
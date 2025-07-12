import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../data/users';
import RequestForm from '../components/RequestForm';

const RequestPage = () => {
  const { id } = useParams();
  const targetUser = users.find((user) => user.id === parseInt(id));
  const currentUser = users[0]; // Simulated logged-in user

  if (!targetUser) return <p>User not found.</p>;

  return (
    <RequestForm
      targetUser={targetUser}
      fromUser={currentUser}
    />
  );
};

export default RequestPage;

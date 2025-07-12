import React from 'react';
import users from '../data/users';
import UserList from '../components/UserList';

const Users = () => {
  const loggedInUserId = 1;
  return <UserList users={users} excludeId={loggedInUserId} />;
};

export default Users;

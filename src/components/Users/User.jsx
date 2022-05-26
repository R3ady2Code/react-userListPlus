import React from 'react';

function User({ ...user }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company.name}</td>
    </tr>
  );
}

export default User;

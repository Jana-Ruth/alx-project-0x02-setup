// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-700">{user.email}</p>
      <p className="text-sm text-gray-500">
        {user.address.street}, {user.address.city} - {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;

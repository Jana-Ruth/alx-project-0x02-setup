import { GetStaticProps } from 'next';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';
import React from 'react';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;

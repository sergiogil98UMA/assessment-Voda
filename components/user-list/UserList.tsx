
import React, { useEffect, useState } from 'react';

export interface Usertype {
  id: string;
  name: string;
  surname: string;
  phone: string;
  company: string;
}

interface UserListProps {
  users: Usertype[];
  onCilckButton: () => void;
}



const UserList: React.FC<UserListProps> = ({ users, onCilckButton }) => {


  return (
    <div className="container mx-auto p-4">
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <button onClick={onCilckButton} 
        style={{marginBottom: "10px"}}
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Create User</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-200">ID</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Surname</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Phone assigned</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!users.length && <tr><td colSpan={4} className="text-center">No users found</td></tr>}


            {users.map((user) => (
              <tr key={user.id} className="text-gray-700">
                <td className="px-4 py-2 border-b border-gray-200 text-center">{user.id}</td>
                <td className="px-4 py-2 border-b border-gray-200 text-center">{user.name}</td>
                <td className="px-4 py-2 border-b border-gray-200 text-center">{user.surname}</td>
                <td className="px-4 py-2 border-b border-gray-200 text-center">{user.phone}</td>
                <td className="px-4 py-2 border-b border-gray-200 text-center">
                  <button onClick={onCilckButton} className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Edit User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

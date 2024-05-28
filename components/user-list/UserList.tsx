
import React, { useState } from 'react';

interface Usertype {
  id: number;
  name: string;
  surname: string;
  phone: string;
  company: string;
}

interface UserListProps {
  users: Usertype[];
}

//users.filter(user => user.id != "")
const UserList: React.FC<UserListProps> = ({users}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <button onClick={handleOpenModal} style={{ backgroundColor: "Red", color: "white", 
      border: "2px solid black", fontSize: "inherit", padding: "8px", borderRadius: "5px",
      }}>Allocate phone</button>
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
                  <button className={
                    `px-4 py-2 ${user.phone ? 'bg-indigo-500' : 'bg-green-500'}
                       text-white rounded`}>{user.phone ? "Change phone" : "Allocate phone"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList ;

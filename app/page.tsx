"use client";
import React from "react";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import UserList from "@/components/user-list/UserList";
import DB from "@/DB_Users.json";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Rest of the code...

  return (
    <main>
      <Header />
      <button onClick={handleOpenModal} style={{ backgroundColor: "Red", color: "white", 
      border: "2px solid black", fontSize: "inherit", padding: "8px", borderRadius: "5px",
      }}>Allocate phone</button> {}
      <UserList users={DB.users} />

      {isModalOpen && (
        <Modal onClose={handleCloseModal} isOpen={isModalOpen} title="Allocate ">
         <p>hello this is modal</p>
        </Modal>
      )}
    </main>
  );


}


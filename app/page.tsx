"use client";
import React from "react";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import Header from "@/components/header";
import UserList, { Usertype } from "@/components/user-list/UserList";
import DB from "@/DB_Users.json";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import AddUser from "@/components/addUser/addUser";
import { get } from "http";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useUser();

  const [users, setUsers] = useState <Usertype[]>([]);

  const getDomainFromEmail = (email: string) => {
    const regex = /@(.+)\./;
    const match = email.match(regex);
    if (match) {
      return match[1];
    }
    return "";
  };
  

  useEffect(() => {
    let userByCompany:Usertype[] = DB.users.filter(userIt => userIt.company == getDomainFromEmail(user?.email??""));
    console.log(getDomainFromEmail(user?.email??""));
    setUsers(userByCompany);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };
  const [usersFilterd, setUsersFiltered] = useState(users);
  useEffect(() => {
    let newUsers = users.filter(userIt => userIt.id != "")
    setUsersFiltered(newUsers);
    console.log(newUsers);
   },[users]);

  return (
    <main>
      <Header />
      <UserList users={usersFilterd} onCilckButton={
        () => {
          setIsModalOpen(!isModalOpen);
      }}/>

      {isModalOpen && (
        <Modal onClose={handleCloseModal} isOpen={isModalOpen} title="Allocate">
        <AddUser onAddUser={(user)=>{
          setUsers([...users, user]);
          handleCloseModal();
        }}/>
         </Modal>
      )}
    </main>
  );


}


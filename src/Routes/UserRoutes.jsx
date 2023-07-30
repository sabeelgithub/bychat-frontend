import React from 'react'
import Home from '../Components/Home'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import MembersPage from '../Pages/MembersPage'
import ChatPage from '../Pages/ChatPage'

function UserRoutes() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/members" element={<MembersPage/>}/>
    <Route path="/chats" element={<ChatPage/>}/>
    </Routes>
    </>
  )
}

export default UserRoutes
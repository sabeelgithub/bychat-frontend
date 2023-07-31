import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DashboardPage from '../Pages/Admin/DashboardPage'

function AdminRoutes() {
  return (
   <>
   <Routes>
   <Route path="/dashboard" element={<DashboardPage/>}/>
   </Routes>
   </>
  )
}

export default AdminRoutes
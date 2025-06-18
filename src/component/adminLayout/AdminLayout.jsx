import React, { useState } from 'react'
import AsideBar from './asidebar/AsideBar'
import AdminNavBar from './navbar/AdminNavbar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import DashBoard from './content/dashborad/Dashboard'

function AdminLayout() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
        console.log(isSideBarOpen)
    }

    return (
        
            <div className=' flex '>
                <div >
                    <AsideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar}></AsideBar>
                </div>
                <div className='bg-[#F1F1FA] w-full'>
                    <AdminNavBar toggleSideBar={toggleSideBar}></AdminNavBar>
                    <Outlet></Outlet>
                </div>
                

            </div>


    )
}

export default AdminLayout
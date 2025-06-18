import React from 'react'
import { Link } from 'react-router-dom'

function AsideBar({ isSideBarOpen, toggleSideBar }) {
    return (

        <div className={`${isSideBarOpen ? "block" : "hidden"} lg:block  min-w-[15%] fixed lg:relative h-screen bg-[#232232] p-2 `}>

            <svg className="fixed lg h-6 w-6 left-48 bottom lg:hidden" onClick={() => {
                toggleSideBar()
            }} fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>


            <div className=' pl-3 '>
                <h1 className='font-semibold text-[2rem]  tracking-[3px] text-[#F1F1FA]'>SKYDASH</h1>
                <p className='text-[#b7b7bb]'>E-Commerse </p>
            </div>


            <div className='mt-20 pl-2 '>

                <div className='group hover:bg-[#B9E2FD] flex w-50 h-12 pl-6 items-center rounded-lg gap-2 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="group-hover:stroke-black size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <Link to={'dashboard'}>
                        <p className='text-white group-hover:text-black'>Dashboard</p>
                    </Link>

                </div>

                <div className='group hover:bg-[#B9E2FD] flex w-50 h-12 pl-6 items-center rounded-lg gap-2 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="group-hover:stroke-black size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <Link to={"users"}>
                        <p className='text-white group-hover:text-black'>Users</p>
                    </Link>

                </div>

                <div className='group hover:bg-[#B9E2FD] flex w-50 h-12 pl-6 items-center rounded-lg gap-2 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="group-hover:stroke-black size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <Link to={"products"}>
                        <p className='text-white group-hover:text-black'>Products</p>
                    </Link>

                </div>

            </div>

        </div>




    )
}

export default AsideBar
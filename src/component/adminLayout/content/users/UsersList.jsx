import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Hari Krishnan",
    email: "hari.dev@email.com",
    role: "Admin",
    status: "Active",
    joinDate: "2024-03-12",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 2,
    name: "Anjali Ramesh",
    email: "anjali.r@email.com",
    role: "User",
    status: "Inactive",
    joinDate: "2023-11-04",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 3,
    name: "Karthik Kumar",
    email: "karthik.k@email.com",
    role: "Moderator",
    status: "Active",
    joinDate: "2024-01-18",
    avatar: "https://i.pravatar.cc/150?img=35",
  },
];

function UsersList() {
  const [searchparam, setSearchParam] = useSearchParams();

  const setParam = (value) => {
    setSearchParam({ search: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* User Create */}
      <div className="flex justify-end mb-4">
        <div className="flex justify-end mb-6">
          
            <button className="bg-gradient-to-r from-[#232232] to-[#9A98B4] cursor-pointer hover:from-[#625f8b] hover:to-[#c3c1e3] text-white px-4 py-2 rounded-lg shadow-md font-semibold transition duration-300">
              + Create User
            </button>
       
        </div>
      </div>



      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-[#232232] text-white uppercase">
            <tr>
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left hidden md:table-cell">Email</th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">Role</th>
              <th className="py-3 px-4 text-left hidden md:table-cell">Status</th>
              <th className="py-3 px-4 text-left hidden lg:table-cell">Join Date</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.avatar}
                    alt="avatar"
                  />
                  <span>{user.name}</span>
                </td>
                <td className="py-3 px-4 hidden md:table-cell">{user.email}</td>
                <td className="py-3 px-4 hidden lg:table-cell">{user.role}</td>
                <td className="py-3 px-4 hidden md:table-cell">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs font-medium ${user.status === "Active"
                      ? "bg-[#232232]"
                      : "bg-[#a29fc5] "
                      }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 hidden lg:table-cell">
                  {user.joinDate}
                </td>
                <td className="px-4 py-3 space-y-1 flex ">
                  <button className="w-full flex  justify-center cursor-pointer border-amber-950 text-white py-1 rounded-md text-xs font-medium  transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <button className="w-full flex  justify-center cursor-pointer text-white py-1 rounded-md text-xs font-medium  transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>


                  </button>
                  <button className="w-full flex  justify-center cursor-pointer text-white py-1 rounded-md text-xs font-medium  transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;

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
        <Link to="usercreate">
          <button className="border-2 border-gray-400 px-4 py-1 bg-[#3ecc72] rounded text-white font-semibold">
            User Create +
          </button>
        </Link>
      </div>

      

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase">
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
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 hidden lg:table-cell">
                  {user.joinDate}
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <Link to={`/veiw/${user.id}`}>
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </Link>
                  <button className="text-yellow-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
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

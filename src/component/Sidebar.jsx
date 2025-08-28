import React from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay for small screens when sidebar is open */}
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      ></div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform
          ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full sm:translate-x-0'
          }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 px-2">My Dashboard</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ms-3">Product</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ms-3">User</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar
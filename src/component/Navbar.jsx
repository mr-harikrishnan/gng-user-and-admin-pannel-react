import React from 'react';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
      {/* Hamburger button - visible on small screens */}
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Dashboard</h1>
      <div></div> {/* Placeholder for right side if needed */}
    </nav>
  );
}

export default Navbar

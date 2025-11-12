"use client";

import { AuthContext } from "@/src/context/AuthContext";
import { Search, Bell, Menu, X } from "lucide-react";
import { useContext, useState } from "react";

export function HeaderDashboard({
  toggleSidebar
}: {
  toggleSidebar?: () => void;
}) {
  const [showSearch, setShowSearch] = useState(false);
  const auth = useContext(AuthContext);

  const user = auth?.user;

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center flex-1">
        {/* Sidebar Toggle (Mobile Only) */}
        {toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="lg:hidden mr-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={22} className="text-gray-700" />
          </button>
        )}

        {/* Search Bar - tampil penuh di layar besar */}
        <div className="relative hidden sm:block w-64 md:w-80 lg:w-96">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Search Icon (Mobile Only) */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? <X size={20} /> : <Search size={20} />}
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {user ? (
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-semibold text-white">
            {user?.user?.username
              ? user.user.username.substring(0, 2).toUpperCase()
              : "??"}
          </div>
        ) : (
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-semibold text-white">
            P
          </div>
        )}
      </div>

      {/* Mobile Search Dropdown */}
      {showSearch && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 sm:hidden shadow-md">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      )}
    </header>
  );
}

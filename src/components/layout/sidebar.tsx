"use client";

import { LayoutDashboard, X, ChevronDown, BellIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/src/context/AuthContext";

export function Sidebar({
  isOpen,
  toggleSidebar,
  activeMenu,
  setActiveMenu
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}) {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const user = auth?.user;

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard"
    },
    {
      id: "reminder",
      label: "Reminder",
      icon: BellIcon,
      path: "/dashboard/reminder"
    }
  ];

  return (
    <>
      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 flex flex-col bg-primary text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} 
        lg:translate-x-0 lg:w-64 h-full`}
      >
        {/* Header / Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-primary rounded-lg transition-colors lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  router.push(item.path);
                  if (window.innerWidth < 1024) toggleSidebar(); // auto close di mobile
                }}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-primary shadow-lg"
                    : "hover:bg-primary text-white"
                }`}
              >
                <Icon size={20} />
                <span className="ml-3 font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-white/30">
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold text-white text-sm">
              {user?.user?.username
                ? user.user.username.substring(0, 2).toUpperCase()
                : "JD"}
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="text-sm font-semibold">
                {user?.user?.username || "John Doe"}
              </p>
              <p className="text-xs text-indigo-200">
                {user?.user?.email || "Administrator"}
              </p>
            </div>

            <ChevronDown size={16} />
          </div>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

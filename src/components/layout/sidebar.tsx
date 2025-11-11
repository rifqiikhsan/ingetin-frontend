import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  X,
  Menu,
  ChevronDown
} from "lucide-react";

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
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-primary text-white transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-primary   ">
        {isOpen && <h1 className="text-xl font-bold">Dashboard</h1>}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-primary rounded-lg transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center ${
                isOpen ? "px-4" : "px-3 justify-center"
              } py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-primary shadow-lg"
                  : "hover:bg-primary text-white"
              }`}
            >
              <Icon size={20} />
              {isOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      {isOpen && (
        <div className="p-4 border-t border-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-semibold">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-indigo-200">Administrator</p>
            </div>
            <ChevronDown size={16} />
          </div>
        </div>
      )}
    </aside>
  );
}

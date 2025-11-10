"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "success" | "destructive" | "info";
}

interface Toast extends ToastOptions {
  id: number;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description, variant = "default" }: ToastOptions) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description, variant }]);

    // Hapus toast setelah 3 detik
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed bottom-5 right-5 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`w-72 px-4 py-3 rounded-lg shadow-md text-white animate-slide-up transition-all duration-300
              ${
                t.variant === "success"
                  ? "bg-green-500"
                  : t.variant === "destructive"
                  ? "bg-red-500"
                  : t.variant === "info"
                  ? "bg-blue-500"
                  : "bg-gray-800"
              }`}
          >
            <strong className="block font-semibold">{t.title}</strong>
            {t.description && (
              <p className="text-sm opacity-90 mt-1">{t.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Animasi */}
      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

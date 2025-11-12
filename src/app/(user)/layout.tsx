import { AppFooter } from "@/src/components/layout/app-footer";
import { AppHeader } from "@/src/components/layout/app-header";
import { AuthProvider } from "@/src/context/AuthContext";

export default function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="bg-gray-100 flex min-h-screen flex-col font-body antialiased">
        {/* ✅ Integrasi Google Login dan Header */}
        <AppHeader />

        <main id="main-content" className="grow pb-16 md:pb-0" role="main">
          {children}
        </main>

        <AppFooter />
      </div>
    </AuthProvider>
  );
}

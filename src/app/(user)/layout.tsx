import { AppFooter } from "@/src/components/layout/app-footer";
import { AppHeader } from "@/src/components/layout/app-header";

export default function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 flex min-h-screen flex-col font-body antialiased">
      {/* ✅ Integrasi Google Login dan Header */}
      <AppHeader />

      <main id="main-content" className="grow pb-16 md:pb-0" role="main">
        {children}
      </main>

      <AppFooter />
    </div>
  );
}

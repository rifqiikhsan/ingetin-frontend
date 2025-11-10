import { AppFooter } from "@/src/components/layout/app-footer";
import { AuthHeader } from "@/src/components/layout/auth-header";
import { AuthProvider } from "@/src/context/AuthContext";
import { ToastProvider } from "@/src/hooks/use-toast";

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ToastProvider>
        <div className="flex min-h-screen flex-col font-body antialiased">
          <AuthHeader />
          <main className="grow">{children}</main>
          <AppFooter />
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}

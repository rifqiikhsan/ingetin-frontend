import { AppFooter } from "@/src/components/layout/app-footer";
import { AuthHeader } from "@/src/components/layout/auth-header";

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col font-body antialiased">
      <AuthHeader />
      <main className="grow">{children}</main>
      <AppFooter />
    </div>
  );
}

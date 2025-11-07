import { Bell } from "lucide-react";
import Link from "next/link";

export function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <Bell className="text-white" size={20} />
          </div>
          <span className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
            Ingetin
          </span>
        </Link>
        <div className="text-sm font-medium">
          Butuh bantuan?{" "}
          <Link href="/auth/login" className="text-accent hover:underline">
            Hubungi kami
          </Link>{" "}
        </div>
      </div>
    </header>
  );
}

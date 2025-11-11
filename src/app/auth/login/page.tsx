"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useToast } from "@/src/hooks/use-toast";
import { LoginRequest } from "@/src/data/dto/request/LoginRequest";
import { useAuth } from "@/src/hooks/useAuth";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login(formData);

      if (res.success) {
        toast({
          title: "Login Berhasil 🎉",
          description: `Selamat datang kembali, ${res.user?.username}!`
        });

        console.log();

        router.push("/dashboard");
      } else {
        toast({
          title: "Login Gagal",
          description: res.message || "Periksa kembali kredensial Anda.",
          variant: "destructive"
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast({
        title: "Kesalahan Server",
        description: err.message || "Tidak dapat memproses login.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login dengan Google diklik!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-gray-600 text-sm">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-9 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="text-gray-600">Ingat saya</span>
              </label>
              <button
                type="button"
                className="cursor-pointer text-primary hover:text-primary/80 font-medium"
              >
                Lupa password?
              </button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full font-semibold"
            >
              {loading ? (
                <>
                  <Loader className="animate-spin mr-2" size={18} />
                  Memproses...
                </>
              ) : (
                <>Masuk</>
              )}
            </Button>
          </form>

          <div className="my-6">
            <Separator />
            <p className="text-center text-sm text-gray-500 mt-3">Atau</p>
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-2"
          >
            <FcGoogle size={18} />
            <span>Masuk dengan Google</span>
          </Button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Belum punya akun?{" "}
            <a
              href="/auth/register"
              className="text-primary hover:text-primary/80 font-semibold"
            >
              Daftar sekarang
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

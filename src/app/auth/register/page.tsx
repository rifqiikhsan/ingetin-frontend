"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Loader, Lock, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useAuth } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useToast } from "@/src/hooks/use-toast";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast({
        title: "Validasi Gagal",
        description: "Semua field harus diisi.",
        variant: "destructive"
      });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Tidak Cocok",
        description: "Password dan konfirmasi password tidak sama.",
        variant: "destructive"
      });
      return false;
    }
    if (formData.password.length < 8) {
      toast({
        title: "Password Terlalu Pendek",
        description: "Password minimal 8 karakter.",
        variant: "destructive"
      });
      return false;
    }
    if (!agreedToTerms) {
      toast({
        title: "Syarat Belum Disetujui",
        description: "Anda harus menyetujui syarat dan ketentuan.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      });

      if (response.success) {
        toast({
          title: "Registrasi Berhasil 🎉",
          description: "Akun Anda berhasil dibuat. Silakan login."
        });

        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        setAgreedToTerms(false);

        setTimeout(() => {
          router.push("/auth/login");
        }, 1000);
      } else {
        toast({
          title: "Registrasi Gagal",
          description: response.message || "Terjadi kesalahan.",
          variant: "destructive"
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Terjadi kesalahan saat registrasi.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    toast({
      title: "Coming Soon",
      description: "Fitur daftar dengan Google belum tersedia."
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Buat Akun Baru
          </h1>
          <p className="text-gray-600">
            Daftar untuk mulai menggunakan aplikasi
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <Label htmlFor="username">Username</Label>
              <div className="relative mt-2">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative mt-2">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimal 8 karakter"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Konfirmasi Password */}
            <div>
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <div className="relative mt-2">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Ulangi password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label className="ml-2 text-sm text-gray-600">
                Saya setuju dengan{" "}
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Syarat & Ketentuan
                </a>{" "}
                dan{" "}
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Kebijakan Privasi
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white hover:bg-primary/90"
            >
              {loading ? (
                <>
                  <Loader className="mr-2 animate-spin" size={18} />{" "}
                  Memproses...
                </>
              ) : (
                "Daftar Sekarang"
              )}
            </Button>
          </form>

          {/* Garis pemisah */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Atau</span>
            </div>
          </div>

          {/* Daftar dengan Google */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={handleGoogleRegister}
          >
            <FcGoogle size={20} />
            Daftar dengan Google
          </Button>

          {/* Login link */}
          <p className="text-center text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <a
              href="/auth/login"
              className="text-primary hover:underline font-semibold"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

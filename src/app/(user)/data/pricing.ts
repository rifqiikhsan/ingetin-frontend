import { PricingPlan } from "../types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Paket Gratis",
    price: "Rp 0",
    period: "/bulan",
    description: "Paket ideal untuk memulai dan mencoba fitur utama Ingetin.",
    features: [
      "50 tugas aktif",
      "Notifikasi WhatsApp/Telegram",
      "Reminder dasar",
      "Dukungan email"
    ],
    buttonText: "Mulai Gratis",
    buttonVariant: "outline"
  },
  {
    id: "pro",
    name: "Paket PRO",
    price: "Rp 19.000",
    period: "/bulan",
    description:
      "Akses penuh semua fitur premium untuk produktivitas maksimal.",
    features: [
      "Unlimited tugas",
      "Notifikasi prioritas",
      "Pengulangan advanced",
      "Integrasi kalender",
      "Dukungan prioritas"
    ],
    isPopular: true,
    buttonText: "Pilih Pro",
    buttonVariant: "solid"
  }
];

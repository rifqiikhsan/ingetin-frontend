import Image from "next/image";
import { UserPlusIcon, FilePlusIcon, BellRingIcon } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <UserPlusIcon />,
    title: "Daftar & Hubungkan Akun.",
    description:
      "Daftar gratis dan hubungkan WhatsApp atau Telegram Anda dalam hitungan detik"
  },
  {
    id: 2,
    icon: <FilePlusIcon />,
    title: "Buat & Atur Tugas",
    description:
      "Tambahkan tugas, atur waktu reminder, dan pilih frekuensi pengulangan"
  },
  {
    id: 3,
    icon: <BellRingIcon />,
    title: "Terima Notifikasi.",
    description:
      "Dapatkan pengingat langsung di chat WhatsApp atau Telegram Anda"
  }
];

export default function HowItWorks() {
  return (
    <section
      className="how-it-works overflow-hidden py-24 sm:py-32"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                Cara Kerja Ingetin
              </h2>
              <p className="mt-2 text-4xl font-['Clash_Display'] font-semibold tracking-tight text-pretty text-gray-700 sm:text-5xl">
                Cara Kerja Lebih Baik
              </p>
              <p className="mt-6 text-lg/8 text-gray-500">
                Hanya 3 langkah mudah untuk tidak melewatkan deadline lagi.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                {steps.map((step) => (
                  <div key={step.id} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-600">
                      <span className="absolute top-1 left-1 size-5">
                        {step.icon}
                      </span>
                      {step.title}
                    </dt>
                    <dd className="inline">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            width={2432}
            height={1442}
            src="/images/ilustrasition_2.png"
            alt="ilustrasition how it works"
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:ml-0"
          />
        </div>
      </div>
    </section>
  );
}

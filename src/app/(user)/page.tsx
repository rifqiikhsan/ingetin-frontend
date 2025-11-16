import Image from "next/image";

export default async function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="hero mx-auto max-w-7xl py-6 lg:py-20 px-4 mt-6"
        id="home"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between text-center lg:text-left gap-y-12 lg:gap-y-0">
          <div className="flex flex-col gap-y-10 w-full lg:w-1/2">
            <p className="hidden lg:block w-fit bg-white text-amber-900 px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow-md">
              ✨ Produktivitas Maksimal
            </p>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-gray font-['Clash_Display'] text-4xl md:text-5xl lg:text-[70px] leading-tight md:leading-tight lg:leading-none">
                Jangan Lewatkan <br className="hidden md:block" />
                Deadline Lagi.
              </h1>
              <p className="text-sm md:text-base leading-relaxed md:leading-loose text-gray-500">
                Aplikasi reminder tugas yang membantu Anda tetap produktif{" "}
                <br className="hidden md:block" />
                dan tidak melewatkan deadline penting.{" "}
                <br className="hidden md:block" />
                Notifikasi langsung ke <strong>WhatsApp</strong> atau{" "}
                <strong>Telegram</strong> Anda.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-6 items-center justify-center lg:justify-start">
              <a
                href="#"
                className="text-sm md:text-lg font-semibold bg-primary text-white py-3 md:py-4 px-8 md:px-10 rounded-full hover:bg-gray"
              >
                Mulai Gratis
              </a>
              <a
                href="#"
                className="flex gap-x-2 text-sm md:text-lg font-semibold text-primary items-center"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.89999 22H15.1"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 18.4V22"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9955 7.25H19.0045"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1957 7.25H16.2047"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3954 7.25H13.4044"
                    stroke="oklch(0.47 0.09 60)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Baca Selengkapnya
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center rounded-lg w-full lg:w-auto justify-center">
            <Image
              src="/images/ilustrasition_1.png"
              alt="Ilustrasition Image"
              width={550}
              height={550}
              priority
            />
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section
        className="feature mx-auto max-w-7xl py-6 lg:py-12 px-4"
        id="features"
      >
        <div className="flex flex-col py-8 md:py-12">
          <h3 className="text-base md:text-lg text-primary font-medium">
            Fitur Unggulan Ingetin
          </h3>
          <h2 className="font-['Clash_Display'] text-xl md:text-3xl font-medium leading-relaxed text-gray-700 mb-6 md:mb-10">
            Fitur yang Membuat Hidup Anda Jauh Lebih Mudah.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-x-16">
            {/* 1 — Notifikasi via WhatsApp & Telegram */}
            <div className="flex flex-col gap-y-3 md:gap-y-5 bg-primary p-4 md:p-6 rounded-md shadow-2xl">
              <p className="text-3xl md:text-4xl text-primary">💬</p>
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-gray-50 leading-loose">
                  Notifikasi via WhatsApp & Telegram
                </p>
                <p className="text-sm md:text-base text-gray-200">
                  Terima pengingat langsung di aplikasi chat yang Anda gunakan
                  setiap hari.
                </p>
              </div>
            </div>

            {/* 2 — Reminder Otomatis & Terjadwal */}
            <div className="flex flex-col gap-y-3 md:gap-y-5 bg-gray-100 p-4 md:p-6 rounded-md shadow-2xl outline-gray-200 outline-2">
              <p className="text-3xl md:text-4xl text-primary">🎯</p>
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-gray-600 leading-loose">
                  Reminder Otomatis & Terjadwal
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Atur waktu reminder sesuai kebutuhan Anda dengan mudah.
                </p>
              </div>
            </div>

            {/* 3 — Pengulangan Tugas Fleksibel */}
            <div className="flex flex-col gap-y-3 md:gap-y-5 bg-primary p-4 md:p-6 rounded-md shadow-2xl">
              <p className="text-3xl md:text-4xl text-primary">⏰</p>
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-gray-50 leading-loose">
                  Pengulangan Tugas Fleksibel
                </p>
                <p className="text-sm md:text-base text-gray-200">
                  Buat reminder berulang harian, mingguan, atau bulanan.
                </p>
              </div>
            </div>

            {/* 4 — Kategori & Label Tugas */}
            <div className="flex flex-col gap-y-3 md:gap-y-5 bg-gray-100 p-4 md:p-6 rounded-md shadow-2xl outline-gray-200 outline-2">
              <p className="text-3xl md:text-4xl text-primary">🏷️</p>
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-gray-600 leading-loose">
                  Kategori & Label Tugas
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Organisir tugas dengan kategori dan label untuk akses mudah.
                </p>
              </div>
            </div>

            {/* 5 — Integrasi Kalender */}
            <div className="flex flex-col gap-y-3 md:gap-y-5 bg-primary p-4 md:p-6 rounded-md shadow-2xl">
              <p className="text-3xl md:text-4xl text-primary">📅</p>
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-gray-50 leading-loose">
                  Integrasi Kalender
                </p>
                <p className="text-sm md:text-base text-gray-300">
                  Sinkronkan dengan Google Calendar atau kalender favorit Anda.
                </p>
              </div>
            </div>

            {/* 6 — Dashboard Sederhana & Intuitif */}
            <div className="flex flex-col gap-y-3 md:gap-y-5 bg-gray-100 p-4 md:p-6 rounded-md shadow-2xl outline-gray-200 outline-2">
              <p className="text-3xl md:text-4xl text-primary">📊</p>
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium text-gray-600 leading-loose">
                  Dashboard Sederhana & Intuitif
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Interface yang intuitif dan mudah digunakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how it works section */}
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
                <p className="mt-2 text-4xl font-[Clash_Display] font-semibold tracking-tight text-pretty text-gray-700 sm:text-5xl">
                  Cara Kerja Lebih Baik
                </p>
                <p className="mt-6 text-lg/8 text-gray-500">
                  Hanya 3 langkah mudah untuk tidak melewatkan deadline lagi.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user-plus-icon lucide-user-plus text-primary absolute top-1 left-1 size-5"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" x2="19" y1="8" y2="14" />
                        <line x1="22" x2="16" y1="11" y2="11" />
                      </svg>
                      Daftar & Hubungkan Akun.
                    </dt>
                    <dd className="inline">
                      Daftar gratis dan hubungkan WhatsApp atau Telegram Anda
                      dalam hitungan detik
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-plus-corner-icon lucide-file-plus-corner absolute top-1 left-1 size-5 text-primary"
                      >
                        <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
                        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                        <path d="M14 19h6" />
                        <path d="M17 16v6" />
                      </svg>
                      Buat & Atur Tugas
                    </dt>
                    <dd className="inline">
                      Tambahkan tugas, atur waktu reminder, dan pilih frekuensi
                      pengulangan
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bell-ring-icon lucide-bell-ring absolute top-1 left-1 size-5 text-primary"
                      >
                        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                      </svg>
                      Terima Notifikasi.
                    </dt>
                    <dd className="inline">
                      Dapatkan pengingat langsung di chat WhatsApp atau Telegram
                      Anda
                    </dd>
                  </div>
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

      {/* Pricing Section */}
      <section
        className="relative isolate px-6 py-24 sm:py-32 lg:px-8"
        id="pricing"
      >
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-base font-semibold text-primary">
            Harga Paket Ingetin
          </h2>
          <p className="mt-2 text-4xl font-[Clash_Display] font-semibold tracking-tight text-gray-700 sm:text-6xl">
            Pilih Paket Sesuai Kebutuhan Anda
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-500 sm:text-xl">
          Solusi pengingat tugas dengan fitur terbaik untuk membantu Anda tetap
          produktif.
        </p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 gap-x-3 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
          {/* Paket Gratis */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-primary/10 sm:mx-8 sm:p-10 lg:mx-0 flex flex-col h-full">
            <h3 className="text-base font-semibold text-primary">
              Paket Gratis
            </h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold text-primary">Rp 0</span>
              <span className="text-base text-gray-500">/bulan</span>
            </p>

            <p className="mt-6 text-base text-gray-600">
              Paket ideal untuk memulai dan mencoba fitur utama Ingetin.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10">
              <li className="flex gap-x-3">
                <span className="text-primary text-xl">✔</span>
                50 tugas aktif
              </li>
              <li className="flex gap-x-3">
                <span className="text-primary text-xl">✔</span>
                Notifikasi WhatsApp/Telegram
              </li>
              <li className="flex gap-x-3">
                <span className="text-primary text-xl">✔</span>
                Reminder dasar
              </li>
              <li className="flex gap-x-3">
                <span className="text-primary text-xl">✔</span>
                Dukungan email
              </li>
            </ul>

            {/* Tombol dibungkus div untuk mt-auto */}
            <div className="mt-auto pt-8 sm:pt-10">
              <button className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-primary ring-1 ring-primary hover:bg-amber-700 hover:text-white">
                Mulai Gratis
              </button>
            </div>
          </div>

          {/* Paket PRO */}
          <div className="relative rounded-3xl bg-primary p-8 shadow-2xl ring-1 ring-primary/10 sm:p-10 flex flex-col h-full">
            <div className="absolute -top-3 right-6 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">
              ⭐ POPULAR
            </div>

            <h3 className="text-base font-semibold text-gray-100">Paket PRO</h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold text-white">
                Rp 19.000
              </span>
              <span className="text-base text-gray-100">/bulan</span>
            </p>

            <p className="mt-6 text-base text-gray-300">
              Akses penuh semua fitur premium untuk produktivitas maksimal.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-300 sm:mt-10">
              <li className="flex gap-x-3">
                <span className="text-gray-100 text-xl">✔</span>
                Unlimited tugas
              </li>
              <li className="flex gap-x-3">
                <span className="text-gray-100 text-xl">✔</span>
                Notifikasi prioritas
              </li>
              <li className="flex gap-x-3">
                <span className="text-gray-100 text-xl">✔</span>
                Pengulangan advanced
              </li>
              <li className="flex gap-x-3">
                <span className="text-gray-100 text-xl">✔</span>
                Integrasi kalender
              </li>
              <li className="flex gap-x-3">
                <span className="text-gray-100 text-xl">✔</span>
                Dukungan prioritas
              </li>
            </ul>

            <div className="mt-auto pt-8 sm:pt-10">
              <button className="w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-amber-700">
                Pilih Pro
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

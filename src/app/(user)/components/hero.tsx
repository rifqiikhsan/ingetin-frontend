import Image from "next/image";
import { MessageCircleIcon } from "./icons/message-circle-icon";

export default function Hero() {
  return (
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
              <MessageCircleIcon />
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
  );
}

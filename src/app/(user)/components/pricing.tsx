import { pricingPlans } from "../data/pricing";
import PricingCard from "./pricing-card";

export default function Pricing() {
  return (
    <section
      className="relative isolate px-6 py-24 sm:py-32 lg:px-8"
      id="pricing"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-base font-semibold text-primary">
          Harga Paket Ingetin
        </h2>
        <p className="mt-2 text-4xl font-['Clash_Display'] font-semibold tracking-tight text-gray-700 sm:text-6xl">
          Pilih Paket Sesuai Kebutuhan Anda
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-500 sm:text-xl">
        Solusi pengingat tugas dengan fitur terbaik untuk membantu Anda tetap
        produktif.
      </p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 gap-x-3 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}

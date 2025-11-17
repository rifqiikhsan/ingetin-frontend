import { features } from "../data/features";
import FeatureCard from "./featured-card";

export default function Features() {
  return (
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
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

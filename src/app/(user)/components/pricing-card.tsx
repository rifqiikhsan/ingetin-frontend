import { PricingPlan } from "../types";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const {
    name,
    price,
    period,
    description,
    features,
    isPopular,
    buttonText,
    buttonVariant
  } = plan;

  const cardClasses = isPopular
    ? "relative rounded-3xl bg-primary p-8 shadow-2xl ring-1 ring-primary/10 sm:p-10 flex flex-col h-full"
    : "rounded-3xl bg-white/60 p-8 ring-1 ring-primary/10 sm:mx-8 sm:p-10 lg:mx-0 flex flex-col h-full";

  const buttonClasses =
    buttonVariant === "solid"
      ? "w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-amber-700"
      : "block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-primary ring-1 ring-primary hover:bg-amber-700 hover:text-white";

  const textColor = isPopular ? "text-gray-100" : "text-gray-500";
  const titleColor = isPopular ? "text-gray-100" : "text-primary";
  const priceColor = isPopular ? "text-white" : "text-primary";
  const descriptionColor = isPopular ? "text-gray-300" : "text-gray-600";
  const listColor = isPopular ? "text-gray-300" : "text-gray-600";
  const checkmarkColor = isPopular ? "text-gray-100" : "text-primary";

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute -top-3 right-6 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">
          ⭐ POPULAR
        </div>
      )}

      <h3 className={`text-base font-semibold ${titleColor}`}>{name}</h3>

      <p className="mt-4 flex items-baseline gap-x-2">
        <span className={`text-5xl font-semibold ${priceColor}`}>{price}</span>
        <span className={`text-base ${textColor}`}>{period}</span>
      </p>

      <p className={`mt-6 text-base ${descriptionColor}`}>{description}</p>

      <ul className={`mt-8 space-y-3 text-sm ${listColor} sm:mt-10`}>
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <span className={`${checkmarkColor} text-xl`}>✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 sm:pt-10">
        <button className={buttonClasses}>{buttonText}</button>
      </div>
    </div>
  );
}

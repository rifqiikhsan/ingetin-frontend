import { Feature } from "../types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { emoji, title, description, variant } = feature;

  const baseClasses =
    "flex flex-col gap-y-3 md:gap-y-5 p-4 md:p-6 rounded-md shadow-2xl";
  const variantClasses = {
    primary: "bg-primary",
    secondary: "bg-gray-100 outline-gray-200 outline-2"
  };

  const textClasses = {
    primary: {
      title: "text-gray-50",
      description: "text-gray-200"
    },
    secondary: {
      title: "text-gray-600",
      description: "text-gray-500"
    }
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <p className="text-3xl md:text-4xl text-primary">{emoji}</p>
      <div className="flex flex-col">
        <p
          className={`text-base md:text-lg font-medium leading-loose ${textClasses[variant].title}`}
        >
          {title}
        </p>
        <p
          className={`text-sm md:text-base ${textClasses[variant].description}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// Feature types
export interface Feature {
  id: number;
  emoji: string;
  title: string;
  description: string;
  variant: "primary" | "secondary";
}

// Pricing types
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "outline" | "solid";
}

// Contact types
export interface ContactInfo {
  id: string;
  title: string;
  email: string;
  phone: string;
  location?: string;
}

// How it works step types
export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

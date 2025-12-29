
export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

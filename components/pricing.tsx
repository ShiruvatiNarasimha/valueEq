import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Pricing() {
  const plans = [
    {
      name: "Professional Plan",
      price: "€180",
      description:
        "Ideal for: Individual financial advisors, investors, freelancers, and small startups.",
      features: [
        "Conversational Screener: limited to 10 prompts/month",
        "Global Database Access",
        "Premium Financial Metrics and Valuation Ratios",
        "Unlimited Peer Groups",
        "One user: Designed for solo professionals",
        "Standard Email Support",
      ],
    },
    {
      name: "Enterprise Plan",
      price: "€240",
      description:
        "Ideal for: Private equity firms, Investment Banks, M&A Advisors, Valuation Consultants, CPAs and Corporate Finance teams.",
      features: [
        "Conversational Screener: Unlimited prompts",
        "Global Database Access",
        "Premium Financial Metrics and Valuation Ratios",
        "Unlimited Peer Groups",
        "Access to New Features at no-extra cost",
        "Save & Download Data: Export data in Excel",
        "Up to 5 Users",
        "Dedicated Account Manager",
        "Customer-Driven Enhancements",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black"
      id="pricing"
    >
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:opacity-90 transition-opacity duration-300 text-lg py-6 rounded-xl">
                  Subscribe Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

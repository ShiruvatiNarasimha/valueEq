import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, LineChart, PieChart, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Company Overview",
      description:
        "Unlock company details with business description, exchange, Country, Region, Industry, Sector and more.",
      icon: Users,
      image: "/Screenshot 2025-02-26 013958.png",
    },
    {
      title: "Financials",
      description:
        "Get access to up to 10 years of historical data for income statement, balance sheet and cash flow Statement with quarter and yearly periods.",
      icon: BarChart3,
      image: "/Screenshot 2025-02-26 013940.png",
    },
    {
      title: "Valuation Ratios",
      description:
        "Trust your trailing and forward valuation ratios calculated by our Valuation Experts with daily updates.",
      icon: LineChart,
      image: "/Screenshot 2025-02-26 014025.png",
    },
    {
      title: "Peer Groups",
      description:
        "Easily save and export your peer comparables for your current and future analysis.",
      icon: PieChart,
      image: "/Screenshot 2025-02-26 014044.png",
    },
  ];

  return (
    <section className="py-32 " id="features">
      <div className="container mx-auto px-4 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Leverage millions of unique data points
          </h2>
          <p className="text-xl text-muted-foreground">for sharper analysis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden  border-primary bg-transparent shadow-none p-6"
            >
              <CardHeader className="p-0 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-4 relative group">
                <div className="relative rounded-xl overflow-hidden border border-dashed border-primary">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button className="bg-primary text-black px-6 py-3 rounded-lg shadow">
            Sign Up Now
          </Button>
          <Button className="bg-secondary text-primary px-6 py-3 rounded-lg border border-primary shadow">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

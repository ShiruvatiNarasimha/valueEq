"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Investment Analyst",
      content:
        "ValueEQ has transformed how we analyze market data. The comprehensive coverage and real-time updates are invaluable.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Portfolio Manager",
      content:
        "The peer comparison tools have made our analysis much more efficient. It's become an essential part of our workflow.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Emma Williams",
      role: "Financial Advisor",
      content:
        "The accuracy and depth of financial data available through ValueEQ is exceptional. It's helped us make better investment decisions.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "David Thompson",
      role: "Risk Manager",
      content:
        "ValueEQ provides the clarity we need in complex markets. The tools have become indispensable for risk assessment.",
      image:
        "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Sophia Martinez",
      role: "Equity Strategist",
      content:
        "An essential resource for understanding equity markets. The insights are sharp and well-presented.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Daniel Lee",
      role: "Investment Banker",
      content:
        "A game-changer for financial professionals. The data accuracy and user-friendly design are unparalleled.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328e25e6?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Olivia Brown",
      role: "Wealth Manager",
      content:
        "Our clients have benefited from the sharper insights we provide thanks to ValueEQ’s reliable data.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "James Wilson",
      role: "Market Researcher",
      content:
        "ValueEQ simplifies the research process with accurate data and intuitive tools. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Isabella Davis",
      role: "Financial Consultant",
      content:
        "Reliable, fast, and insightful. ValueEQ has significantly boosted our consultancy’s performance.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2340&auto=format&fit=crop",
    },
    {
      name: "Ethan Garcia",
      role: "Asset Manager",
      content:
        "The level of detail and precision in the data provided by ValueEQ is unmatched. It’s an asset for our entire team.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2340&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto space-y-12">
        <div className="text-left space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-center">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground text-center">
            Trusted by financial professionals worldwide
          </p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 min-w-[320px] hover:shadow-2xl transition-shadow duration-300 rounded-2xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

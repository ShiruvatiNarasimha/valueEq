"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is ValueEQ, and who is it designed for?",
      answer:
        "ValueEQ is a comprehensive financial data platform designed for financial professionals, investors, and businesses. It provides access to global financial data, analysis tools, and insights for making informed investment decisions.",
    },
    {
      question: "How does AI-powered screening work?",
      answer:
        "Our AI-powered screening uses advanced algorithms to analyze financial data and market trends, helping you identify investment opportunities and risks more effectively.",
    },
    {
      question: "Can I customize my workspace and watchlists?",
      answer:
        "Yes, ValueEQ offers fully customizable workspaces and watchlists, allowing you to track and analyze the companies and metrics that matter most to you.",
    },
    {
      question: "What types of data does ValueEQ provide?",
      answer:
        "ValueEQ provides comprehensive financial data including company financials, valuation ratios, market data, peer comparisons, and industry analytics from trusted global sources.",
    },
    {
      question: "How is your data updated and verified?",
      answer:
        "Our data is updated in real-time from reliable sources and undergoes rigorous verification processes to ensure accuracy and reliability.",
    },
    {
      question: "Can I try ValueEQ before committing?",
      answer:
        "Yes, we offer a trial period for new users to experience our platform's features and capabilities before making a commitment.",
    },
  ];

  return (
    <section className="py-20 bg-muted/10" id="faq">
      <div className="container mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to commonly asked questions about ValueEQ
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-black rounded-2xl shadow-xl p-8 transition-transform hover:scale-105">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

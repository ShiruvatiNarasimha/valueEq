"use client";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";
import { WorldMapDemo } from "@/components/WorldMapDemo";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen flex-col"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-20"
      ></motion.div>
      <Hero />

      {/* Dashboard Preview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="py-10 bg-muted/30 relative overflow-hidden"
      >
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            src="/dashboard.png"
            alt="Financial Dashboard"
            height={1200}
            width={1200}
          />
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-20"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-4">
            Global financial and business data from trusted partners
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Access the world’s most{" "}
            <span className="font-semibold text-white">comprehensive</span> and{" "}
            <span className="font-semibold text-white">up-to-date</span> dataset
            for public companies,
            <br />
            spanning{" "}
            <span className="text-cyan-400 font-semibold">
              120+ countries
            </span>,{" "}
            <span className="text-cyan-400 font-semibold">70+ Exchanges</span>{" "}
            and over{" "}
            <span className="text-cyan-400 font-semibold">
              1 million data-points
            </span>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12 pt-20">
            <div>
              <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                70+
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Exchanges
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                120+
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Countries
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                60,000+
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Listed Companies
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* World Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="container relative mx-auto px-4 space-y-16"
        >
          <WorldMapDemo />
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Features />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Pricing />
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <FAQ />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Footer />
      </motion.div>
    </motion.main>
  );
}

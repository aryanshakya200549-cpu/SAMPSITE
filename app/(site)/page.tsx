"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Activity } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F0F4F8] via-[#E0F2F1] to-[#FAFAF9]">
        <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.4] z-0"></div>

        <motion.div
          className="container mx-auto px-4 z-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#A4C3B2] text-[#52796F] text-sm font-medium uppercase tracking-wider shadow-sm">
              Holistic Healing & Guidance
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#2F3E46]"
          >
            Unlock Your <span className="text-gradient">True Potential</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#526D82] mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering you through Clinical Psychology, Hypnotherapy, and Numerology to achieve balance, clarity, and success.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#52796F] text-white rounded-full font-semibold text-lg hover:bg-[#354F52] transition-all hover:scale-105 shadow-lg shadow-[#52796F]/20"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-[#2F3E46] rounded-full font-semibold text-lg border border-[#CAD2C5] hover:bg-[#F0F4F8] transition-all shadow-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements - Clearer & Softer */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-[#A4C3B2]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D8B4FE]/20 rounded-full blur-3xl -z-10"
        />
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2F3E46]">My Services</h2>
            <p className="text-lg text-[#526D82] max-w-2xl mx-auto">
              Professional guidance tailored to your unique needs and life path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="w-10 h-10 text-[#52796F]" />}
              title="Clinical Psychology"
              description="Evidence-based therapy to help you overcome mental health challenges, manage stress, and build resilience."
            />
            <ServiceCard
              icon={<Sparkles className="w-10 h-10 text-[#52796F]" />} // Unified Color
              title="Hypnotherapy"
              description="Access your subconscious mind to break habits, overcome phobias, and achieve profound positive change."
            />
            <ServiceCard
              icon={<Activity className="w-10 h-10 text-[#52796F]" />} // Unified Color
              title="Numerology"
              description="Discover the hidden meaning in numbers to understand your life purpose, strengths, and future trends."
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E2E8F0]">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-[#E0F2F1] flex items-center justify-center text-[#52796F]">
                  <span className="text-lg font-medium">Kalpana Shakya</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#A4C3B2] rounded-2xl -z-0 opacity-50"></div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2F3E46]">Meet Kalpana Shakya</h2>
              <p className="text-lg text-[#526D82] mb-6 leading-relaxed">
                With years of experience in clinical practice and holistic healing, I bridge the gap between scientific psychology and spiritual wellness. My mission is to help you heal, grow, and thrive in every aspect of your life.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#52796F]"></div>
                  <span className="text-[#334155]">Certified Clinical Psychologist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#52796F]"></div>
                  <span className="text-[#334155]">Expert Hypnotherapist & Numerologist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#52796F]"></div>
                  <span className="text-[#334155]">Personalized Healing Approaches</span>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center text-[#52796F] font-semibold hover:text-[#354F52]">
                Read Full Bio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-[#FAFAF9] p-8 rounded-2xl shadow-md border border-[#E2E8F0] transition-colors hover:border-[#A4C3B2] hover:shadow-lg"
    >
      <div className="mb-6 p-4 bg-[#E0F2F1] rounded-xl inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-[#2F3E46]">{title}</h3>
      <p className="text-[#526D82] leading-relaxed mb-6">
        {description}
      </p>
      <Link href="/services" className="text-sm font-semibold text-[#52796F] hover:text-[#354F52] flex items-center">
        Learn More <ArrowRight className="ml-1 w-3 h-3" />
      </Link>
    </motion.div>
  );
}

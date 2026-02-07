"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Activity, CheckCircle, Clock, Calendar } from "lucide-react";

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const services = [
        {
            id: "psychology",
            title: "Clinical Psychology",
            icon: <Brain className="w-12 h-12 text-[#52796F]" />,
            description: "Professional therapeutic support for mental health concerns including anxiety, depression, trauma, and relationship issues. Using evidence-based approaches like CBT and mindfulness.",
            features: [
                "Individual Counseling",
                "Anxiety & Depression Management",
                "Trauma Recovery",
                "Stress Management",
                "Relationship Counseling",
            ],
            price: "Book for Consultation",
        },
        {
            id: "hypnotherapy",
            title: "Hypnotherapy",
            icon: <Sparkles className="w-12 h-12 text-[#52796F]" />,
            description: "A guided state of relaxation and focused attention to access the subconscious mind. Effective for breaking habits, overcoming phobias, and boosting confidence.",
            features: [
                "Smoking Cessation",
                "Weight Management",
                "Phobia Release",
                "Confidence Building",
                "Past Life Regression",
            ],
            price: "Session rates available",
        },
        {
            id: "numerology",
            title: "Numerology",
            icon: <Activity className="w-12 h-12 text-[#52796F]" />,
            description: "Analysis of the numbers associated with your name and birthdate to reveal personality traits, life purpose, and future trends. Gain clarity on your life path.",
            features: [
                "Personal Name Analysis",
                "Business Name Consultation",
                "Relationship Compatibility",
                "Life Path Guidance",
                "Yearly Forecasts",
            ],
            price: "Detailed Report Included",
        },
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <section className="relative py-20 bg-[#F0F4F8] border-b border-[#E2E8F0]">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-[#2F3E46]"
                    >
                        My <span className="text-gradient">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[#526D82] max-w-2xl mx-auto"
                    >
                        Comprehensive holistic care tailored to your mind, spirit, and life path.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <div className="container mx-auto px-4 mt-16">
                <motion.div
                    className="grid gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            variants={itemVariants}
                            className="group flex flex-col md:flex-row gap-8 bg-[#FAFAF9] p-8 rounded-3xl border border-[#E2E8F0] hover:border-[#A4C3B2] transition-all hover:shadow-xl hover:shadow-[#52796F]/5"
                        >
                            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="p-4 bg-white rounded-2xl shadow-sm mb-6 border border-[#E2E8F0] group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-[#2F3E46]">{service.title}</h2>
                                <div className="text-[#64748B] font-medium mb-6 flex items-center gap-2">
                                    <Clock size={18} /> 45-60 min sessions
                                </div>
                                <div className="text-[#52796F] font-bold text-lg mt-auto">
                                    {service.price}
                                </div>
                            </div>

                            <div className="md:w-2/3 border-l border-[#E2E8F0] pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0">
                                <p className="text-lg text-[#334155] mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#52796F] flex-shrink-0" />
                                            <span className="text-[#526D82]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 flex justify-end">
                                    <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#52796F] hover:bg-[#354F52] transition-colors shadow-md shadow-[#52796F]/20">
                                        Book Now <Calendar className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

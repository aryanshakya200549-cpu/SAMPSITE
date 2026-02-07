"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative py-24 bg-[#E0F2F1] rounded-b-[3rem] overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-full md:w-1/2"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2F3E46]">
                                About <span className="text-gradient">Kalpana Shakya</span>
                            </h1>
                            <p className="text-xl text-[#526D82] mb-6 leading-relaxed">
                                A dedicated Clinical Psychologist, Hypnotherapist, and Numerologist with a passion for helping individuals unlock their true potential.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-full md:w-1/2 flex justify-center"
                        >
                            <div className="w-80 h-80 rounded-full bg-[#A4C3B2]/30 p-2 flex items-center justify-center">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#94A3B8] overflow-hidden border-4 border-white shadow-xl">
                                    {/* Placeholder for Profile Image */}
                                    <span className="text-2xl font-medium">Profile Image</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-[#2F3E46]">My Journey</h2>
                            <p className="text-lg text-[#334155] leading-relaxed">
                                With a background in clinical psychology, I realized early on that healing is not just about the mind, but also the spirit. This led me to explore Hypnotherapy and Numerology, integrating these powerful tools to offer a truly holistic approach to wellness. I believe that every individual has the power to heal themselves; my role is to facilitate that journey.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FAFAF9] p-8 rounded-2xl border border-[#E2E8F0]"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-center text-[#2F3E46]">Featured Video</h2>
                            <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <p>YouTube Video Integration (Add ID here)</p>
                                </div>
                            </div>
                            <p className="text-center mt-4 text-[#64748B]">Visit my YouTube channel for more insights.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

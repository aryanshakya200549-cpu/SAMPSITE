"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            <section className="py-20 bg-[#F0F4F8]">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-[#2F3E46]"
                    >
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <p className="text-lg text-[#526D82]">
                        Ready to start your journey? I&apos;m here to help.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[#2F3E46]">Contact Information</h2>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#E0F2F1] rounded-full text-[#52796F]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1 text-[#2F3E46]">Email</h3>
                                <p className="text-[#526D82]">contact@kallpanashakkya.in</p>
                                <p className="text-[#94A3B8] text-sm mt-1">We typically reply within 24 hours.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#E0F2F1] rounded-full text-[#52796F]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1 text-[#2F3E46]">Location</h3>
                                <p className="text-[#526D82]">Available Online regarding sessions.</p>
                                <p className="text-[#526D82]">In-person sessions available via appointment.</p>
                            </div>
                        </div>

                        <div className="bg-[#FAFAF9] p-8 rounded-2xl mt-8 border border-[#E2E8F0]">
                            <h3 className="font-bold text-lg mb-4 text-[#2F3E46]">Initial Consultation</h3>
                            <p className="text-[#526D82] leading-relaxed">
                                Unsure which service is right for you? Book a brief 15-minute discovery call to discuss your needs and how I can support you.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-3xl shadow-lg border border-[#E2E8F0]"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-[#2F3E46]">Send a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#334155] mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#FAFAF9] focus:ring-2 focus:ring-[#52796F] outline-none transition-all text-[#334155]"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#334155] mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#FAFAF9] focus:ring-2 focus:ring-[#52796F] outline-none transition-all text-[#334155]"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-[#334155] mb-2">Interested Service</label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#FAFAF9] focus:ring-2 focus:ring-[#52796F] outline-none transition-all text-[#334155]"
                                >
                                    <option>Clinical Psychology</option>
                                    <option>Hypnotherapy</option>
                                    <option>Numerology</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#334155] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#FAFAF9] focus:ring-2 focus:ring-[#52796F] outline-none transition-all text-[#334155]"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#52796F] hover:bg-[#354F52] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-[#52796F]/20"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

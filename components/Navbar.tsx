"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-[#2F3E46] tracking-tight">
                            Kalpana Shakya
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-[#52796F]",
                                    pathname === link.href
                                        ? "text-[#52796F] font-semibold"
                                        : "text-[#526D82]" // Slate Blue-ish Grey
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-[#52796F] hover:bg-[#354F52] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg shadow-[#52796F]/20"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#526D82] hover:text-[#52796F] focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#FAFAF9] border-t border-[#E2E8F0] overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                                        pathname === link.href
                                            ? "bg-[#E0F2F1] text-[#2F3E46]"
                                            : "text-[#526D82] hover:bg-[#F0F4F8]"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-[#52796F] text-white px-5 py-3 rounded-xl font-medium shadow-md"
                                >
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

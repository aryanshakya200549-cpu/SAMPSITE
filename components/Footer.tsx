import Link from "next/link";
import { Mail, Instagram, Youtube, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#F0F4F8] border-t border-[#E2E8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-[#2F3E46]"
                        >
                            Kalpana Shakya
                        </Link>
                        <p className="mt-4 text-[#526D82] max-w-sm leading-relaxed">
                            Helping you find balance and clarity through Clinical Psychology,
                            Hypnotherapy, and Numerology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#2F3E46] uppercase tracking-wider">
                            Services
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/services"
                                    className="text-[#526D82] hover:text-[#52796F] transition-colors"
                                >
                                    Clinical Psychology
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-[#526D82] hover:text-[#52796F] transition-colors"
                                >
                                    Hypnotherapy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-[#526D82] hover:text-[#52796F] transition-colors"
                                >
                                    Numerology
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#2F3E46] uppercase tracking-wider">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center text-[#526D82]">
                                <Mail className="h-4 w-4 mr-2" />
                                <span>contact@kallpanashakkya.in</span>
                            </li>
                            <li className="flex items-center text-[#526D82]">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>Available Online & In-Person</span>
                            </li>
                            <li className="flex space-x-4 mt-4">
                                <Link
                                    href="#"
                                    className="text-[#94A3B8] hover:text-[#C13584] transition-colors"
                                >
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-[#94A3B8] hover:text-[#FF0000] transition-colors"
                                >
                                    <Youtube className="h-6 w-6" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-[#94A3B8]">
                        &copy; {new Date().getFullYear()} Kalpana Shakya. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link href="/admin" className="text-xs text-[#CBD5E1] hover:text-[#94A3B8]">Admin Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Bell,
  Mail,
  MapPin
} from "lucide-react";

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Produk: [
      { label: "Fitur", href: "#features" },
      { label: "Harga", href: "#pricing" },
      { label: "Integrasi", href: "#integrations" },
      { label: "FAQ", href: "#faq" }
    ],
    Perusahaan: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Karir", href: "#careers" },
      { label: "Kontak", href: "#contact" }
    ],
    Layanan: [
      { label: "Help Center", href: "#help" },
      { label: "Tutorial", href: "#tutorial" },
      { label: "API Docs", href: "#api" },
      { label: "Status", href: "#status" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <Bell className="text-primary" size={20} />
              </div>
              <span className="text-2xl font-bold text-white">Ingetin</span>
            </div>
            <p className="text-white mb-6 max-w-sm">
              Aplikasi reminder tugas yang membantu Anda tetap produktif dan
              tidak melewatkan deadline penting.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white" />
                <span className="text-sm text-white">support@ingetin.app</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-white" />
                <span className="text-sm text-white">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-200"
                  >
                    <Icon className="text-white hover:text-primary" size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3">
              Dapatkan Update Terbaru
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe untuk mendapatkan tips produktivitas dan update fitur
              baru.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-white text-sm">
              © {currentYear} Ingetin. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="text-white hover:text-gray-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-white hover:text-gray-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-white hover:text-gray-400 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

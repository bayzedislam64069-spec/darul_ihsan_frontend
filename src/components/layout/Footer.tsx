import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border/60 bg-[#08111f] text-slate-300">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo + About */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
              <Image
                src="/images/Darul_Ihsan.png"
                alt="Darul Ihsan Logo"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
            </div>

            <span className="text-xl font-semibold tracking-wide text-white">
              Darul Ihsan
            </span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Darul Ihsan is an Islamic education and Dawah-based institution
            dedicated to spreading the teachings of the Qur&apos;an, Hadith, and
            authentic Islamic knowledge with sincerity and clarity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="text-slate-400 transition hover:translate-x-1 hover:text-emerald-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-400 transition hover:translate-x-1 hover:text-emerald-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-slate-400 transition hover:translate-x-1 hover:text-emerald-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-400 transition hover:translate-x-1 hover:text-emerald-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>Khulna, Bangladesh</li>
            <li>
              <a
                href="tel:+8801924064069"
                className="transition hover:text-white"
              >
                +880 1924-064069
              </a>
            </li>
            <li>
              <a
                href="mailto:info@darulihsan.com"
                className="transition hover:text-white"
              >
                info@darulihsan.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Follow Us</h3>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.facebook.com/profile.php?id=61581379570137&rdid=jCVxIdqpqapXtz2i#"
              aria-label="Facebook"
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
            >
              <Facebook size={18} />
            </Link>

            <Link
              href="#"
              aria-label="YouTube"
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:-translate-y-1 hover:bg-red-600 hover:text-white"
            >
              <Youtube size={18} />
            </Link>

            <Link
              href="#"
              aria-label="WhatsApp"
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:-translate-y-1 hover:bg-green-600 hover:text-white"
            >
              <MessageCircle size={18} />
            </Link>

            <Link
              href="#"
              aria-label="Website"
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:-translate-y-1 hover:bg-slate-600 hover:text-white"
            >
              <Globe size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Darul Ihsan. All rights reserved.</p>

          <p>
            Developed by{" "}
            <span className="font-medium text-slate-200">Anwarul Karim</span> ·{" "}
            <a
              href="tel:+8801602867954"
              className="transition hover:text-white"
            >
              +880 1924-064069
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { ModeToggle } from "@/components/theme/ModeToggle";
import { Facebook, Globe, MessageCircle, Youtube } from "lucide-react";

const TopNavber = () => {
  return (
    <div className="relative border-b border-white/10 bg-[#0d1b2a] text-slate-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        {/* Mobile Verse */}
        <div className="mb-2 text-center md:hidden">
          <h1 className="text-[13px] font-medium tracking-wide text-slate-200">
            পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন
          </h1>
        </div>

        {/* Desktop */}
        <div className="hidden items-center justify-between md:flex">
          {/* Left */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61581379570137&rdid=jCVxIdqpqapXtz2i#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/8801924064069"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:-translate-y-0.5 hover:bg-green-600 hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:-translate-y-0.5 hover:bg-red-600 hover:text-white"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://darulihsan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-600 hover:text-white"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>

          {/* Center */}
          <div className="text-center">
            <h1 className="text-[14px] font-medium tracking-wide text-slate-200 lg:text-[15px]">
              পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন | আল-আলাক : ১
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-blue-600 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/8801924064069"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-green-600 hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-red-600 hover:text-white"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>

            <a
              href="https://darulihsan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-slate-600 hover:text-white"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopNavber;

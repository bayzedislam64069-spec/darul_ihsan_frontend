import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="group flex items-center gap-3">
    <div className="rounded-full border border-border/60 bg-background/80 p-1.5 shadow-sm transition group-hover:shadow-md">
      <Image
        src="/images/Darul_Ihsan.png"
        alt="Darul Ihsan Logo"
        width={48}
        height={48}
        className="rounded-full object-cover"
        priority
      />
    </div>

    <div className="leading-tight">
      <p className="text-base font-bold tracking-wide text-foreground md:text-lg">
        Darul Ihsan
      </p>
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        Online Academy
      </p>
    </div>
  </Link>
);

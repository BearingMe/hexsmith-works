import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { navigation, email } from "@/content/landing";
import { HexMark } from "@/components/brand/hex-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Link aria-label="Hexsmith Works home" className="brand-lockup" href="#top">
          <HexMark />
          <span className="brand-name">
            <strong>HEXSMITH</strong>
            <span>WORKS</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="button button-primary button-small header-cta"
          href={`mailto:${email}?subject=${encodeURIComponent("Let's talk about software verification")}`}
        >
          Get in touch <ArrowUpRight aria-hidden="true" size={15} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Open navigation menu"
              className="mobile-menu-trigger"
              size="small"
              variant="outline"
            >
              <Menu aria-hidden="true" size={19} />
            </Button>
          </SheetTrigger>
          <SheetContent aria-describedby="mobile-nav-description" aria-labelledby="mobile-nav-title">
            <div className="mobile-sheet-heading">
              <HexMark />
              <span className="mono-label">HEXSMITH / NAVIGATION</span>
            </div>
            <SheetTitle className="sr-only" id="mobile-nav-title">
              Site navigation
            </SheetTitle>
            <SheetDescription className="sr-only" id="mobile-nav-description">
              Navigate to sections of the Hexsmith Works website.
            </SheetDescription>
            <nav aria-label="Mobile navigation" className="mobile-nav-links">
              {navigation.map((item, index) => (
                <SheetClose asChild key={item.href}>
                  <Link href={item.href}>
                    <span className="mono-label">0{index + 1}</span>
                    <span>{item.label}</span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Link
                className="button button-primary button-default mobile-sheet-cta"
                href={`mailto:${email}?subject=${encodeURIComponent("Let's talk about software verification")}`}
              >
                Get in touch <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

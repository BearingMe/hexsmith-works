import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { email, navigation } from "@/content/landing";
import { HexMark } from "@/components/brand/hex-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link aria-label="Hexsmith Works home" className="brand-lockup" href="#top">
              <HexMark />
              <span className="brand-name">
                <strong>HEXSMITH</strong>
                <span>WORKS</span>
              </span>
            </Link>
            <p>
              Engineering discipline for software built at the speed of AI.
            </p>
          </div>

          <div className="footer-product">
            <span className="mono-label">IN DEVELOPMENT</span>
            <span className="footer-forge">Forge</span>
            <span className="footer-product-note">Software verification</span>
          </div>

          <nav aria-label="Footer navigation" className="footer-nav">
            <span className="mono-label">EXPLORE</span>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer-contact">
            <span className="mono-label">START A CONVERSATION</span>
            <a href={`mailto:${email}`}>
              {email} <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hexsmith Works</span>
          <span className="footer-principle">Built on evidence, not assumption.</span>
          <a href="#top" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

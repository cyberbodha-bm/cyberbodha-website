import { Link } from "@tanstack/react-router";
import cyberbodhaLogo from "@/assets/cyberbodha-logo.png";
import { Mail, MapPin, Shield } from "lucide-react";

export function AcademyFooter() {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="academy-brand cursor-pointer inline-flex items-center gap-3"
              aria-label="CyberBodha home"
            >
              <span className="brand-mark h-10 w-10">
                <img src={cyberbodhaLogo} alt="CyberBodha Logo" />
              </span>
              <span className="brand-wordmark text-2xl font-bold">
                Cyber<span className="text-primary">Bodha</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              CyberBodha is a premier cybersecurity learning academy and practical cyber range. We
              bridge technical curiosity and enterprise capability through hands-on virtual labs,
              realistic threat simulations, and structured career pathways.
            </p>
            <div className="flex flex-col space-y-2 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:admissions@cyberbodha.com" className="hover:text-foreground">
                  admissions@cyberbodha.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Cybersecurity Learning & Range Center, Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Career Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <Link
                  to="/programs/$slug"
                  params={{ slug: "soc-analyst" }}
                  className="hover:text-primary transition-colors"
                >
                  SOC & Blue Team
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/$slug"
                  params={{ slug: "ethical-hacking" }}
                  className="hover:text-primary transition-colors"
                >
                  Ethical Hacking & VAPT
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/$slug"
                  params={{ slug: "vapt" }}
                  className="hover:text-primary transition-colors"
                >
                  VAPT Professional
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/$slug"
                  params={{ slug: "cybersecurity-career" }}
                  className="hover:text-primary transition-colors"
                >
                  Career Accelerator
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/$slug"
                  params={{ slug: "cloud-security" }}
                  className="hover:text-primary transition-colors"
                >
                  Cloud Security & DevSecOps
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary font-semibold hover:underline">
                  View All Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses & Catalog */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Flagship Courses
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "soc-analyst-professional" }}
                  className="hover:text-primary transition-colors"
                >
                  SOC Analyst Professional
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "ceh-v13-ai-ethical-hacking" }}
                  className="hover:text-primary transition-colors"
                >
                  CEH v13 AI Ethical Hacking
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "vapt-professional" }}
                  className="hover:text-primary transition-colors"
                >
                  VAPT Professional
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "siem-engineering-operations" }}
                  className="hover:text-primary transition-colors"
                >
                  SIEM Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "linux-networking-cybersecurity" }}
                  className="hover:text-primary transition-colors"
                >
                  Linux & Networking
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary font-semibold hover:underline">
                  Browse All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Enterprise & Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <Link to="/cyber-range" className="hover:text-primary transition-colors">
                  Cyber Range Showcase
                </Link>
              </li>
              <li>
                <Link to="/corporate-training" className="hover:text-primary transition-colors">
                  Corporate Team Training
                </Link>
              </li>
              <li>
                <Link to="/university-programs" className="hover:text-primary transition-colors">
                  University Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About CyberBodha
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-primary transition-colors">
                  Student Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Admissions
                </Link>
              </li>
              <li className="pt-2 border-t border-border/60">
                <Link
                  to="/student"
                  className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
                >
                  <Shield className="h-3 w-3 text-primary" />
                  <span>Learner Workspace</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CyberBodha Learning Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-foreground">
              Methodology
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Admissions Support
            </Link>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <span>Learn. Practice. Simulate. Certify.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

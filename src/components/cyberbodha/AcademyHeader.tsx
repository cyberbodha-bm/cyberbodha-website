import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Network,
  Cloud,
  Cpu,
  Rocket,
} from "lucide-react";
import cyberbodhaLogo from "@/assets/cyberbodha-logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CourseEnquiryModal } from "./CourseEnquiryModal";

export function AcademyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programs = [
    {
      title: "SOC & Blue Team",
      subtitle: "Monitoring, triage & incident handling",
      to: "/programs/$slug" as const,
      params: { slug: "soc-analyst" },
      icon: ShieldCheck,
    },
    {
      title: "Ethical Hacking & VAPT",
      subtitle: "Offensive security & penetration testing",
      to: "/programs/$slug" as const,
      params: { slug: "ethical-hacking" },
      icon: Terminal,
    },
    {
      title: "SIEM Engineering",
      subtitle: "Telemetry pipelines & detection-as-code",
      to: "/courses/$slug" as const,
      params: { slug: "siem-engineering-operations" },
      icon: Cpu,
    },
    {
      title: "Cloud Security",
      subtitle: "AWS, Azure & DevSecOps pipelines",
      to: "/programs/$slug" as const,
      params: { slug: "cloud-security" },
      icon: Cloud,
    },
    {
      title: "Networking & Linux",
      subtitle: "Systems & packet analysis foundations",
      to: "/courses/$slug" as const,
      params: { slug: "linux-networking-cybersecurity" },
      icon: Network,
    },
    {
      title: "Career Accelerator",
      subtitle: "Comprehensive career roadmap",
      to: "/programs/$slug" as const,
      params: { slug: "cybersecurity-career" },
      icon: Rocket,
    },
  ];

  return (
    <header className="academy-header sticky top-0 z-40 bg-background/95 backdrop-blur-md">
      {/* Brand logo & wordmark */}
      <Link to="/" className="academy-brand cursor-pointer" aria-label="CyberBodha home">
        <span className="brand-mark">
          <img src={cyberbodhaLogo} alt="CyberBodha Logo" />
        </span>
        <span className="brand-wordmark">
          Cyber<span>Bodha</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="academy-nav hidden lg:flex" aria-label="Main navigation">
        {/* Programs Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary py-2 cursor-pointer"
              aria-label="Programs menu"
            >
              <span>Programs</span>
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-80 p-2 shadow-xl border-border bg-card">
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Structured Career Tracks
            </div>
            {programs.map((item) => {
              const Icon = item.icon;
              return (
                <DropdownMenuItem
                  key={item.title}
                  asChild
                  className="cursor-pointer rounded-md p-2 hover:bg-secondary focus:bg-secondary"
                >
                  <Link to={item.to} params={item.params} className="flex items-start gap-3 w-full">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground leading-snug">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator className="my-1.5" />
            <DropdownMenuItem
              asChild
              className="cursor-pointer rounded-md p-2 hover:bg-secondary focus:bg-secondary"
            >
              <Link
                to="/programs"
                className="flex items-center justify-between w-full text-xs font-semibold text-primary"
              >
                <span>View All Structured Programs</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          to="/courses"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Course Catalog
        </Link>
        <Link
          to="/cyber-range"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Cyber Range
        </Link>
        <Link
          to="/corporate-training"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Corporate Training
        </Link>
        <Link
          to="/university-programs"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          University Programs
        </Link>
        <Link
          to="/about"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      </nav>

      {/* Desktop Action CTAs */}
      <div className="academy-actions">
        <CourseEnquiryModal
          sourceContext="Header Get Started CTA"
          trigger={
            <Button size="sm" className="hidden sm:inline-flex gap-1.5">
              <span>Get Started</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          }
        />
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[76px] z-50 max-h-[calc(100vh-76px)] overflow-y-auto border-b border-border bg-background p-6 shadow-2xl lg:hidden">
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Programs & Tracks
              </p>
              <div className="grid grid-cols-1 gap-2">
                {programs.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    params={item.params}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-md p-2 text-sm font-semibold text-foreground hover:bg-secondary"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span>{item.title}</span>
                  </Link>
                ))}
                <Link
                  to="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-xs font-semibold text-primary hover:bg-primary/5"
                >
                  View All Programs →
                </Link>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Navigation
              </p>
              <div className="flex flex-col space-y-2.5">
                <Link
                  to="/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  Course Catalog
                </Link>
                <Link
                  to="/cyber-range"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  Cyber Range Showcase
                </Link>
                <Link
                  to="/corporate-training"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  Corporate Training
                </Link>
                <Link
                  to="/university-programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  University Programs
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  About CyberBodha
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  Contact & Admissions
                </Link>
              </div>
            </div>

            <div className="border-t border-border pt-4 flex flex-col gap-2.5">
              <CourseEnquiryModal
                sourceContext="Mobile Menu Get Started"
                trigger={<Button className="w-full justify-center">Get Started / Enquire</Button>}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

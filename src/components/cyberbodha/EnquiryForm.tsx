import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/data/courses";
import { submitLead } from "@/lib/lead-submit";
import { trackLead } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/site";

export interface EnquiryFormProps {
  defaultCourseSlug?: string;
  sourceContext?: string;
  onSuccess?: () => void;
  className?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  courseSlug: string;
  learningObjective: string;
  preferredFormat: string;
  message: string;
  websiteHoneypot: string; // Anti-spam honeypot
}

interface FormErrors {
  fullName?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  courseSlug?: string | undefined;
  form?: string | undefined;
}

export function EnquiryForm({
  defaultCourseSlug = "",
  sourceContext = "General Course Enquiry",
  onSuccess,
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    courseSlug: defaultCourseSlug,
    learningObjective: "Career Transition into Cybersecurity",
    preferredFormat: "Live Weekend Cohort",
    message: "",
    websiteHoneypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [delivered, setDelivered] = useState(true);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      nextErrors.fullName = "Name must be at least 2 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = "Please provide a valid email address (e.g. name@example.com).";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (phoneDigits.length < 8) {
      nextErrors.phone = "Please enter a valid phone number with area code.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection: if bots filled the hidden input, pretend success without sending
    if (formData.websiteHoneypot) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In this phase, we securely record the enquiry to sessionStorage and trigger user confirmation.
      // Ready for integration with Supabase, CRM, or webhook endpoint without exposing client credentials.
      const enquiryPayload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        courseSlug: formData.courseSlug || "general",
        learningObjective: formData.learningObjective,
        preferredFormat: formData.preferredFormat,
        message: formData.message.trim(),
        sourceContext,
        submittedAt: new Date().toISOString(),
      };

      // Keep a local copy so a network failure never loses the enquiry silently.
      const result = await submitLead(enquiryPayload);

      // Only count a conversion when the lead actually reached a server,
      // otherwise Meta and GA optimise towards enquiries nobody received.
      if (result.delivered) {
        trackLead({
          course: enquiryPayload.courseSlug,
          format: enquiryPayload.preferredFormat,
          source: sourceContext,
        });
      }

      setDelivered(result.delivered);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Enquiry submission issue:", err);
      setErrors({
        form: "We encountered a temporary issue. Please reach out to admissions directly at admissions@cyberbodha.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    const selectedCourse = COURSES.find((c) => c.slug === formData.courseSlug);
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground">
          {delivered ? "Enquiry Received" : "Almost there"}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you, <strong>{formData.fullName}</strong>.{" "}
          {delivered ? (
            <>
              Your enquiry for{" "}
              <strong>{selectedCourse ? selectedCourse.title : "CyberBodha programs"}</strong> has
              been received.
            </>
          ) : (
            <>
              Your details for{" "}
              <strong>{selectedCourse ? selectedCourse.title : "CyberBodha programs"}</strong> are
              ready — send them on WhatsApp so an advisor picks this up today.
            </>
          )}
        </p>
        {!delivered && (
          <div className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-4 text-left text-xs">
            <p className="font-semibold text-foreground">One more step to reach us today</p>
            <p className="mt-1 text-muted-foreground">
              Our enquiry inbox is being connected. To make sure an advisor sees your details right
              away, send us the same message on WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex font-semibold text-primary underline"
            >
              Message CyberBodha on WhatsApp
            </a>
          </div>
        )}

        <div className="mt-4 rounded-lg border border-border bg-card p-4 text-left text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">What happens next?</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Our training advisors will review your learning objectives.</li>
            <li>
              We will email detailed curriculum and batch schedules to{" "}
              <strong>{formData.email}</strong>.
            </li>
            <li>Response timeframe: typically within 1 business day.</li>
          </ul>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              courseSlug: defaultCourseSlug,
              learningObjective: "Career Transition into Cybersecurity",
              preferredFormat: "Live Weekend Cohort",
              message: "",
              websiteHoneypot: "",
            });
          }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className}`}>
      {/* Honeypot field for anti-spam bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Do not fill this field</label>
        <input
          type="text"
          id="websiteHoneypot"
          name="websiteHoneypot"
          value={formData.websiteHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errors.form && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-xs text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold text-foreground mb-1">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          placeholder="e.g. Priya Sharma"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
            errors.fullName ? "border-destructive ring-destructive" : "border-border"
          }`}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-xs text-destructive">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="you@domain.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
              errors.email ? "border-destructive ring-destructive" : "border-border"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-1">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
              errors.phone ? "border-destructive ring-destructive" : "border-border"
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="courseSlug" className="block text-xs font-semibold text-foreground mb-1">
            Program / Course of Interest
          </label>
          <select
            id="courseSlug"
            value={formData.courseSlug}
            onChange={(e) => setFormData({ ...formData, courseSlug: e.target.value })}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">General Program Enquiry</option>
            {COURSES.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="learningObjective"
            className="block text-xs font-semibold text-foreground mb-1"
          >
            Primary Learning Goal
          </label>
          <select
            id="learningObjective"
            value={formData.learningObjective}
            onChange={(e) => setFormData({ ...formData, learningObjective: e.target.value })}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="Career Transition into Cybersecurity">
              Career Transition into Cybersecurity
            </option>
            <option value="Upskilling for Current IT/Security Role">
              Upskilling for Current IT/Security Role
            </option>
            <option value="Academic Student Building Practical Skills">
              Academic Student Building Practical Skills
            </option>
            <option value="Corporate / Enterprise Team Training">
              Corporate / Enterprise Team Training
            </option>
            <option value="University Lab & Curriculum Integration">
              University Lab & Curriculum Integration
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="preferredFormat"
          className="block text-xs font-semibold text-foreground mb-1"
        >
          Preferred Training Format
        </label>
        <select
          id="preferredFormat"
          value={formData.preferredFormat}
          onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="Live Weekend Cohort">Live Weekend Cohort (Instructor-led)</option>
          <option value="Live Weekday Evening Batch">Live Weekday Evening Batch</option>
          <option value="Self-Paced with Cyber Range Labs">Self-Paced with Cyber Range Labs</option>
          <option value="Dedicated Enterprise Cohort">Dedicated Enterprise Cohort</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1">
          Specific Questions or Goals{" "}
          <span className="text-muted-foreground font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Let us know about your background, desired batch timing, or specific technical topics you would like to cover..."
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="pt-2">
        <Button type="submit" disabled={isSubmitting} className="w-full justify-center gap-2">
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Submit Course Enquiry</span>
            </>
          )}
        </Button>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          We respect your privacy. No spam or unsolicited marketing calls.
        </p>
      </div>
    </form>
  );
}

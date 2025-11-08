import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema from "@/schemas/contactSchema";
import { submitContact } from "@/services/contactService";
import FormField from "@/components/FormField";
import InlineAlert from "@/components/InlineAlert";

export default function Contact() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema), mode: "onBlur" });

  const onSubmit = async (values) => {
    setSuccess("");
    setError("");
    const res = await submitContact(values);
    if (res.ok) {
      setSuccess("Form Submitted");
      reset();
      setTimeout(() => setSuccess(""), 4000);
    } else {
      setError(
        (res.error && (res.error.detail || res.error.message)) ||
          "Unable to submit the form. Please try again."
      );
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="paper-bg ornament-frame">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:items-start">
        {/* Left copy */}
        <div className="md:col-span-5">
          <h3 className="font-serif-display text-2xl text-slate-800">Join the Story</h3>
          <p className="mt-2 text-slate-600">Ready to bring your vision to life? Let's talk.</p>
          <div className="mt-8 space-y-2 text-slate-700">
            <p>
              Whether you have an idea, a question, or simply want to explore how we can work together, we're just a message away.
            </p>
            <p>Let's catch up over coffee. Great stories always begin with a good conversation.</p>
          </div>
          <div className="mt-10 text-sm text-orange-700">
            <a href="mailto:vernita@varnanfilms.co.in" className="hover:underline">vernita@varnanfilms.co.in</a>
            <span className="mx-3">·</span>
            <a href="tel:+919876384567" className="hover:underline">+91 98763 84567</a>
          </div>
        </div>

        {/* Right form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur" data-testid="contact-form">
            <FormField
              label="Your name*"
              id="name"
              placeholder="Jane Doe"
              register={register}
              error={errors.name}
              disabled={isSubmitting}
              testId="contact-name"
            />
            <FormField
              label="Your email*"
              id="email"
              type="email"
              placeholder="jane@example.com"
              register={register}
              error={errors.email}
              disabled={isSubmitting}
              testId="contact-email"
            />
            <FormField
              label="Phone*"
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              register={register}
              error={errors.phone}
              disabled={isSubmitting}
              testId="contact-phone"
            />
            <FormField
              label="Your message*"
              id="message"
              type="textarea"
              placeholder="Tell us about your project..."
              register={register}
              error={errors.message}
              disabled={isSubmitting}
              testId="contact-message"
            />

            {success && (
              <InlineAlert type="success" testId="contact-success">{success}</InlineAlert>
            )}
            {error && <InlineAlert type="error" testId="contact-error">{error}</InlineAlert>}

            <button
              type="submit"
              data-testid="contact-submit-btn"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2 font-medium text-white shadow transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";

const serviceGroups = [
  {
    title: "App Development",
    icon: "💻",
    items: ["Web Development", "Android App", "iPhone App", "API Development"],
  },
  // {
  //   title: "Hosting Services",
  //   icon: "☁️",
  //   items: ["Web Hosting", "DB Hosting", "API Hosting"],
  // },
  // {
  //   title: "Optimization",
  //   icon: "⚡",
  //   items: ["SEO", "Data Optimization"],
  // },
  // {
  //   title: "Data Management",
  //   icon: "🗄️",
  //   items: [
  //     "Data Migration",
  //     "Data Storage",
  //     "Data Cleanup",
  //     "Database Backup",
  //   ],
  // },
  // {
  //   title: "Domain Handling",
  //   icon: "🌐",
  //   items: ["Buy Domain", "Domain Transfer", "Domain Parking"],
  // },
  // {
  //   title: "Marketing",
  //   icon: "📈",
  //   items: [
  //     "Digital Marketing",
  //     "SMS Gateway",
  //     "Email Gateway",
  //     "WhatsApp Messaging",
  //   ],
  // },
  // {
  //   title: "Social Media Optimization",
  //   icon: "📱",
  //   items: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
  // },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPhoneInputAllowed = (value) => /^\+?[0-9 ]*$/.test(value);
  const [selectedServices, setSelectedServices] = useState([]);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captcha] = useState(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b };
  });

  const [status, setStatus] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    if (!isPhoneInputAllowed(value)) return;

    setForm((prev) => ({ ...prev, phone: value }));
  };
  const isValidPhone = (phone) => {
    const value = phone.trim();

    // Exactly 10 digits without a country code
    if (/^[0-9 ]+$/.test(value)) {
      return value.replace(/\s/g, "").length === 10;
    }

    // Optional +, 1–3 digit country code, and 10-digit phone number
    return /^\+[0-9]{1,3}\s?[0-9]{10}$/.test(value);
  };
  const updateField = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!isValidPhone(form.phone)) {
      setStatus(
        "error:Enter a valid 10-digit phone number, optionally with a country code.",
      );

      document.getElementById("phone")?.focus();
      return;
    }
    if (Number(captchaAnswer) !== captcha.a + captcha.b) {
      setStatus("error:Incorrect CAPTCHA. Please try again.");
      return;
    }
    const contactData = {
      contactName: form.name.trim(),
      contactPhone: form.phone.trim(),
      contactEmailAddress: form.email.trim(),
      contactServiceRequirements: selectedServices,
      contactMessage: form.message.trim(),
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://contact.onlineprofile.in/contactus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(contactData),
        },
      );

      const responseData = await response.json();

      // Inspect the complete API response in the browser console
      console.log("API status:", response.status);
      console.log("API response data:", responseData.message);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          errorText || `Request failed with status ${response.status}`,
        );
      }

      if (responseData.message == "email already exists.") {
        setStatus(
          "error:We already have your email in our system. Our team will contact your shortly.",
        );
      } else {
        setStatus("success:Your enquiry has been submitted successfully!");
      }

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setSelectedServices([]);
      setCaptchaAnswer("");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error:Unable to submit your enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { name: "Calculator", href: "#calculator" },
    { name: "Services", href: "#services" },
    { name: "Hosting", href: "#hosting" },
    { name: "Terms", href: "#terms" },
    { name: "Home", href: "/" },
  ];

  const openDrawer = () => {
    console.log("fhhg");
    setDrawerOpen(true);
    document.body.classList.add("drawer-open");
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.classList.remove("drawer-open");
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-slate-950 font-sans text-slate-100">
      {/* Ambient background glows */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">

      <nav className="navbar">
          <a href="/" className="brand-logo">
            <img
              src="haditechlogo.svg"
              alt="HaadiTech Logo"
              className="brand-icon"
            />

            <img
              src="Name_Tag_Combined_White.svg"
              alt="HaadiTech"
              className="brand-name"
            />
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeDrawer}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="menu-toggle"
            id="menuToggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobileDrawer"
            onClick={openDrawer}
          >
            <span className="burger-menu-background"></span>
            <span className="burger-menu-background"></span>
            <span className="burger-menu-background"></span>
          </button>
        </nav>

        {/* DRAWER OVERLAY */}

        <div
          className={`drawer-overlay ${drawerOpen ? "active" : ""}`}
          id="drawerOverlay"
          onClick={closeDrawer}
        />

        {/* MOBILE DRAWER */}

        <aside
          className={`mobile-drawer ${drawerOpen ? "active" : ""}`}
          id="mobileDrawer"
          aria-hidden={!drawerOpen}
        >
          <div className="drawer-header">
            <span>Menu</span>

            <button
              className="drawer-close"
              id="drawerClose"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              &times;
            </button>
          </div>

          <div className="drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeDrawer}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>
        </aside>

        {/* Header */}
        <header className="mb-12 flex flex-col items-center text-center">
          <a
            href="/"
            className="mb-10 text-xl font-extrabold tracking-tight text-white"
          >
            <span className="text-cyan-400">Haadi</span>Tech
            <span className="text-cyan-400">.</span>
          </a>

          <span className="mb-4 inline-flex rounded-full border border-cyan-800/50 bg-cyan-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Let's Build Something Great
          </span>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Tell us about your project, choose the services you need, and our
            team will help you find the right technology solution.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Contact information */}
          <aside className="space-y-6 lg:sticky lg:top-8 lg:col-span-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <h2 className="text-xl font-bold text-white">
                Contact Information
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Have a question or a project in mind? Reach out to us.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href="mailto:info@HaadiTech.com"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-800 bg-cyan-950 text-lg text-cyan-400">
                    ✉
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Email Us
                    </span>
                    <span className="mt-1 block break-all text-sm text-slate-400 transition-colors group-hover:text-cyan-400">
                      info@HaadiTech.com
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+917901808970"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-800 bg-blue-950 text-lg text-blue-400">
                    ☎
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Call Us
                    </span>
                    <span className="mt-1 block text-sm text-slate-400 transition-colors group-hover:text-cyan-400">
                      +91 790 180 8970
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-800 bg-indigo-950 text-lg text-indigo-400">
                    📍
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Our Office
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-400">
                      HaadiTech Pvt Ltd
                      <br />
                      4th Floor, NH-8, Ambience Island,
                      <br />
                      Sector 24, DLF Phase 3,
                      <br />
                      Gurugram, Haryana 122002, India
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/70 via-slate-900 to-blue-950/70 p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />

              <h3 className="text-lg font-bold text-white">
                Have a project in mind?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                From website development to cloud infrastructure and digital
                marketing, we help turn your ideas into scalable solutions.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Web", "Mobile Apps", "Cloud", "Marketing"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <section className="lg:col-span-8 p-0">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10"
            >
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Send Us an Enquiry
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Fill in your details and select all the services you are
                  interested in.
                </p>
              </div>

              {/* Personal information */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={updateField}
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Phone Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    noValidate
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 9876543210"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    required
                    maxLength={15}
                    pattern="(\+[0-9]{1,3} ?[0-9]{10}|[0-9]{10})"
                    title="Enter 10 digits, optionally with a + and 1–3 digit country code."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={updateField}
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400">
                      Services Required
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Select one or more services.
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-800/70 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-400">
                    {selectedServices.length} selected
                  </span>
                </div>

                <div className="space-y-5">
                  {serviceGroups.map((group) => (
                    <fieldset
                      key={group.title}
                      className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 sm:p-5"
                    >
                      <legend className="sr-only">{group.title}</legend>

                      <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-200">
                        <span aria-hidden="true">{group.icon}</span>
                        {group.title}
                      </h4>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {group.items.map((service) => {
                          const checked = selectedServices.includes(service);

                          return (
                            <label
                              key={service}
                              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all ${
                                checked
                                  ? "border-cyan-500/60 bg-cyan-950/40"
                                  : "border-slate-800 bg-slate-900/50 hover:border-slate-600"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleService(service)}
                                className="h-4 w-4 shrink-0 accent-cyan-400 focus:ring-cyan-500"
                              />

                              <span
                                className={`text-sm ${
                                  checked
                                    ? "font-medium text-cyan-300"
                                    : "text-slate-300"
                                }`}
                              >
                                {service}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Project Details / Message{" "}
                  <span className="text-cyan-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project, requirements, budget, or timeline..."
                  value={form.message}
                  onChange={updateField}
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />

                <p className="mt-2 text-right text-xs text-slate-500">
                  {form.message.length}/5000 characters
                </p>
              </div>

              {/* CAPTCHA */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
                <label
                  htmlFor="captcha"
                  className="mb-3 block text-sm font-semibold text-slate-200"
                >
                  Security Verification <span className="text-cyan-400">*</span>
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <div
                    className="rounded-xl border border-cyan-900/70 bg-cyan-950/50 px-5 py-3 font-mono text-lg font-bold tracking-widest text-cyan-300"
                    aria-label={`Solve ${captcha.a} plus ${captcha.b}`}
                  >
                    {captcha.a} + {captcha.b} = ?
                  </div>

                  <div className="min-w-0 flex-1">
                    <input
                      id="captcha"
                      type="number"
                      inputMode="numeric"
                      placeholder="Your answer"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  Solve the simple math question to verify your submission.
                </p>
              </div>

              {/* Status message */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border p-4 text-sm ${
                    status.startsWith("success:")
                      ? "border-emerald-800 bg-emerald-950/40 text-emerald-300"
                      : "border-rose-800 bg-rose-950/40 text-rose-300"
                  }`}
                >
                  {status.slice(status.indexOf(":") + 1)}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <span aria-hidden="true"></span>}
              </button>

              <p className="text-center text-xs leading-relaxed text-slate-500">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </section>
        </div>

        {/* Footer */}
        <footer className="sm:grid-cols-1 md:grid-cols-2  mt-16 border-t border-slate-800 py-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 HaadiTech Solutions. All rights reserved.
          </p>
          <a
            href="/"
            className="inline-block text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Home
          </a>
        </footer>
      </div>
    </main>
  );
}

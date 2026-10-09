"use client";
import React, { useState, useEffect } from "react";

const formatCurrency = (amount) =>
  "₹" + Number(amount || 0).toLocaleString("en-IN");

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [services, setServices] = useState({
    web: true,
    android: false,
    iphone: false,
    maintenance: true,
    domain: false,
    gateway: false,
    whatsapp: false,
  });

  const [hostingType, setHostingType] = useState("yearly");
  const [months, setMonths] = useState(12);
  const [years, setYears] = useState(1);
  const [maintenanceYears, setMaintenanceYears] = useState(1);
  const [copied, setCopied] = useState(false);

  // Mobile Drawer Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const toggleService = (service) => {
    setServices((previous) => ({
      ...previous,
      [service]: !previous[service],
    }));
  };

  const updateNumber = (value, setter, max) => {
    const parsed = Number.parseInt(value, 10);
    setter(
      value === ""
        ? ""
        : Number.isNaN(parsed)
          ? 1
          : Math.min(max, Math.max(1, parsed)),
    );
  };

  const safeMonths = Math.min(60, Math.max(1, Number(months) || 1));
  const safeYears = Math.min(10, Math.max(1, Number(years) || 1));
  const safeMaintenanceYears = Math.min(
    10,
    Math.max(1, Number(maintenanceYears) || 1),
  );

  // 1. Development charges
  const totalDev =
    (services.web ? 55000 : 0) +
    (services.android ? 70000 : 0) +
    (services.iphone ? 95000 : 0);

  // 2. Hosting charges
  const totalMonthlyHosting = safeMonths * 2000;
  const totalYearlyHosting = safeYears * 20000;

  const totalHosting =
    hostingType === "monthly" ? totalMonthlyHosting : totalYearlyHosting;

  // 3. Maintenance charges
  const totalMaintenance = services.maintenance
    ? safeMaintenanceYears * 25000
    : 0;

  // 4. Additional charges
  const totalDomain = services.domain ? 1000 : 0;
  const totalWhatsapp = services.whatsapp ? 300 : 0;

  const totalAdd = totalDomain + totalWhatsapp;

  const grandTotal = totalDev + totalHosting + totalMaintenance + totalAdd;
  const advance = totalDev * 0.3;

  const quoteSummary = `HaadiTech Pricing Quote Summary:

One-Time Development: ${formatCurrency(totalDev)}
Hosting Charges: ${formatCurrency(totalHosting)}
Maintenance Charges: ${formatCurrency(totalMaintenance)}
Additional Charges: ${formatCurrency(totalAdd)}
Payment Gateway: ${services.gateway ? "1.99% per transaction (not included in total)" : "Not selected"}
Estimated Total Cost: ${formatCurrency(grandTotal)}
Advance Required (30% of development): ${formatCurrency(advance)}`;

  const copyQuoteSummary = async () => {
    try {
      await navigator.clipboard.writeText(quoteSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy your quote summary:", quoteSummary);
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
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-clip">
      {/* Background Ambient Glows */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-none mx-0 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 py-4">
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

        <header className="text-center py-12 md:py-16 max-w-3xl mx-auto">
          <div className="mt-20 inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            Instant Estimate Calculator
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Smart Technology. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Transparent Pricing.
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Website development, mobile apps, hosting, and ongoing technical
            support configured with clear, upfront pricing.
          </p>
        </header>

        {}
        <section id="calculator" className="scroll-mt-24 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Interactive Pricing Calculator
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Select your requirements to estimate one-time development and
              recurring costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start w-full">
            {/* Left Column - Options */}
            <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-5 sm:p-7 backdrop-blur-md space-y-8 shadow-xl">
              {/* 1. Development */}
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400 flex items-center space-x-2">
                    <span>1. One-time Development Charges</span>
                  </h3>
                  <span className="text-lg font-bold text-slate-200">
                    {formatCurrency(totalDev)}
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "web", label: "Web Development", price: 55000 },
                    { id: "android", label: "Android App", price: 70000 },
                    { id: "iphone", label: "iPhone App", price: 95000 },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        services[item.id]
                          ? "bg-slate-800/80 border-cyan-500/50 shadow-md shadow-cyan-950/30"
                          : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={services[item.id]}
                          onChange={() => toggleService(item.id)}
                          className="w-5 h-5 rounded text-cyan-500 bg-slate-900 border-slate-700 focus:ring-cyan-500 focus:ring-offset-slate-900"
                        />
                        <span className="text-slate-200 font-medium text-sm sm:text-base">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-slate-300 font-semibold text-sm sm:text-base">
                        {formatCurrency(item.price)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Hosting */}
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400">
                    2. Hosting Charges
                  </h3>
                  <span className="text-lg font-bold text-slate-200">
                    {formatCurrency(totalHosting)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Monthly Hosting Card */}
                  <div
                    onClick={() => setHostingType("monthly")}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      hostingType === "monthly"
                        ? "bg-slate-800/80 border-cyan-500 shadow-md shadow-cyan-950/30"
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-200 text-sm sm:text-base">
                          Monthly Hosting
                        </span>
                        <span className="text-cyan-400 font-bold">
                          {hostingType === "monthly" ? "✓" : "○"}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-white mb-3">
                        ₹2,000{" "}
                        <span className="text-xs font-normal text-slate-400">
                          / month
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                      <label
                        htmlFor="inputMonths"
                        className="text-slate-400 flex items-center space-x-1"
                      >
                        <span>Months:</span>
                      </label>
                      <input
                        id="inputMonths"
                        type="number"
                        min="1"
                        max="60"
                        value={months}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          updateNumber(e.target.value, setMonths, 60)
                        }
                        className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Yearly Hosting Card */}
                  <div
                    onClick={() => setHostingType("yearly")}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                      hostingType === "yearly"
                        ? "bg-slate-800/80 border-cyan-500 shadow-md shadow-cyan-950/30"
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-200 text-sm sm:text-base">
                          Yearly Hosting
                        </span>
                        <span className="text-cyan-400 font-bold">
                          {hostingType === "yearly" ? "✓" : "○"}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-white mb-1">
                        ₹20,000{" "}
                        <span className="text-xs font-normal text-slate-400">
                          / year
                        </span>
                      </div>
                      <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2 py-0.5 rounded mb-3">
                        ✦ SAVE 16% (Up to ₹4,000)
                      </span>
                    </div>

                    <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                      <label htmlFor="inputYears" className="text-slate-400">
                        Years:
                      </label>
                      <input
                        id="inputYears"
                        type="number"
                        min="1"
                        max="10"
                        value={years}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          updateNumber(e.target.value, setYears, 10)
                        }
                        className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Maintenance */}
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400">
                    3. Maintenance & Support
                  </h3>
                  <span className="text-lg font-bold text-slate-200">
                    {formatCurrency(totalMaintenance)}
                  </span>
                </div>

                <div
                  className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    services.maintenance
                      ? "bg-slate-800/80 border-cyan-500/50 shadow-md shadow-cyan-950/30"
                      : "bg-slate-950/40 border-slate-800/80"
                  }`}
                >
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={services.maintenance}
                      onChange={() => toggleService("maintenance")}
                      className="w-5 h-5 rounded text-cyan-500 bg-slate-900 border-slate-700 focus:ring-cyan-500"
                    />
                    <span className="text-slate-200 text-sm sm:text-base font-medium">
                      Maintenance & Updates (₹25,000 / year)
                    </span>
                  </label>

                  <div className="flex items-center space-x-3 pl-8 sm:pl-0">
                    <label
                      htmlFor="inputMaintYears"
                      className="text-xs text-slate-400"
                    >
                      Years:
                    </label>
                    <input
                      id="inputMaintYears"
                      type="number"
                      min="1"
                      max="10"
                      value={maintenanceYears}
                      onChange={(e) =>
                        updateNumber(e.target.value, setMaintenanceYears, 10)
                      }
                      className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-white text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Additional Services */}
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400">
                    4. Additional Charges
                  </h3>
                  <span className="text-lg font-bold text-slate-200">
                    {formatCurrency(totalAdd)}
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: "domain",
                      label: "Domain Name Charges",
                      price: "₹1,000 / year",
                    },
                    {
                      id: "gateway",
                      label: "Payment Gateway Setup",
                      price: "1.99% / transaction",
                    },
                    {
                      id: "whatsapp",
                      label: "WhatsApp Business Account",
                      price: "₹300 / month",
                    },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        services[item.id]
                          ? "bg-slate-800/80 border-cyan-500/50 shadow-md shadow-cyan-950/30"
                          : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={services[item.id]}
                          onChange={() => toggleService(item.id)}
                          className="w-5 h-5 rounded text-cyan-500 bg-slate-900 border-slate-700 focus:ring-cyan-500"
                        />
                        <span className="text-slate-200 font-medium text-sm sm:text-base">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-slate-400 font-medium text-xs sm:text-sm">
                        {item.price}
                      </span>
                    </label>
                  ))}

                  {services.gateway && (
                    <p className="text-xs text-amber-400/90 bg-amber-950/30 border border-amber-800/40 p-2.5 rounded-lg mt-2">
                      ℹ️ The 1.99% payment gateway transaction fee is processed
                      by gateway directly and not included in total.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>Estimate Summary</span>
                  <span className="text-xs font-normal text-cyan-400 bg-cyan-950 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>One-Time Development:</span>
                    <strong className="text-slate-100">
                      {formatCurrency(totalDev)}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Hosting Charges:</span>
                    <strong className="text-slate-100">
                      {formatCurrency(totalHosting)}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Maintenance Charges:</span>
                    <strong className="text-slate-100">
                      {formatCurrency(totalMaintenance)}
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Additional Charges:</span>
                    <strong className="text-slate-100">
                      {formatCurrency(totalAdd)}
                    </strong>
                  </div>

                  <div className="my-3 border-t border-slate-800"></div>

                  <div className="flex justify-between items-center text-cyan-300 bg-cyan-950/30 p-2.5 rounded-xl border border-cyan-900/40">
                    <span className="text-xs sm:text-sm font-medium">
                      30% Advance (Development):
                    </span>
                    <strong className="text-base text-cyan-400">
                      {formatCurrency(advance)}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Grand Total Highlight Box */}
              <div className="bg-gradient-to-br from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/30 rounded-2xl p-5 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Estimated Total Cost
                </p>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-white bg-clip-text my-2">
                  {formatCurrency(grandTotal)}
                </div>
                <p className="text-xs text-slate-400">
                  Advance required to initiate:{" "}
                  <span className="text-cyan-300 font-semibold">
                    {formatCurrency(advance)}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  <span>Print / Save PDF Quote</span>
                </button>

                <button
                  type="button"
                  onClick={copyQuoteSummary}
                  className="w-full py-3 px-4 rounded-xl font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  <span>
                    {copied
                      ? "Quote Copied to Clipboard!"
                      : "Copy Quote Summary"}
                  </span>
                </button>
              </div>
            </aside>
          </div>
        </section>

        {}
        <section
          id="services"
          className="scroll-mt-24 py-12 border-t border-slate-800/80"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Development Investments
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Choose the digital solutions tailored for your business scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-md mb-3">
                  Core Solution
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Global Website
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  High performance, responsive web app tailored for your brand
                  presence.
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white mb-1">
                  ₹55,000
                </div>
                <span className="text-xs text-slate-400">
                  One-Time Development
                </span>
              </div>
            </article>

            <article className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md mb-3">
                  Optional Add-on
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Android App
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Native Android app published on Google Play Store.
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white mb-1">
                  ₹70,000
                </div>
                <span className="text-xs text-slate-400">
                  One-Time Development
                </span>
              </div>
            </article>

            <article className="bg-slate-900/50 border border-cyan-500/30 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 font-bold text-[10px] px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div>
                <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md mb-3">
                  Optional Add-on
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  iPhone Application
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Smooth iOS mobile app tailored for Apple devices.
                </p>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white mb-1">
                  ₹95,000
                </div>
                <span className="text-xs text-slate-400">
                  One-Time Development
                </span>
              </div>
            </article>
          </div>
        </section>

        {}
        <section
          id="hosting"
          className="scroll-mt-24 py-12 border-t border-slate-800/80"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Hosting & Server Plans
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Flexible server billing options configured for maximum uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Monthly Hosting
              </h3>
              <div className="text-2xl font-extrabold text-cyan-400 mb-2">
                ₹2,000{" "}
                <span className="text-sm font-normal text-slate-400">
                  / month
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Managed website, database, and app API hosting on secure servers
                maintained by HaadiTech.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-cyan-950/40 border border-cyan-500/40 p-6 rounded-2xl relative">
              <span className="absolute -top-3 right-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                SAVE 16% (₹4,000 Off)
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Annual Server Hosting
              </h3>
              <div className="text-2xl font-extrabold text-cyan-400 mb-2">
                ₹20,000{" "}
                <span className="text-sm font-normal text-slate-400">
                  / year
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Cost-effective yearly billing for all server resources with
                priority infrastructure support.
              </p>
            </div>
          </div>
        </section>

        {}
        <section
          id="terms"
          className="scroll-mt-24 py-12 border-t border-slate-800/80"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Payment & Support Terms
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Transparent principles for seamless collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-lg shrink-0">
                ₹
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  30% Advance Payment
                </h3>
                <p className="text-slate-400 text-sm">
                  An advance payment of 30% on initial development is required
                  to start design & engineering work.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Free Data Migration
                </h3>
                <p className="text-slate-400 text-sm">
                  Complete data migration assistance to external hosting is
                  provided at zero cost whenever needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
                <div className="footer-col">
                    <h4>HaadiTech.</h4>

                    <p>
                        Empowering businesses globally with next-generation
                        digital solutions, unmatched security, and infinite
                        scalability.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>

                    <a href="/#work">Our Work</a>
                    <a href="/#services">Services</a>
                    <a href="/#pricing">Pricing</a>
                    <a href="/#">Careers</a>
                </div>

                <div className="footer-col">
                    <h4>Connect</h4>

                    <a
                        href="https://www.linkedin.com/in/haaditech"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://www.facebook.com/haaditechpvtltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>

                    <a
                        href="https://www.instagram.com/haaditech.pvt.ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>

                    <p>
                        Email:{" "}
                        <a href="mailto:info@HaadiTech.com">
                            info@HaadiTech.com
                        </a>
                    </p>

                    <p>
                        Phone: <a href="tel:+917901808970">+91 790 180 8970</a>
                    </p>

                    <br />

                    <h4>Address</h4>

                    <p>
                        HaadiTech Pvt Ltd
                        <br />
                        4th Floor
                        <br />
                        NH-8, Ambience Island, Sector 24, DLF Phase 3, Gurugram,
                        Haryana
                        <br />
                        India 122002
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 HaadiTech Solutions. All rights reserved.</p>
                </div>
            </footer>
      </div>
    </main>
  );
}

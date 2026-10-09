"use client";

import { useEffect, useState } from "react";

export default function MainPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    /*
     * ==========================================
     * REVEAL ON SCROLL
     * ==========================================
     */
    useEffect(() => {
        // Prevent browser from restoring previous scroll position
        window.history.scrollRestoration = "manual";

        const reveal = () => {
            const reveals = document.querySelectorAll(".reveal");

            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 100;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add("active");
                }
            });
        };

        // Same behavior as your original window "load" event
        const handleLoad = () => {
            window.scrollTo(0, 0);
            reveal();
        };

        // Run immediately in case the page has already loaded
        if (document.readyState === "complete") {
            window.scrollTo(0, 0);
            reveal();
        } else {
            window.addEventListener("load", handleLoad);
        }

        // Listen for scrolling
        window.addEventListener("scroll", reveal);

        // Cleanup when component unmounts
        return () => {
            window.removeEventListener("load", handleLoad);
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    /*
     * ==========================================
     * ESC KEY
     * ==========================================
     */
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setDrawerOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    /*
     * ==========================================
     * DRAWER FUNCTIONS
     * ==========================================
     */

    const openDrawer = () => {
        setDrawerOpen(true);
        document.body.classList.add("drawer-open");
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        document.body.classList.remove("drawer-open");
    };

    return (
        <>
            <div className="ambient-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>
            <nav className="navbar">
                <a href="#home" className="brand-logo">
                    <img
                        src="https://www.haaditech.com/haditechlogo.svg"
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
                    <a href="#services">Services</a>
                    <a href="#technologies">Technologies</a>
                    <a href="#work">Work</a>
                    <a href="#pricing">Pricing</a>
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
                    <a href="#home" onClick={closeDrawer}>
                        Home
                    </a>

                    <a href="#services" onClick={closeDrawer}>
                        Services
                    </a>

                    <a href="#technologies" onClick={closeDrawer}>
                        Technologies
                    </a>

                    <a href="#work" onClick={closeDrawer}>
                        Work
                    </a>

                    <a href="#pricing" onClick={closeDrawer}>
                        Pricing
                    </a>
                </div>
            </aside>

            {/* =========================
          HERO
      ========================== */}

            <section id="home" className="hero reveal">
                <h1>
                    Software...
                    <br />
                    Built for You
                </h1>

                <p>
                    We craft custom, scalable, and high-performance software
                    solutions tailored to solve the unique challenges of your
                    business.
                </p>
                <a href="#work" className="btn">
                    Explore Our Work
                </a>
            </section>

            {/* <section id="intro" className="hero reveal">
                <h1>
                    Bring Your Ideas
                    <br />
                    to Life.
                </h1>

                <p>
                    Innovative digital solutions for startups and enterprises.
                </p>

                <a href="#work" className="btn">
                    Explore Our Work
                </a>
            </section> */}

            {/* =========================
          SERVICES
      ========================== */}

            <section id="services">
                <h2 className="section-title reveal">How We Work</h2>

                <p className="section-subtitle reveal">
                    We are a leading software development company dedicated to
                    helping businesses and individuals bring their ideas to life
                    through innovative digital solutions.
                </p>

                <div className="grid-2">
                    <div className="card reveal delay-1">
                        <h3>User Experience</h3>

                        <p>
                            Whether you're launching a startup, modernizing an
                            existing platform, or building a cross-platform
                            mobile application, our expert team is here to turn
                            your vision into reality.
                        </p>
                    </div>

                    <div className="card reveal delay-2">
                        <h3>Development</h3>

                        <p>
                            Our core services include custom website development
                            and the creation of powerful web applications
                            tailored for Android, iOS, and web platforms.
                        </p>
                    </div>

                    <div className="card reveal delay-3">
                        <h3>Scalability</h3>

                        <p>
                            With a strong focus on performance, scalability, and
                            user experience, we deliver end-to-end solutions
                            that are both visually compelling and functionally
                            robust.
                        </p>
                    </div>

                    <div className="card reveal delay-4">
                        <h3>Security</h3>

                        <p>
                            Our platform ensures enterprise-grade security
                            tailored to the needs of business users. We
                            prioritize data protection and privacy, giving our
                            clients the security they need to operate with
                            confidence.
                        </p>
                    </div>

                    <div className="card reveal delay-5">
                        <h3>Innovation</h3>

                        <p>
                            We combine modern technologies, creative thinking,
                            and proven development practices to build digital
                            products that keep your business ahead of the
                            competition.
                        </p>
                    </div>

                    <div className="card reveal delay-6">
                        <h3>Support & Maintenance</h3>

                        <p>
                            Our relationship doesn't end after launch. We
                            provide ongoing maintenance, updates, monitoring,
                            and technical support to keep your software reliable
                            and up to date.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================
          TECHNOLOGIES
      ========================== */}

            <section id="technologies">
                <h2 className="section-title reveal">Our TechStack</h2>

                <div className="services-list reveal delay-1">
                    <span className="tag">Web Development</span>
                    <span className="tag">App Development</span>
                    <span className="tag">SEO</span>
                    <span className="tag">IT Consultancy</span>
                </div>

                <h2 className="section-title reveal tech-stack-title">
                    Our Tech-Stack
                </h2>

                <div className="grid-2 tech-stack-grid reveal delay-2">
                    {/* App Development */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>App Development</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">React Native</span>
                                <span className="tag">Flutter</span>
                                <span className="tag">Android</span>
                                <span className="tag">iOS</span>
                            </div>
                        </div>
                    </div>

                    {/* Web Development */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>Web Development</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">JavaScript</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Angular.js</span>
                                <span className="tag">React.js</span>
                                <span className="tag">Vue.js</span>
                                <span className="tag">Java</span>
                                <span className="tag">PHP</span>
                                <span className="tag">Laravel</span>
                                <span className="tag">WordPress</span>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>Backend & APIs</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">Node.js</span>
                                <span className="tag">Express.js</span>
                                <span className="tag">REST APIs</span>
                                <span className="tag">PHP</span>
                                <span className="tag">Laravel</span>
                                <span className="tag">Java</span>
                            </div>
                        </div>
                    </div>

                    {/* Databases */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>Databases</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">MySQL</span>
                                <span className="tag">PostgreSQL</span>
                                <span className="tag">MongoDB</span>
                                <span className="tag">Firebase</span>
                                <span className="tag">Redis</span>
                            </div>
                        </div>
                    </div>

                    {/* Cloud */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>Cloud & DevOps</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">AWS</span>
                                <span className="tag">Google Cloud</span>
                                <span className="tag">Docker</span>
                                <span className="tag">Git</span>
                                <span className="tag">GitHub</span>
                                <span className="tag">CI/CD</span>
                            </div>
                        </div>
                    </div>

                    {/* CMS */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>CMS & E-Commerce</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">WordPress</span>
                                <span className="tag">WooCommerce</span>
                                <span className="tag">Shopify</span>
                                <span className="tag">Laravel</span>
                            </div>
                        </div>
                    </div>

                    {/* SEO */}

                    <div className="card tech-card">
                        <div className="tech-category">
                            <h4>SEO & Digital</h4>

                            <div className="services-list tech-tags">
                                <span className="tag">Technical SEO</span>
                                <span className="tag">Google Analytics</span>
                                <span className="tag">
                                    Google Search Console
                                </span>
                                <span className="tag">Google Tag Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          PROJECTS
      ========================== */}

            <section id="work" className="projects-section">
                <h2 className="section-title reveal">Our Completed Projects</h2>

                <p className="section-subtitle reveal">
                    From business websites to service-based platforms, we build
                    modern, responsive, and high-performance digital experiences
                    for businesses across different industries.
                </p>

                <div className="grid-2">
                    {/* VSFrame */}

                    <div className="card project-card reveal delay-1">
                        <div className="project-card-content">
                            <div className="project-location">
                                <span className="flag">🍁</span>
                                <span>Canada</span>
                            </div>

                            <span className="project-category">
                                Construction & Carpentry
                            </span>

                            <h3>VSFrame Construction</h3>

                            <p>
                                A professional website for a Metro Vancouver
                                construction company specializing in custom
                                decks, structural framing, drywall, and handyman
                                services.
                            </p>

                            <a
                                href="https://www.vsframe.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Visit Website →
                            </a>
                        </div>
                    </div>

                    {/* Advanced Healing Massage */}

                    <div className="card project-card reveal delay-2">
                        <div className="project-card-content">
                            <div className="project-location">
                                <span className="flag">🍁</span>
                                <span>Canada</span>
                            </div>

                            <span className="project-category">
                                Health & Wellness
                            </span>

                            <h3>Advanced Healing Massage</h3>

                            <p>
                                A modern therapy and massage website for a
                                Calgary-based wellness center, featuring
                                treatment services, massage packages,
                                appointment booking, and service information.
                            </p>

                            <a
                                href="https://ahml.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Visit Website →
                            </a>
                        </div>
                    </div>

                    {/* ARB Technologies */}

                    <div className="card project-card reveal delay-3">
                        <div className="project-card-content">
                            <div className="project-location">
                                <span className="flag">🦘</span>
                                <span>Australia</span>
                            </div>

                            <span className="project-category">Technology</span>

                            <h3>ARB Technologies Australia</h3>

                            <p>
                                A professional digital presence developed for
                                ARB Technologies Australia, designed to showcase
                                the company and its technology-focused services.
                            </p>

                            <a
                                href="https://www.arbittech.com.au/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Visit Website →
                            </a>
                        </div>
                    </div>

                    {/* Melbourne Silver Taxi */}

                    <div className="card project-card reveal delay-4">
                        <div className="project-card-content">
                            <div className="project-location">
                                <span className="flag">🦘</span>
                                <span>Australia</span>
                            </div>

                            <span className="project-category">
                                Transportation
                            </span>

                            <h3>Melbourne Silver Taxi</h3>

                            <p>
                                A responsive taxi booking website for Melbourne,
                                featuring airport transfers, local and
                                long-distance rides, fleet information, booking
                                options, and service details.
                            </p>

                            <a
                                href="https://www.melbournesilvertaxii.com.au/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Visit Website →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          PRICING
      ========================== */}

            <section id="pricing">
                <h2 className="section-title reveal">Our Prices</h2>

                <p className="section-subtitle reveal">
                    Transparent pricing tailored to your scale—from basic setups
                    to enterprise platforms.
                </p>
                <div className="mb-10">

                    <div style={{ textAlign: "center" }}>
                        <a href="/calculator" className="btn">
                            Open Calculator →
                        </a>
                    </div>
                </div>

                <div className="pricing-section reveal delay-2">
                    <h3>Website Development</h3>

                    <div className="grid-3">
                        <div className="card price-card">
                            <h4>Portfolio</h4>

                            <div className="price">$99</div>

                            <p className="desc">Up to 5 Pages</p>
                        </div>

                        <div className="card price-card highlight">
                            <h4>Small Business</h4>

                            <div className="price">$499</div>

                            <p className="desc">Up to 15 Pages</p>
                        </div>

                        <div className="card price-card">
                            <h4>Customized</h4>

                            <div className="price">$799</div>

                            <p className="desc">Up to 35 Pages</p>
                        </div>
                    </div>
                </div>

                {/* App Pricing */}

                <div className="pricing-section reveal delay-3">
                    <h3>App Development</h3>

                    <div className="grid-3">
                        <div className="card price-card">
                            <h4>Basic</h4>

                            <div className="price">$999 - $1,999</div>

                            <p className="desc">
                                Simple App. Includes basic features and core MVP
                                functionality.
                            </p>
                        </div>

                        <div className="card price-card highlight">
                            <h4>Team</h4>

                            <div className="price">$2,999 - $3,999</div>

                            <p className="desc">
                                Medium Complexity. Includes chat, payments, and
                                standard dashboards.
                            </p>
                        </div>

                        <div className="card price-card">
                            <h4>Enterprise</h4>

                            <div className="price">$4,999 - $6,000+</div>

                            <p className="desc">
                                Complex App. Includes marketplace logic,
                                real-time features, and multi-platform support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          FOOTER
      ========================== */}

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

                    <a href="#work">Our Work</a>
                    <a href="#services">Services</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#">Careers</a>
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
        </>
    );
}

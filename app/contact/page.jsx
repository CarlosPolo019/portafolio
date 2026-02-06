"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiMail, FiMapPin, FiPhone, FiShare2 } from "react-icons/fi";

const info = [
  {
    icon: <FiMail />,
    title: "Direct Message",
    description: "cmescorcia5@icloud.com",
    href: "mailto:cmescorcia5@icloud.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    description: "+57 (300) 492-4361",
    href: "tel:+573004924361",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    description: "Barranquilla, Colombia // Remote",
    href: "#",
  },
  {
    icon: <FiShare2 />,
    title: "Social Ecosystem",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/cmescorcia",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/carlos-escorcia-polo-0109441a6/",
      },
    ],
  },
];

const serviceNames = {
  "web-development": "Full-Stack Web Development",
  "backend-api": "Backend Development & API Design",
  "cloud-infrastructure": "Cloud Infrastructure & DevOps",
  "data-analytics": "Data Analytics & Business Intelligence",
  automation: "Process Automation & Integration",
  "technical-leadership": "Technical Leadership & Consulting",
  other: "Other / Custom Solution",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateEmailBody = () => {
    return `Hello Carlos,\n\nI would like to discuss a potential collaboration.\n\nCONTACT\n- Name: ${formData.fullname}\n- Email: ${formData.email}\n- Phone: ${formData.phone || "Not provided"}\n\nPROJECT\n- Service: ${serviceNames[formData.service] || "Not specified"}\n- Message: ${formData.message}\n\nBest regards,\n${formData.fullname}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4500);
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = `Portfolio Contact: ${formData.fullname} - ${serviceNames[formData.service] || "Project Inquiry"}`;
      const body = generateEmailBody();
      const mailtoUrl = `mailto:cmescorcia5@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          service: "web-development",
          message: "",
        });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 4500);
      }, 400);
    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4500);
    }
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#0b0d14]">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-85" />
        <div className="pointer-events-none absolute -left-28 -bottom-24 h-[380px] w-[380px] rounded-full bg-amber-400/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

        <main className="relative z-10 flex min-h-screen flex-col lg:flex-row">
          <motion.article
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.36, ease: "easeOut" } }}
            className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-20 xl:p-24"
          >
            <div className="max-w-xl">
              <span className="mb-7 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
                Available for hire
              </span>

              <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                Let&apos;s build something <span className="italic text-amber-400">extraordinary.</span>
              </h1>

              <p className="mb-12 text-base font-light leading-relaxed text-slate-400 md:text-lg">
                Currently available for high-impact engineering roles and architectural consultations. Seeking complex
                problems that require elegant, scalable code.
              </p>

              <div className="space-y-8">
                {info.map((item) => (
                  <div key={item.title} className="group flex items-start gap-5 md:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#242424] text-amber-400 transition-colors group-hover:border-violet-400/60 group-hover:text-violet-300">
                      {item.icon}
                    </div>

                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">{item.title}</p>

                      {item.description && item.href !== "#" && (
                        <a
                          className="text-lg font-medium text-white transition-colors hover:text-amber-400 md:text-xl"
                          href={item.href}
                        >
                          {item.description}
                        </a>
                      )}

                      {item.description && item.href === "#" && <p className="text-lg font-medium text-white md:text-xl">{item.description}</p>}

                      {item.links && (
                        <div className="mt-2 flex flex-wrap gap-4">
                          {item.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm font-semibold text-white underline decoration-[#2a2a2a] underline-offset-4 transition-colors hover:text-amber-400"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.36, ease: "easeOut" } }}
            className="flex w-full flex-col justify-center border-t border-[#222]/70 bg-[#111111]/55 p-8 backdrop-blur-sm lg:w-1/2 lg:border-l lg:border-t-0 lg:p-20 xl:p-24"
          >
            <div className="mx-auto w-full max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                      Identify Yourself
                    </label>
                    <input
                      className="w-full border-0 border-b border-[#333] bg-transparent py-3 text-lg font-light text-white placeholder:text-slate-700 focus:border-amber-400 focus:outline-none"
                      placeholder="Full Name"
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                      Electronic Mail
                    </label>
                    <input
                      className="w-full border-0 border-b border-[#333] bg-transparent py-3 text-lg font-light text-white placeholder:text-slate-700 focus:border-amber-400 focus:outline-none"
                      placeholder="email@address.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                      Phone (Optional)
                    </label>
                    <input
                      className="w-full border-0 border-b border-[#333] bg-transparent py-3 text-lg font-light text-white placeholder:text-slate-700 focus:border-amber-400 focus:outline-none"
                      placeholder="+57 300 492 4361"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                    Project Classification
                  </label>
                  <select
                    className="w-full appearance-none border-0 border-b border-[#333] bg-transparent py-3 text-lg font-light text-white focus:border-amber-400 focus:outline-none"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option className="bg-[#121212] text-white" value="web-development">Full-stack Development</option>
                    <option className="bg-[#121212] text-white" value="backend-api">Backend API Design</option>
                    <option className="bg-[#121212] text-white" value="cloud-infrastructure">Cloud Architecture</option>
                    <option className="bg-[#121212] text-white" value="data-analytics">Data Analytics & BI</option>
                    <option className="bg-[#121212] text-white" value="automation">Automation & Integration</option>
                    <option className="bg-[#121212] text-white" value="technical-leadership">Technical Consultation</option>
                    <option className="bg-[#121212] text-white" value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                    Message Payload
                  </label>
                  <textarea
                    className="w-full resize-none border-0 border-b border-[#333] bg-transparent py-3 text-lg font-light text-white placeholder:text-slate-700 focus:border-amber-400 focus:outline-none"
                    placeholder="Tell me about your extraordinary project..."
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button
                  className="group relative flex w-full items-center justify-between rounded-lg bg-amber-400 p-1 text-black transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span className="pl-6 text-sm font-extrabold uppercase tracking-[0.2em]">
                    {isSubmitting ? "Opening..." : "Initiate Contact"}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-black transition-colors group-hover:bg-amber-400">
                    <FiArrowRight className="text-amber-400 transition-colors group-hover:text-black" />
                  </div>
                </button>

                <div aria-live="polite" className="min-h-[24px]">
                  {submitStatus === "success" && (
                    <p className="text-sm text-emerald-400">Email client opened successfully. Your draft is ready.</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-red-400">Please complete name, email, and project message.</p>
                  )}
                </div>
              </form>

              <div className="mt-16 flex flex-col gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>System Status: Optimal</span>
                </div>
                <div>Encrypted Connection Enabled</div>
                <div>© 2026 Carlos Escorcia</div>
              </div>
            </div>
          </motion.article>
        </main>
      </section>
    </>
  );
};

export default Contact;

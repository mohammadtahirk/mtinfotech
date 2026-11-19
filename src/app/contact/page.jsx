'use client';
import { useState } from "react";
import Headings from "../../../components/Headings";
import CallFreeBtn from "../../../components/CommenElements/CallFreeBtn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Web Design & Development",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/kalaiwalatahir@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          "Project Type": formData.projectType,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();
      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Web Design & Development",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to deliver message via service.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: allow mailto redirect or display friendly instructions
      setStatus("error");
      setErrorMessage("Could not send automatically. Please click 'Send via Email App' below or contact directly at kalaiwalatahir@gmail.com.");
    }
  };

  const mailtoHref = `mailto:kalaiwalatahir@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType || 'Web Development'}`
  )}&body=${encodeURIComponent(
    `Hi Tahir,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section className="py-8 sm:py-12 lg:py-16 container mx-auto px-0">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <Headings 
          title="Contact" 
          innerTitle="Tahir" 
          subTitle="Let's Talk" 
          subTitleClassName="text-[#ffca9a]" 
        />
        <p className="text-white/60 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
          Have a project in mind, a question, or an exciting opportunity? Reach out directly by phone, email, or send a message below.
        </p>
      </div>

      <div className="max-w-5xl w-full mx-auto">
        {/* Contact Quick Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* Phone Card */}
          <a 
            href="tel:+916355744550" 
            className="p-6 rounded-2xl bg-[#1b1b1b] shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] border border-white/5 hover:border-[#ffca9a]/40 transition-all duration-300 group flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-[#161616] flex items-center justify-center shadow-inner flex-shrink-0 group-hover:bg-[#ffca9a]/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffca9a]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold group-hover:text-[#ffca9a] transition-colors">Direct Call</h4>
              <p className="text-white/80 font-medium text-sm mt-0.5">+91 6355744550</p>
              <span className="text-[11px] text-white/40">Available 9 AM - 9 PM IST</span>
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:kalaiwalatahir@gmail.com" 
            className="p-6 rounded-2xl bg-[#1b1b1b] shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] border border-white/5 hover:border-[#7e43fb]/40 transition-all duration-300 group flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-[#161616] flex items-center justify-center shadow-inner flex-shrink-0 group-hover:bg-[#7e43fb]/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e43fb]">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h4 className="text-white text-base font-semibold group-hover:text-[#7e43fb] transition-colors">Email Message</h4>
              <p className="text-white/80 font-medium text-sm mt-0.5 truncate">kalaiwalatahir@gmail.com</p>
              <span className="text-[11px] text-white/40">Replies within 24 hours</span>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/916355744550" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#1b1b1b] shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] border border-white/5 hover:border-[#00ff88]/40 transition-all duration-300 group flex items-center gap-4 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#161616] flex items-center justify-center shadow-inner flex-shrink-0 group-hover:bg-[#00ff88]/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00ff88]">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold group-hover:text-[#00ff88] transition-colors">WhatsApp Chat</h4>
              <p className="text-white/80 font-medium text-sm mt-0.5">+91 6355744550</p>
              <span className="text-[11px] text-[#00ff88] font-medium">Quick text chat</span>
            </div>
          </a>
        </div>

        {/* Contact Form Card */}
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/10 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              <p className="text-xs sm:text-sm text-white/50 mt-1">
                Fill out the form below to deliver your message directly to Tahir's email.
              </p>
            </div>
            <div className="text-xs text-white/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
              Delivered directly to kalaiwalatahir@gmail.com
            </div>
          </div>

          {status === "success" ? (
            <div className="p-8 sm:p-12 text-center bg-white/5 rounded-xl border border-[#00ff88]/30">
              <div className="w-16 h-16 rounded-full bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
              <p className="text-white/70 max-w-md mx-auto text-sm sm:text-base mb-6">
                Thank you for reaching out! Your message has been sent to Tahir at <span className="text-white font-medium">kalaiwalatahir@gmail.com</span>. He will respond to your email shortly.
              </p>
              <button 
                type="button"
                onClick={() => setStatus("idle")} 
                className="bg-white text-black font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-[#ffca9a] transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-200 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span>{errorMessage}</span>
                  <a 
                    href={mailtoHref} 
                    className="bg-white text-black font-semibold text-xs py-2 px-4 rounded-full whitespace-nowrap hover:bg-[#ffca9a] transition-colors"
                  >
                    Send via Email App
                  </a>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/60 font-medium mb-2">
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe" 
                    className="h-12 px-4 text-white bg-[#141414] border border-white/10 focus:border-[#ffca9a] focus:ring-1 focus:ring-[#ffca9a] outline-none rounded-xl w-full block transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/60 font-medium mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com" 
                    className="h-12 px-4 text-white bg-[#141414] border border-white/10 focus:border-[#ffca9a] focus:ring-1 focus:ring-[#ffca9a] outline-none rounded-xl w-full block transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-white/60 font-medium mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 (555) 000-0000" 
                    className="h-12 px-4 text-white bg-[#141414] border border-white/10 focus:border-[#ffca9a] focus:ring-1 focus:ring-[#ffca9a] outline-none rounded-xl w-full block transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-white/60 font-medium mb-2">
                    Project Type
                  </label>
                  <select 
                    id="projectType"
                    name="projectType" 
                    value={formData.projectType}
                    onChange={handleChange}
                    className="h-12 px-4 text-white bg-[#141414] border border-white/10 focus:border-[#ffca9a] focus:ring-1 focus:ring-[#ffca9a] outline-none rounded-xl w-full block transition-colors text-sm"
                  >
                    <option value="Web Design & Development">Web Design & Development</option>
                    <option value="React / Next.js Web App">React / Next.js Web App</option>
                    <option value="Figma to Code">Figma to Pixel-Perfect Code</option>
                    <option value="Landing Page & Conversion">Landing Page & Conversion</option>
                    <option value="Full Redesign / Mobile Optimization">Full Redesign / Mobile Optimization</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/60 font-medium mb-2">
                  Your Message or Project Details *
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, target audience, timeline, or any specific requirements..." 
                  className="p-4 text-white bg-[#141414] border border-white/10 focus:border-[#ffca9a] focus:ring-1 focus:ring-[#ffca9a] outline-none rounded-xl w-full block transition-colors text-sm resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto bg-white hover:bg-[#ffca9a] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 disabled:opacity-50 cursor-pointer text-sm sm:text-base"
                >
                  {status === "submitting" ? "Sending to kalaiwalatahir@gmail.com..." : "Submit Message"}
                </button>
                <div className="flex items-center gap-3">
                  <CallFreeBtn />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

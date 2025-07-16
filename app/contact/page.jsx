"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
 
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cmescorcia5@icloud.com",
    href: "mailto:cmescorcia5@icloud.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Barranquilla, Colombia",
    href: "#"
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Connect with me",
    href: "https://linkedin.com/in/carlos-escorcia"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const generateEmailBody = () => {
    const serviceNames = {
      "web-development": "Full-Stack Web Development",
      "backend-api": "Backend Development & API Design",
      "cloud-infrastructure": "Cloud Infrastructure & DevOps",
      "data-analytics": "Data Analytics & Business Intelligence",
      "automation": "Process Automation & Integration",
      "technical-leadership": "Technical Leadership & Consulting",
      "other": "Other / Custom Solution"
    };

    return `Hello Carlos,

I hope this message finds you well. I'm reaching out regarding potential collaboration on a project.

CONTACT INFORMATION:
• Name: ${formData.firstname} ${formData.lastname}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}

PROJECT DETAILS:
• Service Requested: ${serviceNames[formData.service] || 'Not specified'}
• Message: ${formData.message}

I look forward to hearing from you and discussing how we can work together.

Best regards,
${formData.firstname} ${formData.lastname}

---
This message was sent from your portfolio contact form.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate email content
      const subject = `Portfolio Contact: ${formData.firstname} ${formData.lastname} - ${formData.service ? formData.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Project Inquiry'}`;
      const body = generateEmailBody();
      
      // Create mailto URL
      const mailtoUrl = `mailto:cmescorcia5@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      // Show success message and reset form
      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1000);
      
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 2.6, duration: 0.4, ease: "easeOut" },
              }}
            >
              <h2 className="text-4xl xl:text-5xl font-bold text-white mb-4">
                Let's work together
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-[600px]">
                Ready to bring your ideas to life? Whether you need a full-stack web application, 
                cloud infrastructure optimization, or data analytics solutions, I'm here to help. 
                Let's discuss your project and create something extraordinary together.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="text" 
                    name="firstname"
                    placeholder="First name" 
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="text-black placeholder:text-gray-500"
                  />
                  <Input 
                    type="text" 
                    name="lastname"
                    placeholder="Last name" 
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="text-black placeholder:text-gray-500"
                  />
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-black placeholder:text-gray-500"
                  />
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-black placeholder:text-gray-500"
                  />
                </div>

                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="w-full text-black">
                    <SelectValue placeholder="Select a service" className="text-gray-500" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectLabel className="text-gray-700">Services</SelectLabel>
                      <SelectItem value="web-development" className="text-black hover:bg-gray-100">Full-Stack Web Development</SelectItem>
                      <SelectItem value="backend-api" className="text-black hover:bg-gray-100">Backend Development & API Design</SelectItem>
                      <SelectItem value="cloud-infrastructure" className="text-black hover:bg-gray-100">Cloud Infrastructure & DevOps</SelectItem>
                      <SelectItem value="data-analytics" className="text-black hover:bg-gray-100">Data Analytics & Business Intelligence</SelectItem>
                      <SelectItem value="automation" className="text-black hover:bg-gray-100">Process Automation & Integration</SelectItem>
                      <SelectItem value="technical-leadership" className="text-black hover:bg-gray-100">Technical Leadership & Consulting</SelectItem>
                      <SelectItem value="other" className="text-black hover:bg-gray-100">Other / Custom Solution</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  className="h-[200px] text-black placeholder:text-gray-500"
                  name="message"
                  placeholder="Tell me about your project, timeline, and specific requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="max-w-40 flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Opening...
                      </>
                    ) : (
                      "Send Email"
                    )}
                  </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400"
                  >
                    Email client opened successfully! Your message has been prepared and is ready to send.
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400"
                  >
                    Please fill in all required fields (Name, Email, and Message) before sending.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 2.8, duration: 0.4, ease: "easeOut" },
              }}
              className="w-full max-w-[400px]"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Available for freelance opportunities, full-time positions, and consulting projects. 
                    Based in Colombia with extensive remote work experience.
                  </p>
                </div>

                <div className="space-y-6">
                  {info.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 3 + index * 0.1, duration: 0.3 },
                        }}
                        className="flex items-center gap-6 group"
                      >
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60 text-sm font-medium">{item.title}</p>
                          {item.href === "#" ? (
                            <h3 className="text-lg xl:text-xl text-white font-semibold">{item.description}</h3>
                          ) : (
                            <a 
                              href={item.href}
                              className="text-lg xl:text-xl text-white font-semibold hover:text-accent transition-colors duration-300"
                            >
                              {item.description}
                            </a>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 3.5, duration: 0.4 },
                  }}
                  className="pt-6 border-t border-white/20"
                >
                  <h4 className="text-white font-semibold mb-3">Response Time</h4>
                  <p className="text-white/60 text-sm">
                    Typically respond within 24 hours during business days. 
                    For urgent projects, please mention it in your message.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 3.7, duration: 0.4 },
                  }}
                  className="pt-4"
                >
                  <h4 className="text-white font-semibold mb-3">Availability</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available for new projects</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Open to both short-term contracts and long-term collaborations
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
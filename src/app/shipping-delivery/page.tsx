// src/app/shipping-delivery/page.tsx
"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Truck, Package, Clock, CheckCircle, AlertCircle, Mail, Globe, Download } from "lucide-react";

export default function ShippingDeliveryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Shipping and Delivery Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="dark-card-bg p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-8"
                >
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At Bansohi Technology Private Limited, we specialize in digital services including app development, 
                    MVP development, backend systems, and SaaS platforms. Since our services are primarily digital, this 
                    Shipping and Delivery Policy outlines how we deliver our digital products and services to you.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Package className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">1. Nature of Our Services</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Bansohi Technology provides digital services and products, including:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Mobile applications (iOS and Android apps)</li>
                        <li>Web applications and SaaS platforms</li>
                        <li>Backend systems and APIs</li>
                        <li>Source code and project files</li>
                        <li>Documentation and technical specifications</li>
                        <li>Design files and assets</li>
                        <li>Digital deliverables and project milestones</li>
                      </ul>
                      <p>
                        All our deliverables are provided digitally through secure file transfer, cloud storage, 
                        or direct deployment to your servers/hosting platforms.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Download className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">2. Delivery Methods</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">2.1 Digital File Transfer</h3>
                        <p>
                          We deliver digital files through secure methods including:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Secure cloud storage links (Google Drive, Dropbox, etc.)</li>
                          <li>Git repositories (GitHub, GitLab, Bitbucket)</li>
                          <li>Secure file transfer protocols (SFTP, FTP)</li>
                          <li>Email attachments (for smaller files)</li>
                          <li>Direct deployment to your hosting/server</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">2.2 App Store Deployment</h3>
                        <p>
                          For mobile applications, we can assist with or handle:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>App Store (iOS) submission and deployment</li>
                          <li>Google Play Store (Android) submission and deployment</li>
                          <li>Internal testing and beta distribution</li>
                          <li>Production release coordination</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">2.3 Direct Deployment</h3>
                        <p>
                          For web applications and SaaS platforms, we can deploy directly to:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Your hosting provider (AWS, Azure, Google Cloud, etc.)</li>
                          <li>Your own servers</li>
                          <li>Third-party platforms (Vercel, Netlify, Heroku, etc.)</li>
                          <li>Staging and production environments</li>
                        </ul>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">3. Delivery Timeline</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">3.1 Project Milestones</h3>
                        <p>
                          Delivery timelines are specified in your service agreement. Generally:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li><strong>MVP Projects:</strong> 4-12 weeks from project start</li>
                          <li><strong>Full Mobile Apps:</strong> 8-20 weeks depending on complexity</li>
                          <li><strong>Web Applications:</strong> 6-16 weeks depending on scope</li>
                          <li><strong>Backend Systems:</strong> 4-12 weeks depending on requirements</li>
                          <li><strong>SaaS Platforms:</strong> 12-24 weeks for full-featured platforms</li>
                        </ul>
                        <p className="mt-2">
                          <strong>Note:</strong> Actual timelines may vary based on project complexity, client feedback speed, 
                          and scope changes. Specific timelines will be agreed upon in your service agreement.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">3.2 Milestone Deliveries</h3>
                        <p>
                          For larger projects, we deliver in milestones:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Design mockups and wireframes</li>
                          <li>Development milestones (sprints)</li>
                          <li>Beta/alpha versions for testing</li>
                          <li>Final production-ready deliverables</li>
                        </ul>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Delivery Confirmation</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Upon delivery of deliverables, we will:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Send you a delivery notification via email</li>
                        <li>Provide access credentials or download links</li>
                        <li>Include documentation and setup instructions</li>
                        <li>Request confirmation of receipt</li>
                        <li>Provide support for initial setup and deployment</li>
                      </ul>
                      <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mt-4">
                        <p className="text-foreground font-semibold mb-2">Important:</p>
                        <p className="text-sm">
                          Please confirm receipt of deliverables within 3 business days. If you do not receive 
                          deliverables by the agreed date, please contact us immediately.
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Delivery Delays</h2>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">5.1 Our Responsibility</h3>
                        <p>
                          If we are responsible for a delay in delivery, we will:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Notify you immediately of the delay and new expected delivery date</li>
                          <li>Provide regular updates on progress</li>
                          <li>Work to minimize the impact of the delay</li>
                          <li>Discuss compensation or adjustments if significant delays occur</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">5.2 Client-Caused Delays</h3>
                        <p>
                          Delays caused by client actions may extend the delivery timeline:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Delayed feedback or approvals</li>
                          <li>Scope changes or additional requirements</li>
                          <li>Delayed provision of necessary materials or access</li>
                          <li>Payment delays</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">5.3 Force Majeure</h3>
                        <p>
                          We are not responsible for delays caused by circumstances beyond our reasonable control, 
                          including natural disasters, pandemics, government actions, internet outages, or third-party 
                          service failures.
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Quality Assurance</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Before delivery, all deliverables undergo quality assurance:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Code review and testing</li>
                        <li>Functionality verification</li>
                        <li>Cross-platform compatibility testing</li>
                        <li>Performance optimization</li>
                        <li>Security checks</li>
                        <li>Documentation review</li>
                      </ul>
                      <p>
                        We provide testing versions (alpha/beta) for your review before final delivery.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">7. International Delivery</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p>
                        Since our services are digital, we can deliver to clients worldwide without additional shipping 
                        costs or customs issues. All deliverables are provided digitally through the methods described 
                        in Section 2. There are no geographical restrictions for our digital services.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Post-Delivery Support</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        After delivery, we provide:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Initial setup and deployment assistance</li>
                        <li>Bug fixes for issues discovered within the warranty period (typically 30-90 days)</li>
                        <li>Documentation and training materials</li>
                        <li>Technical support as per your service agreement</li>
                        <li>Optional maintenance and support packages</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">9. Delivery Issues</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        If you experience any issues with delivery:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Cannot access download links or files</li>
                        <li>Files are corrupted or incomplete</li>
                        <li>Missing deliverables or documentation</li>
                        <li>Technical issues with deployment</li>
                      </ul>
                      <p>
                        Please contact us immediately at hello@bansohi.com, and we will resolve the issue promptly. 
                        We typically respond within 24-48 hours and work to resolve delivery issues within 2-3 business days.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Physical Products</h2>
                    <div className="text-muted-foreground">
                      <p>
                        Currently, Bansohi Technology does not ship physical products. All our services and deliverables 
                        are digital. If we introduce physical products in the future, we will update this policy accordingly 
                        and provide shipping information including costs, methods, and timelines.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
                    <div className="text-muted-foreground">
                      <p>
                        We reserve the right to modify this Shipping and Delivery Policy at any time. Changes will be 
                        effective immediately upon posting on our website. We encourage you to review this policy periodically. 
                        Your continued use of our services after changes constitutes acceptance of the modified policy.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="mb-4">
                        If you have any questions about this Shipping and Delivery Policy, please contact us:
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p><strong className="text-foreground">Bansohi Technology Private Limited</strong></p>
                        <p>Email: hello@bansohi.com</p>
                        <p>Phone: +916204349329</p>
                        <p>Address: C/o Manju Devi Vill, Bansohi, Panchdurgauli, Saran, Chapra, Bihar - 841417, India</p>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


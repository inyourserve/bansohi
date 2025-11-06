"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Shield, FileText, Lock, Eye, Database, Mail } from "lucide-react";

export default function PrivacyPage() {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
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
                    At Bansohi Technology Private Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                    website or use our services.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">1.1 Personal Information</h3>
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Register for an account or consultation</li>
                          <li>Fill out contact forms or consultation requests</li>
                          <li>Subscribe to our newsletter or marketing communications</li>
                          <li>Communicate with us via email, phone, or other channels</li>
                        </ul>
                        <p className="mt-2">This information may include your name, email address, phone number, company name, and project details.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">1.2 Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>IP address and location data</li>
                          <li>Browser type and version</li>
                          <li>Operating system</li>
                          <li>Pages visited and time spent on pages</li>
                          <li>Referring website addresses</li>
                        </ul>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <p>We use the information we collect to:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process and respond to your inquiries and requests</li>
                        <li>Send you technical notices, updates, and support messages</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Monitor and analyze trends, usage, and activities</li>
                        <li>Detect, prevent, and address technical issues and security threats</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">3. Information Sharing and Disclosure</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                        <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                        <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p>
                        We implement appropriate technical and organizational security measures to protect your personal information 
                        against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                        the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">5. Your Rights</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Access:</strong> Request access to your personal information</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Objection:</strong> Object to processing of your personal information</li>
                        <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                        <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
                    <div className="text-muted-foreground">
                      <p>
                        We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                        do not accept cookies, you may not be able to use some portions of our website.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Children&apos;s Privacy</h2>
                    <div className="text-muted-foreground">
                      <p>
                        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                        information from children. If you are a parent or guardian and believe your child has provided us with personal 
                        information, please contact us.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
                    <div className="text-muted-foreground">
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                        Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy 
                        Policy periodically for any changes.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">9. Contact Us</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="mb-4">
                        If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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


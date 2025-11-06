"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Mail } from "lucide-react";

export default function TermsPage() {
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
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms and Conditions
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
                    These Terms and Conditions ("Terms") govern your use of the services provided by Bansohi Technology Private Limited 
                    ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms. If you do not 
                    agree to these Terms, please do not use our services.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p>
                        By accessing or using our website, services, or engaging with us for app development, MVP development, 
                        backend development, SaaS platforms, or any other services, you acknowledge that you have read, understood, 
                        and agree to be bound by these Terms and our Privacy Policy.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>Bansohi Technology provides the following services:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Mobile app development (iOS and Android)</li>
                        <li>MVP (Minimum Viable Product) development</li>
                        <li>Backend development and API integration</li>
                        <li>SaaS platform development</li>
                        <li>SEO and ASO optimization services</li>
                        <li>App maintenance and support</li>
                        <li>Consultation and project management services</li>
                      </ul>
                      <p>
                        The specific scope, timeline, and deliverables for each project will be outlined in a separate service 
                        agreement or statement of work.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. User Obligations</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>When using our services, you agree to:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Provide accurate, complete, and current information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Use our services only for lawful purposes</li>
                        <li>Not infringe upon the intellectual property rights of others</li>
                        <li>Not transmit any harmful code, viruses, or malicious software</li>
                        <li>Not attempt to gain unauthorized access to our systems</li>
                        <li>Comply with all applicable laws and regulations</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Payment terms for our services will be specified in the service agreement or invoice. Generally:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Payment is due as specified in the service agreement</li>
                        <li>We may require a deposit or advance payment before commencing work</li>
                        <li>Late payments may incur interest charges or result in suspension of services</li>
                        <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                        <li>Refunds are subject to our Cancellation and Refund Policy</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property Rights</h2>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">5.1 Client Content</h3>
                        <p>
                          You retain all rights to your content, data, and materials provided to us. You grant us a license to 
                          use such content solely for the purpose of providing our services.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">5.2 Deliverables</h3>
                        <p>
                          Upon full payment, ownership of the deliverables (code, designs, documentation) will transfer to you 
                          as specified in the service agreement. We retain the right to use general knowledge and experience 
                          gained from the project.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">5.3 Our Intellectual Property</h3>
                        <p>
                          Our proprietary tools, frameworks, methodologies, and pre-existing code remain our intellectual property 
                          and may not be used outside the scope of the project without our written permission.
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Project Timeline and Delays</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        We will make reasonable efforts to meet project timelines as specified in the service agreement. However:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Timelines are estimates and may be subject to change</li>
                        <li>Delays caused by client actions (e.g., delayed feedback, scope changes) may extend the timeline</li>
                        <li>We are not liable for delays caused by third-party services or force majeure events</li>
                        <li>We will communicate any significant delays and work to minimize their impact</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">7. Warranties and Disclaimers</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        We warrant that our services will be performed in a professional and workmanlike manner. However:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>We do not guarantee specific business results or outcomes</li>
                        <li>We are not responsible for third-party services, APIs, or platforms</li>
                        <li>Our services are provided "as is" without warranties of any kind, express or implied</li>
                        <li>We are not liable for issues arising from client-provided content or requirements</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                    <div className="text-muted-foreground">
                      <p>
                        To the maximum extent permitted by law, our total liability for any claims arising from or related to our 
                        services shall not exceed the total amount paid by you for the specific service giving rise to the claim. 
                        We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Confidentiality</h2>
                    <div className="text-muted-foreground">
                      <p>
                        We will maintain the confidentiality of your proprietary information and project details. We will not 
                        disclose such information to third parties without your consent, except as required by law or as 
                        necessary to provide our services.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>Either party may terminate a service agreement:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>With written notice as specified in the service agreement</li>
                        <li>Immediately for material breach of these Terms</li>
                        <li>Upon completion of the project and payment of all fees</li>
                      </ul>
                      <p>
                        Upon termination, you will pay for all services rendered up to the termination date. Our cancellation 
                        and refund policy will apply as specified in our Cancellation and Refund Policy.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law and Dispute Resolution</h2>
                    <div className="text-muted-foreground">
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising 
                        from or related to these Terms or our services shall be subject to the exclusive jurisdiction of the courts 
                        in Bihar, India. We encourage resolving disputes through good faith negotiation before pursuing legal action.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
                    <div className="text-muted-foreground">
                      <p>
                        We reserve the right to modify these Terms at any time. We will notify you of any material changes by 
                        posting the updated Terms on our website and updating the "Last updated" date. Your continued use of 
                        our services after such changes constitutes acceptance of the modified Terms.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">13. Contact Information</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="mb-4">
                        If you have any questions about these Terms, please contact us:
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


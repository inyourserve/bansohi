"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { RotateCcw, XCircle, CheckCircle, Clock, AlertCircle, Mail, DollarSign } from "lucide-react";

export default function CancellationRefundPage() {
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
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Cancellation and Refund Policy
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
                    At Bansohi Technology Private Limited, we strive to provide excellent service and ensure customer satisfaction. 
                    This Cancellation and Refund Policy outlines the terms and conditions for canceling services and requesting refunds. 
                    Please read this policy carefully before making a purchase or engaging our services.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">1. Cancellation Policy</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">1.1 Client-Initiated Cancellation</h3>
                        <p>
                          You may cancel a service agreement at any time by providing written notice to us. The cancellation will 
                          be effective as of the date we receive your written notice.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">1.2 Cancellation Fees</h3>
                        <p>The cancellation fees depend on the stage of the project:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li><strong>Before Project Commencement:</strong> Full refund of advance payment (if any), minus any non-refundable expenses already incurred</li>
                          <li><strong>During Development (0-25% complete):</strong> 50% of the total project fee or work completed, whichever is higher</li>
                          <li><strong>During Development (26-50% complete):</strong> 70% of the total project fee or work completed, whichever is higher</li>
                          <li><strong>During Development (51-75% complete):</strong> 85% of the total project fee or work completed, whichever is higher</li>
                          <li><strong>After 75% Completion:</strong> No refund; full payment is due for work completed</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">1.3 Our Right to Cancel</h3>
                        <p>
                          We reserve the right to cancel a service agreement in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Non-payment of fees after due notice</li>
                          <li>Breach of terms and conditions</li>
                          <li>Unreasonable demands or harassment of our team</li>
                          <li>Illegal or unethical project requirements</li>
                          <li>Force majeure events that prevent service delivery</li>
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
                      <DollarSign className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">2. Refund Policy</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">2.1 Eligibility for Refund</h3>
                        <p>Refunds may be available in the following situations:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Service cancellation within the eligible period (as per Section 1.2)</li>
                          <li>Failure to deliver services as agreed due to our fault</li>
                          <li>Material breach of service agreement by us</li>
                          <li>Duplicate payment or payment error</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">2.2 Non-Refundable Items</h3>
                        <p>The following are not eligible for refund:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Services already completed and delivered</li>
                          <li>Third-party fees (hosting, domain, API subscriptions, etc.)</li>
                          <li>Consultation fees for completed consultations</li>
                          <li>Any work completed beyond 75% of the project</li>
                          <li>Custom development work that has been delivered and accepted</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">2.3 Refund Processing</h3>
                        <p>
                          If you are eligible for a refund:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                          <li>Refund requests must be submitted in writing to hello@bansohi.com</li>
                          <li>We will review your request within 5-7 business days</li>
                          <li>Approved refunds will be processed within 10-15 business days</li>
                          <li>Refunds will be issued to the original payment method used</li>
                          <li>Bank transfer refunds may take additional 3-5 business days</li>
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
                      <h2 className="text-2xl font-bold text-foreground">3. Refund Timeline</h2>
                    </div>
                    <div className="text-muted-foreground space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="mb-2"><strong className="text-foreground">Processing Timeline:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Refund request review: 5-7 business days</li>
                          <li>Refund processing: 10-15 business days</li>
                          <li>Bank transfer: Additional 3-5 business days</li>
                          <li><strong>Total: 18-27 business days from request approval</strong></li>
                        </ul>
                      </div>
                      <p>
                        Please note that refund processing times may vary depending on your payment method and bank. 
                        International refunds may take longer.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Partial Refunds</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        In cases where work has been partially completed, we may offer a partial refund based on:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>The percentage of work completed</li>
                        <li>Resources and time already invested</li>
                        <li>Non-recoverable costs (third-party services, licenses, etc.)</li>
                        <li>Any deliverables already provided</li>
                      </ul>
                      <p>
                        The exact refund amount will be calculated and communicated to you within 5-7 business days 
                        of receiving your cancellation request.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Service Modifications</h2>
                    <div className="text-muted-foreground">
                      <p>
                        If you wish to modify the scope of work instead of canceling, we encourage you to discuss this with us. 
                        We may be able to adjust the project scope, timeline, or deliverables to better meet your needs. 
                        Modifications may result in additional fees or adjusted timelines, which will be communicated in advance.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">6. Dispute Resolution</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p>
                        If you are not satisfied with our refund decision, please contact us to discuss your concerns. 
                        We are committed to resolving disputes fairly and amicably. If we cannot reach a resolution, 
                        you may pursue legal remedies as per the governing law specified in our Terms and Conditions.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Special Circumstances</h2>
                    <div className="text-muted-foreground space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">7.1 Force Majeure</h3>
                        <p>
                          In cases of force majeure events (natural disasters, pandemics, government actions, etc.) that 
                          prevent us from delivering services, we will work with you to find a mutually acceptable solution, 
                          which may include project extension, partial refund, or service credit.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">7.2 Subscription Services</h3>
                        <p>
                          For recurring subscription services (maintenance, hosting, etc.), cancellations will take effect at 
                          the end of the current billing period. No refunds will be provided for the current billing period, 
                          but you will not be charged for future periods.
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. How to Request a Refund</h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>To request a refund, please follow these steps:</p>
                      <ol className="list-decimal list-inside ml-4 space-y-2">
                        <li>Send an email to hello@bansohi.com with the subject &quot;Refund Request&quot;</li>
                        <li>Include your project/service details, invoice number, and reason for refund</li>
                        <li>Provide your payment transaction details</li>
                        <li>Wait for our response (within 5-7 business days)</li>
                        <li>If approved, the refund will be processed as per Section 2.3</li>
                      </ol>
                      <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mt-4">
                        <p className="text-foreground font-semibold mb-2">Required Information for Refund Request:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                          <li>Full name and contact information</li>
                          <li>Project/service name and invoice number</li>
                          <li>Date of payment and payment method</li>
                          <li>Reason for refund request</li>
                          <li>Any supporting documentation</li>
                        </ul>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                    <div className="text-muted-foreground">
                      <p>
                        We reserve the right to modify this Cancellation and Refund Policy at any time. Changes will be 
                        effective immediately upon posting on our website. We encourage you to review this policy periodically. 
                        Your continued use of our services after changes constitutes acceptance of the modified policy.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">10. Contact Us</h2>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="mb-4">
                        If you have any questions about this Cancellation and Refund Policy, please contact us:
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

